import { MaskData } from 'data/character/masks'

const sokolCharacterPack: Record<string, MaskData> = {
	'Sokol---': {
		name: 'Sokol',
		image: 'sokol',
		description: [
			'If playing as a grinder for the St Petersburg Bombers hockey team taught Sokol the value of one thing, it was the importance of a terrifying mask that protects his handsome Russian face.'
		],
		collection: 'Sokol Character Pack DLC',
		rarity: 'Paid',
		unlock: 'THIS IS A SOKOL CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	'Sokol Begins': {
		name: 'Sokol Begins',
		image: 'sokol_begins',
		description: [
			'This is a clean version of Sokol\'s iconic mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'Sokol Character Pack DLC',
		rarity: 'Paid',
		unlock: 'THIS IS A SOKOL CHARACTER PACK ITEM!',
		cost: 'Free'
	}
}

export default sokolCharacterPack