import content from 'data/source/downloadableContent'

import { CompatibleWeapons, WeaponModificationList } from '../weaponTypes'

const AKRifles: CompatibleWeapons = {
	assaultRifle: [
		'AK Rifle',
		'AK.762',
		'Golden AK.762 Rifle',
		'AK17 Rifle'
	],
	shotgun: [
		'IZHMA 12G Shotgun'
	],
	lightMachineGun: [
		'RPK Light Machine Gun'
	],
	submachineGun: [
		'Krinkov Submachine Gun',
		'Tatonka Submachine Gun'
	]
}

export type GripModificationsList =
	// AK Rifles
	'AK Rubber Grip' |
	'AK Plastic Grip' |
	'AK Wood Grip' |
	'Aluminum Grip' |

	// Commando 553
	'Enhanced Grip'

const grip: WeaponModificationList<GripModificationsList> = {
	'AK Rubber Grip': {
		name: 'AK Rubber Grip',
		image: 'wpn_fps_upg_ak_g_hgrip',
		slot: 'Grip',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Green Mantis'
		},
		stats: {
			stability: 8,
			concealment: 2
		},
		compatibleWeapons: AKRifles
	},
	'AK Plastic Grip': {
		name: 'AK Plastic Grip',
		image: 'wpn_fps_upg_ak_g_pgrip',
		slot: 'Grip',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Yellow Bull'
		},
		stats: {
			accuracy: 8,
			stability: -8
		},
		compatibleWeapons: AKRifles
	},
	'AK Wood Grip': {
		name: 'AK Wood Grip',
		image: 'wpn_fps_upg_ak_g_wgrip',
		slot: 'Grip',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Red Spider'
		},
		stats: {
			stability: 12,
			concealment: -1
		},
		compatibleWeapons: AKRifles
	},
	'Aluminum Grip': {
		name: 'Aluminum Grip',
		image: 'wpn_fps_upg_ak_g_rk3',
		slot: 'Grip',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Hey Mr.DJ'
		},
		stats: {
			accuracy: 4,
			concealment: 1
		},
		compatibleWeapons: AKRifles
	},
	'Enhanced Grip': {
		name: 'Enhanced Grip',
		image: 'wpn_fps_ass_s552_g_standard_green',
		slot: 'Grip',
		source: content['Armored Transport'],
		cost: 33600,
		stats: {
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			assaultRifle: [
				'Commando 553 Rifle'
			]
		}
	}
}

export default grip