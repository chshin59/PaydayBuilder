import source from 'data/source/miscSources'

import barrelExt from '../../modifications/barrelExt'
import extra from '../../modifications/extra'
import lowerReceiver from '../../modifications/lowerReceiver'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'
import { submachineGunBarrelExt, submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSight } from '../commonModifications/submachineGunModifications'

const mark10: WeaponData = {
	name: 'Mark 10',
	image: 'mac10',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 2,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 58e3,
	stats: {
		magazine: 40,
		totalAmmo: 160,
		rateOfFire: 1000,
		damage: 58,
		accuracy: 48,
		stability: 64,
		concealment: 27,
		threat: 10,
		reload: 2.7
	},
	extraStats: {
		tacticalReload: 2.0,
		equipDelays: [0.5, 0.5],
		ammoPickup: [4.8, 8.8],
		recoilHorizontal: [-0.7, 0.7],
		recoilVertical: [0.98, 1.4],
		spread: 3.12,
		damageModifier: [1.0, 0.6]
	},
	modifications: {
		barrelExt: [
			...submachineGunBarrelExt,
			barrelExt['Werbell\'s Suppressor'],
			barrelExt['Slotted Barrel Extension']
		],
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		extra: [
			extra['Railed Handguard']
		],
		gadget: submachineGunGadget,
		lowerReceiver: [
			lowerReceiver['Custom Built Frame']
		],
		magazine: [
			magazine['Extended Mag. (Mark 10)'],
			magazine['Speed Pull Magazine']
		],
		sight: submachineGunSight,
		stock: [
			stock['Skeletal Stock (Mark 10)']
		]
	}
}

export default mark10