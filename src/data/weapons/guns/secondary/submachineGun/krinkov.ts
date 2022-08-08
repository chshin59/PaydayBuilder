import source from 'data/source/miscSources'

import barrelExt from '../../modifications/barrelExt'
import extra from '../../modifications/extra'
import foregrip from '../../modifications/foregrip'
import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'
import { submachineGunBarrelExt, submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSight } from '../commonModifications/submachineGunModifications'

const krinkov: WeaponData = {
	name: 'Krinkov',
	image: 'akmsu',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 29,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 652e3,
	stats: {
		magazine: 30,
		totalAmmo: 90,
		rateOfFire: 822,
		damage: 99,
		accuracy: 60,
		stability: 44,
		concealment: 21,
		threat: 22,
		reload: 3.9
	},
	extraStats: {
		tacticalReload: 2.15,
		equipDelays: [0.6, 0.55],
		ammoPickup: [0.9, 3.15],
		recoilHorizontal: [-1.9, 1.9],
		recoilVertical: [1.14, 1.52],
		spread: 2.4,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrelExt: [
			...submachineGunBarrelExt,
			barrelExt['PBS Suppressor']
		],
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		extra: [
			extra['Scope Mount (AK)']
		],
		foregrip: [
			foregrip['Moscow Special Rail'],
			foregrip['Aluminum Foregrip']
		],
		gadget: submachineGunGadget,
		grip: [
			grip['AK Rubber Grip'],
			grip['AK Plastic Grip'],
			grip['AK Wood Grip'],
			grip['Aluminum Grip']
		],
		magazine: [
			magazine['AK Quadstacked Mag'],
			magazine['Low Drag Magazine'],
			magazine['Speed Pull Magazine']
		],
		sight: submachineGunSight,
		stock: [
			stock['Standard Stock (Main)'],
			stock['Tactical Stock (Main)'],
			stock['Skeletal Stock (Main)'],
			stock['Wooden Sniper Stock'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['Classic Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock']
		]
	}
}

export default krinkov