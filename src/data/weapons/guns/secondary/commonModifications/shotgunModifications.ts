import ammunition, { AmmunitionModificationsList } from '../../modifications/ammunition'
import barrelExt, { BarrelExtModificationsList } from '../../modifications/barrelExt'
import boost, { BoostModificationsList } from '../../modifications/boost'
import gadget, { GadgetModificationsList } from '../../modifications/gadget'
import sight, { SightModificationsList } from '../../modifications/sight'
import { Modification } from '../../weaponTypes'

export const shotgunAmmunition: Modification<AmmunitionModificationsList>[] = [
	ammunition['000 Buckshot (Community)'],
	ammunition['000 Buckshot (DLC)'],
	ammunition['HE Round'],
	ammunition.Flechette,
	ammunition['AP Slug'],
	ammunition['Dragon\'s Breath Round']
]

export const shotgunBarrelExt: Modification<BarrelExtModificationsList>[] = [
	barrelExt['Shark Teeth Nozzle'],
	barrelExt['The Silent Killer Suppressor'],
	barrelExt['King\'s Crown Compensator'],
	barrelExt['Shh!'],
	barrelExt['Donald\'s Horizontal Leveller']
]

export const shotgunBoost: Modification<BoostModificationsList>[] = [
	boost.Concealment,
	boost.Stability,
	boost.Accuracy,
	boost['Accuracy (- Shotguns)'],
	boost['Team Boost']
]

export const shotgunGadget: Modification<GadgetModificationsList>[] = [
	gadget['Assault Light'],
	gadget['Tactical Laser Module'],
	gadget['Compact Laser Module'],
	gadget['Military Laser Module'],
	gadget['LED Combo']
]

export const shotgunGadgetMagnifier: Modification<GadgetModificationsList>[] = [
	...shotgunGadget,
	gadget['Riktpunkt Magnifier Gadget'],
	gadget['Signature Magnifier Gadget']
]

export const shotgunSight: Modification<SightModificationsList>[] = [
	sight['The Professional\'s Choice Sight'],
	sight['Surgeon Sight'],
	sight['See More Sight'],
	sight['Combat Sight'],
	sight['Speculator Sight'],
	sight['Trigonom Sight'],
	sight['Holographic Sight'],
	sight['Compact Holosight'],
	sight['Solar Sight'],
	sight['Military Red Dot Sight (1)'],
	sight['Military Red Dot Sight (2)'],
	sight['Milspec Scope'],
	sight['Acough Optic Scope'],
	sight['Compact Profile Sight'],
	sight['Maelstrom Sight'],
	sight['Advanced Combat Sight'],
	sight['Reconnaissance Sight']
]