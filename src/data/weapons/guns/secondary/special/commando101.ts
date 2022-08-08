import content from 'data/source/downloadableContent'

import { WeaponData } from '../../weaponTypes'
import { specialBoost } from '../commonModifications/specialModifications'

const commando101: WeaponData = {
	name: 'Commando 101',
	image: 'ray',
	source: content['Scarface Heist'],
	inventorySlot: 'secondary',
	reputation: 41,
	weaponType: 'Special',
	firingMode: 'Single Shot',
	cost: 920e3,
	stats: {
		magazine: 4,
		totalAmmo: 8,
		rateOfFire: 60,
		damage: 6200,
		accuracy: 96,
		stability: 96,
		concealment: 5,
		threat: 37,
		reload: 5.75
	},
	extraStats: {
		tacticalReload: 6.0,
		equipDelays: [0.85, 0.85],
		ammoPickup: null,
		recoilHorizontal: [-0.3, 0.3],
		recoilVertical: [1.74, 1.8],
		spread: 0.24,
		damageModifier: null
	},
	modifications: {
		boost: specialBoost
	}
}

export default commando101