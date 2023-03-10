import CollectionsTab from 'components/CollectionsTab'
import Container from 'components/Container'
import { InfoContainer, InfoCost, InfoDescription, InfoTitle, InfoUnlock } from 'components/elements/infoElements'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName } from 'components/elements/itemElements'
import HorizontalBar from 'components/HorizontalBar'
import Info from 'components/Info'
import { type AllMasks, type Category, type CategoryList, type Collection, type MaskData } from 'data/character/masks'
import { type ContentRarity } from 'data/source/downloadableContent'
import useMountEffect from 'hooks/useMountEffect'
import useObjectState from 'hooks/useObjectState'
import { type NextPage } from 'next'
import { type Dispatch, type FC, type MutableRefObject, type RefObject, type SetStateAction, createRef, useCallback, useEffect, useRef, useState } from 'react'
import { useCharacterStore } from 'state/useCharacterStore'
import styled, { css, keyframes } from 'styled-components'
import { itemColours } from 'utils/colours'
import findMask from 'utils/findMask'
import { capitalizeEachWord } from 'utils/stringCases'

const rainbow = keyframes`
	0% {
		color: #3BAEFE;
	}
	18% {
		color: #FFD400;
	}
	36% {
		color: #FFF;
	}
	54% {
		color: #FF9100;
	}
	72% {
		color: #FE5D63;
	}
	90% {
		color: #FF1AFF;
	}
	100% {
		color: #3BAEFE;
	}
`

const rainbowAnimation = css`
	animation: ${rainbow} 4s linear 0s infinite;
`

const MaskItemContainer = styled(ItemContainer)`
	flex-direction: column;
	flex-wrap: nowrap;
`

const MaskCollectionContainer = styled.div`
	display: flex;
	flex-direction: column;
`

interface MaskCollectionTitleProps {
	colour: string;
}

const MaskCollectionTitle = styled.h1<MaskCollectionTitleProps>`
	font-size: 1.5rem;
	padding-left: 32px;
	color: ${props => props.colour};
`

const MaskWrapper = styled.div`
	padding-top: 16px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`

const Mask: NextPage = () => {

	const [categories, setCategories] = useObjectState<AllMasks>({
		community: {},
		normal: {},
		dlc: {},
		event: {},
		collaboration: {},
		infamous: {}
	})
	const [selectedTab, setSelectedTab] = useState<CategoryList | 'all'>('community')

	const equippedMask = findMask(useCharacterStore(state => state.mask))
	const [selectedMask, setSelectedMask] = useState<MaskData>(equippedMask)

	const itemContainerRef = useRef<HTMLDivElement>(null)
	const collectionRefs = useRef<(HTMLDivElement | null)[] | RefObject<HTMLDivElement>[]>([])

	const addToCategory = useCallback(async (category: CategoryList): Promise<void> => {
		const loadMaskData = (category: CategoryList): Promise<Category> => new Promise((res, rej) => {
			import(`../data/character/mask/${category}`).then(data => {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
				res(data.default as unknown as Category)
			}).catch(err => rej(err))
		})
		const newCategoryData = await loadMaskData(category)
		setCategories({ [category]: newCategoryData })
	}, [setCategories])

	const getCurrentData = useCallback((): Category => {
		const allDataArray = Object.entries(categories ?? {}).map(([key, value]) => {
			const collections = Object.entries(value).map<[string, Collection]>(([title, data]) => [`${key}?${title}`, data])
			return Object.fromEntries(collections)
		})
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const allData: Category = Object.assign({}, ...allDataArray)
		return (selectedTab === 'all' ? allData : categories[selectedTab]) ?? {}
	}, [categories, selectedTab])

	useMountEffect(() => {
		addToCategory('community').catch(console.error)
	})

	useEffect(() => {
		if (selectedTab === 'all') {
			const allCategories: CategoryList[] = ['community', 'normal', 'dlc', 'event', 'collaboration', 'infamous']
			allCategories.forEach(categories => void addToCategory(categories))
		} else {
			addToCategory(selectedTab).catch(console.error)
		}
	}, [selectedTab, addToCategory])

	return (
		<Container
			title='Mask'
			desktopLayout={{
				rows: '4rem 2rem auto 4rem',
				areas: '"title title" "horizontalbar infotabs" "items info" "items back"'
			}}
			mobileLayout={{
				rows: '3rem 1.5rem auto 1rem 150px',
				areas: '"title title" "horizontalbar horizontalbar" "items items" "infotabs ." "info back"'
			}}
		>

			<MaskHorizontalBar
				selectedTab={selectedTab}
				setSelectedTab={setSelectedTab}
				itemContainerRef={itemContainerRef}
			/>

			<MaskItemContainer ref={itemContainerRef}>
				{
					Object.entries(getCurrentData()).map(([collectionTitle, collectionMasks], i) => {
						return <MaskCollection
							key={collectionTitle}
							collectionTitle={collectionTitle}
							collectionMasks={collectionMasks}
							selectedMask={selectedMask}
							setSelectedMask={setSelectedMask}
							equippedMask={equippedMask}
							collectionRefs={collectionRefs}
							getCurrentData={getCurrentData}
							i={i}
						/>
					})
				}
			</MaskItemContainer>

			<Info tabs={{
				mask: <MaskInfoTab selectedMask={selectedMask} />,
				collections: <CollectionsTab
					collectionRefs={collectionRefs}
					collections={getCurrentData()}
				/>
			}} />

		</Container>
	)
}

