import { DieMMBlack, DieMMWhite } from './die.js';

Hooks.once('init', async function () {
	CONFIG.Dice.terms['w'] = DieMMWhite;
	CONFIG.Dice.terms['b'] = DieMMBlack;
});

Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({ id: 'memento-mori', name: 'Memento Mori' }, false);
	dice3d.addDicePreset(
		{
			type: 'dw',
			labels: ['1', '2', '3', '4', '5', '6'],
			colorset: 'mm-white',
			system: 'memento-mori',
		},
		'd6'
	);
	dice3d.addDicePreset(
		{
			type: 'db',
			labels: ['1', '2', '3', '4', '5', '6'],
			colorset: 'mm-black',
			system: 'memento-mori',
		},
		'd6'
	);
	dice3d.addColorset(
		{
			name: 'mm-white',
			description: 'MM White',
			category: 'Colors',
			foreground: '#000000',
			background: '#FFFFFF',
			texture: 'none',
			edge: '#FFFFFF',
		},
		'no'
	);
	dice3d.addColorset(
		{
			name: 'mm-black',
			description: 'MM Black',
			category: 'Colors',
			foreground: '#FFFFFF',
			background: '#000000',
			texture: 'none',
			edge: '#000000',
		},
		'no'
	);
});
