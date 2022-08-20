import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { FaFolderOpen, FaTrash, FaUndoAlt, FaUpload } from 'react-icons/fa'
import { BuildSave, defaultBuild, useBuildsStore } from 'state/useBuildsStore'
import { blue, red } from 'utils/colours'
import { trpc } from 'utils/trpc'

import { BuildButton, BuildName, BuildSectionTitle, BuildWrapper } from './BuildsPanel-Elements'

interface LocalBuildsProps {
	setToggleBuilds: Dispatch<SetStateAction<boolean>>;
}

const LocalBuilds: FC<LocalBuildsProps> = ({ setToggleBuilds }) => {

	const { current, builds, removeBuild, updateName, changeBuild, importBuild } = useBuildsStore()

	const [clientBuilds, setClientBuilds] = useState<Record<number, BuildSave>>({})

	useEffect(() => {
		setClientBuilds(builds)
	}, [setClientBuilds, builds])

	const utils = trpc.useContext()

	const pushNewBuild = trpc.useMutation(['builds.pushNewBuild'], {
		onSuccess() {
			utils.invalidateQueries(['builds.getAllBuilds'])
		}
	})

	return (
		<>
			<BuildSectionTitle>Local Builds</BuildSectionTitle>

			{
				Object.values(clientBuilds).map(({ id, name, data }) => {
					const isLastBuild = Object.keys(builds).length > 1

					return <BuildWrapper key={id}>
						<BuildName
							type='text'
							placeholder='New Build . . .'
							value={name}
							onChange={event => {
								updateName(event.target.value, id)
							}}
						/>

						{
							id !== current ? <BuildButton title='Open Build' onClick={() => {
								changeBuild(id)
								importBuild(data, false)
								setToggleBuilds(false)
							}}> <FaFolderOpen /> </BuildButton> : <BuildButton title='Reset Build' onClick={() => {
								importBuild(defaultBuild, false)
							}}> <FaUndoAlt /> </BuildButton>
						}

						<BuildButton
							title='Delete Build'
							colour={isLastBuild ? blue : red}
							onClick={() => {
								if (isLastBuild) {
									const prevId = Object.values(builds).reverse().find(value => value.id !== id)?.id ?? 0
									changeBuild(prevId)
									removeBuild(id)
									importBuild(builds[prevId].data, false)
								}
							}}
						> <FaTrash /> </BuildButton>

						<BuildButton title='Upload Build' onClick={() => {
							if (pushNewBuild.isLoading) return
							pushNewBuild.mutate(builds[current].data)
						}}
						> <FaUpload /> </BuildButton>
					</BuildWrapper>
				})
			}
		</>
	)
}

export default LocalBuilds