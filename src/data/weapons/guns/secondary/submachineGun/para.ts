import source from 'data/source/miscSources'

import barrel from '../../modifications/barrel'
import foregrip from '../../modifications/foregrip'
import grip from '../../modifications/grip'
import lowerReceiver from '../../modifications/lowerReceiver'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import upperReceiver from '../../modifications/upperReceiver'
import { WeaponData } from '../../weaponTypes'
import { submachineGunBarrelExt, submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSight } from '../commonModifications/submachineGunModifications'

const para: WeaponData = {
	name: 'Para',
	image: 'olympic',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 19,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 418e3,
	stats: {
		magazine: 25,
		totalAmmo: 150,
		rateOfFire: 682,
		damage: 65,
		accuracy: 44,
		stability: 64,
		concealment: 24,
		threat: 14,
		reload: 3.23
	},
	extraStats: {
		tacticalReload: 2.16,
		equipDelays: [0.5, 0.6],
		ammoPickup: [4.5, 8.25],
		recoilHorizontal: [-1.4, 1.4],
		recoilVertical: [0.84, 1.12],
		spread: 3.36,
		damageModifier: [1.0, 0.6]
	},
	modifications: {
		barrel: [
			barrel['Medium Barrel (Para)']
		],
		barrelExt: submachineGunBarrelExt,
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		foregrip: [
			foregrip['Railed Handguard'],
			foregrip['Aftermarket Shorty']
		],
		gadget: submachineGunGadget,
		grip: [
			grip['Ergo Grip (Main)'],
			grip['Pro Grip'],
			grip['Rubber Grip'],
			grip['Straight Grip'],
			grip['Contractor Grip']
		],
		lowerReceiver: [
			lowerReceiver['THRUST Lower Receiver']
		],
		magazine: [
			magazine['Milspec Mag.'],
			magazine['Tactical Mag.'],
			magazine['CAR Quadstacked Mag'],
			magazine['Expert Mag'],
			magazine['L5 Magazine'],
			magazine['Speed Pull Magazine']
		],
		sight: submachineGunSight,
		stock: [
			stock['Standard Stock (Main)'],
			stock['Tactical Stock (Main)'],
			stock['Shorter Than Short Stock'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock']
		],
		upperReceiver: [
			upperReceiver['Exotique Receiver'],
			upperReceiver['LW Upper Receiver'],
			upperReceiver['THRUST Upper Receiver']
		]
	}
}

export default para