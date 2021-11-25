import { ContentData } from 'data/source/downloadableContent'
import { SourceData } from 'data/source/miscSources'

import { AmmunitionModificationsList } from './modifications/ammunition'
import { BarrelModificationsList } from './modifications/barrel'
import { BarrelExtModificationsList } from './modifications/barrelExt'
import { BayonetModificationsList } from './modifications/bayonet'
import { BipodModificationsList } from './modifications/bipod'
import { BoostModificationsList } from './modifications/boost'
import { CustomModificationsList } from './modifications/custom'
import { ExtraModificationsList } from './modifications/extra'
import { ForegripModificationsList } from './modifications/foregrip'
import { GadgetModificationsList } from './modifications/gadget'
import { GripModificationsList } from './modifications/grip'
import { LowerReceiverModifications } from './modifications/lowerReceiver'
import { MagazineModificationsList } from './modifications/magazine'
import { SightModificationsList } from './modifications/sight'
import { SlideModificationsList } from './modifications/slide'
import { StockModificationsList } from './modifications/stock'
import { UpperReceiverModificationsList } from './modifications/upperReceiver'
import { VerticalGripModificationsList } from './modifications/verticalGrip'
import { AkimboShotunsList } from './primary/akimboShotuns'
import { AssaultRifleList } from './primary/assaultRifles'
import { LightMachineGunList } from './primary/lightMachineGuns'
import { PrimaryShotgunList } from './primary/shotgunsPrimary'
import { SniperList } from './primary/snipers'
import { PrimarySpecialList } from './primary/specialsPrimary'
import { PistolList } from './secondary/pistols'
import { SecondaryShotgunList } from './secondary/shotgunsSecondary'
import { SecondarySpecialList } from './secondary/specialsSecondary'
import { SubmachineGunList } from './secondary/submachineGuns'

export type Slot = 'primary' | 'secondary'

type WeaponType = 'Assault Rifle' | 'Shotgun' | 'LMG' | 'Sniper' | 'Akimbo Pistol' | 'Akimbo Shotgun' | 'Akimbo SMG' | 'Special' | 'Pistol' | 'Submachine Gun'

export interface WeaponModifications {
	ammunition?: Modification<AmmunitionModificationsList>[];
	barrel?: Modification<BarrelModificationsList>[];
	barrelExt?: Modification<BarrelExtModificationsList>[];
	bayonet?: Modification<BayonetModificationsList>[];
	bipod?: Modification<BipodModificationsList>[];
	boost?: Modification<BoostModificationsList>[];
	custom?: Modification<CustomModificationsList>[];
	extra?: Modification<ExtraModificationsList>[];
	foregrip?: Modification<ForegripModificationsList>[];
	gadget?: Modification<GadgetModificationsList>[];
	grip?: Modification<GripModificationsList>[];
	magazine?: Modification<MagazineModificationsList>[];
	sight?: Modification<SightModificationsList>[];
	slide?: Modification<SlideModificationsList>[];
	stock?: Modification<StockModificationsList>[];
	upperReciever?: Modification<UpperReceiverModificationsList>[];
	lowerReciever?: Modification<LowerReceiverModifications>[];
	verticalGrip?: Modification<VerticalGripModificationsList>[];
}

export interface WeaponData {
	name: string;
	image: string;
	source: SourceData | ContentData;
	inventorySlot: 'primary' | 'secondary';
	reputation: number;
	weaponType: WeaponType;
	firingMode: 'Selective firing' | 'Semi-Automatic' | 'Lever Action' | 'Pump action' | 'Break Action' | 'Fully automatic' | 'Bolt action' | 'Single Shot' | 'Double action' | 'Single action';
	cost: number;
	stats: WeaponStats;
	extraStats: WeaponExtraStats;
	modifications: WeaponModifications;
	skins?: WeaponSkin[];
}

export interface WeaponStats {
	magazine: number;
	totalAmmo: number;
	rateOfFire: number;
	damage: number;
	accuracy: number;
	stability: number;
	concealment: number;
	threat: number;
}

export interface WeaponExtraStats {
	tacticalReload: number | [number, number] | null;
	reload: number;
	equipDelays: [number, number];
	ammoPickup: [number, number] | null;
	recoilHorizontal: [number, number];
	recoilVertical: [number, number];
	spread: number | null;
	damageModifier: [number, number] | null;
}

export type ModificationSlot = keyof WeaponModifications

export interface CompatibleWeapons {
	assaultRifle?: AssaultRifleList[];
	shotgun?: (PrimaryShotgunList | SecondaryShotgunList)[];
	lightMachineGun?: LightMachineGunList[];
	sniper?: SniperList[];
	// akimboPistol?: null[];
	akimboShotgun?: AkimboShotunsList[];
	// akimboSubmachineGun?: null[];
	special?: (PrimarySpecialList | SecondarySpecialList)[];
	pistol?: PistolList[];
	submachineGun?: SubmachineGunList[];
}

export interface Modification<ModificationName> {
	name: ModificationName;
	image: string;
	slot: ModificationSlot;
	source: SourceData | ContentData;
	cost: number;
	acquisition?: {
		package?: 'Green Mantis' | 'Yellow Bull' | 'Red Spider' | 'Blue Eagle' | 'Purple Snake';
		achievement?: string;
		bonus?: number;
		infinite?: true;
		coins?: number;
	};
	specialEffect?: string[];
	stats: {
		totalAmmo?: number;
		magazine?: number;
		reload?: number;
		damage?: number;
		accuracy?: number;
		stability?: number;
		concealment?: number;
		threat?: number;
	};
	compatibleWeapons: CompatibleWeapons;
	incompatibleSlot?: ModificationSlot[];
}

export type ModificationList<T extends string> = Record<T, Modification<T>>;

type StatBoost = 'accuracy' | 'concealment' | 'damage' | 'income' | 'stability' | 'total ammo'

interface WeaponSkin {
	name: string;
	image: string;
	rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
	statBoost: [number, StatBoost] | [[number, StatBoost], [number, StatBoost]];
	safe: string;
}

export interface Weapon {
	id: number;
	weapon: WeaponData;
	modifications: Partial<Record<ModificationSlot, Modification<string>>>;
	name?: string;
}