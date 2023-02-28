import { DieMMBlack, DieMMWhite } from './die.js';

Hooks.once('init', async function () {
	CONFIG.Dice.terms['w'] = DieMMWhite;
});

Hooks.once('init', async function () {
	CONFIG.Dice.terms['b'] = DieMMBlack;
});

Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({ id: 'memento-white', name: 'Memento Mori White' }, true);
	dice3d.addDicePreset({
		type: 'mmw',
		system: 'memento-white',
	});
});
Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({ id: 'memento-black', name: 'Memento Mori Black' }, true);
	dice3d.addDicePreset({
		type: 'mmb',
		system: 'memento-black',
	});
});