interface MaskHorizontalBarProps {
	selectedTab: CategoryList | 'all';
	setSelectedTab: Dispatch<SetStateAction<MaskHorizontalBarProps['selectedTab']>>;
	itemContainerRef: RefObject<HTMLDivElement>;
}

const MaskHorizontalBar: FC<MaskHorizontalBarProps> = ({ selectedTab, setSelectedTab, itemContainerRef }) => {

	const stringToRarity = (rarity: CategoryList): ContentRarity => {
		if (rarity === 'dlc') return 'Paid'
		return capitalizeEachWord(rarity) as ContentRarity
	}

	const allCategories: (CategoryList | 'all')[] = ['all', 'community', 'normal', 'dlc', 'event', 'collaboration', 'infamous']

	return (
		<HorizontalBar active={selectedTab} items={allCategories.map(rarity => ({
			label: rarity,
			callback: () => {
				setSelectedTab(rarity)
				itemContainerRef.current?.scrollTo(0, 0)
			},
			colour: rarity !== 'all' ? itemColours[stringToRarity(rarity)] : 'rainbow',
			additionalStyling: rarity === 'all' ? rainbowAnimation : null
		}))} />
	)
}

interface MaskCollectionProps {
	collectionTitle: string;
	collectionMasks: Collection;
	selectedMask: MaskData;
	setSelectedMask: Dispatch<SetStateAction<MaskCollectionProps['selectedMask']>>;
	equippedMask: MaskData;
	collectionRefs: MutableRefObject<(HTMLDivElement | null)[] | RefObject<HTMLDivElement>[]>;
	getCurrentData: () => Category;
	i: number;
}

const MaskCollection: FC<MaskCollectionProps> = ({ collectionTitle, collectionMasks, selectedMask, setSelectedMask, equippedMask, collectionRefs, getCurrentData, i }) => {

	const changeMask = useCharacterStore(state => state.changeMask)

	const equipMaskHandler = (): void => {
		if (selectedMask.name === equippedMask.name) return
		changeMask(selectedMask.name)
	}

	const { rarity } = Object.values(collectionMasks.masks)[0]
	const collectionColour = itemColours[rarity]

	collectionRefs.current = Array.from({ length: Object.keys(getCurrentData()).length }, () => createRef<HTMLDivElement>())

	const title = collectionTitle.split('?').at(-1)

	return (
		<MaskCollectionContainer key={collectionTitle} ref={ref => {
			collectionRefs.current[i] = ref
		}}>
			<MaskCollectionTitle colour={collectionColour}>{title}</MaskCollectionTitle>
			<MaskWrapper key={collectionTitle}>
				{
					Object.entries(collectionMasks.masks).map(([maskName, maskData]) => {
						return <Item
							key={maskName}
							width={128}
							rowAmount={10}
							selected={maskName === selectedMask.name}
							onClick={() => maskName === selectedMask.name ? equipMaskHandler() : setSelectedMask(maskData)}
						>
							<ItemName colour={itemColours[maskData.rarity]}>{maskName.replaceAll(' ', '\n')}</ItemName>
							{maskName === equippedMask.name && <ItemEquipped />}
							<ItemImage src={`/images/masks/${maskData.image || 'character_locked'}.webp`} onMouseDown={event => event.preventDefault()} />
						</Item>
					})
				}
			</MaskWrapper>
		</MaskCollectionContainer>
	)
}

interface MaskTabProps {
	selectedMask: MaskData;
}

const MaskInfoTab: FC<MaskTabProps> = ({ selectedMask }) => {
	return (
		<InfoContainer>
			<InfoTitle>{selectedMask.name}</InfoTitle>
			<InfoDescription>{selectedMask.description.join('\n\n')}</InfoDescription>
			<InfoUnlock colour={itemColours[selectedMask.rarity]}>{selectedMask.unlock}</InfoUnlock>
			<InfoCost>{selectedMask.cost}</InfoCost>
		</InfoContainer>
	)
}

Mask.getInitialProps = () => ({})

export default Mask