import Container from 'components/Container'
import { FC, ReactElement, useState } from 'react'
import { FaCog } from 'react-icons/fa'

import BuildSelector from './BuildSelector'
import { ConfigContainer, SettingsButton, VersionContainer, VersionText } from './Home-Elements'
import BuildsPanel from './Panel/BuildsPanel'
import SettingsPanel from './Panel/SettingsPanel'
import Tabs from './Tabs'

export interface HoverInfo {
	title: string;
	description?: string[];
	table?: ReactElement;
}

const Home: FC = () => {

	const [toggleBuilds, setToggleBuilds] = useState(false)

	const [toggleSettings, setToggleSettings] = useState(false)

	return (
		<>
			<BuildsPanel
				toggleBuilds={toggleBuilds}
				setToggleBuilds={setToggleBuilds}
			/>

			<SettingsPanel
				toggleSettings={toggleSettings}
				setToggleSettings={setToggleSettings}
			/>

			<Container
				columns='2fr 1fr 1fr 1fr'
				rows='calc(100% - 3rem) 3rem'
				areas='"stats character weapons abilities" "version config config config"'
				backButton={false}
			>

				<Tabs />

				<VersionContainer>
					<VersionText>Payday Version: 222</VersionText>
					<VersionText>Builder Version: 0.3.2</VersionText>
				</VersionContainer>

				<ConfigContainer>

					<BuildSelector
						toggleBuilds={toggleBuilds}
						setToggleBuilds={setToggleBuilds}
						setToggleSettings={setToggleSettings}
					/>

					<SettingsButton onClick={() => {
						setToggleBuilds(false)
						setToggleSettings(!toggleSettings)
					}}>
						<FaCog />
					</SettingsButton>

				</ConfigContainer>

			</Container>
		</>
	)
}

export default Home
