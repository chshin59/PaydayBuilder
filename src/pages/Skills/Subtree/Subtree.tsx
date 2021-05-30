import { skillData, subtreeData, treeData } from 'data/abilities/skills'
import { useAppSelector } from 'hooks'
import React from 'react'

import Skill from './Skill'
import { Background, Container, Tier, TierWrapper } from './Subtree-Elements'

interface subtreeComponent {
	tree: treeData;
	subtree: subtreeData;
	setSkillHovered: React.Dispatch<React.SetStateAction<skillData | null>>;
}

const Subtree: React.FC<subtreeComponent> = ({ tree, subtree, setSkillHovered }) => {

	const { points, tier } = useAppSelector(state => state.skills.trees[tree.name][subtree.name])

	const skills = subtree.upgrades

	const backgroundBarHeight = (): number => {
		let total = 25 * tier
		if (tier === 3) total += (points / 16) * 25
		return total
	}

	return (
		<Container>

			<Background src={'images/skills/background.png'} height={backgroundBarHeight()}/>

			<TierWrapper>
				<Tier>
					<Skill tree={tree} subtree={subtree} skill={skills[5]} setSkillHovered={setSkillHovered}/>
				</Tier>

				<Tier>
					<Skill tree={tree} subtree={subtree} skill={skills[4]} setSkillHovered={setSkillHovered}/>
					<Skill tree={tree} subtree={subtree} skill={skills[3]} setSkillHovered={setSkillHovered}/>
				</Tier>

				<Tier>
					<Skill tree={tree} subtree={subtree} skill={skills[2]} setSkillHovered={setSkillHovered}/>
					<Skill tree={tree} subtree={subtree} skill={skills[1]} setSkillHovered={setSkillHovered}/>
				</Tier>

				<Tier>
					<Skill tree={tree} subtree={subtree} skill={skills[0]} setSkillHovered={setSkillHovered}/>
				</Tier>
			</TierWrapper>
			
		</Container>
	)
}

export default Subtree
