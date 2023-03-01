import { DieMMBlack, DieMMWhite } from './die.js';

Hooks.once('init', async function () {
	CONFIG.Dice.terms['w'] = DieMMWhite;
	CONFIG.Dice.terms['b'] = DieMMBlack;
});

Hooks.on('diceSoNiceRollComplete', (chatMessageID) => {
	let message = game.messages.get(chatMessageID);
	if (message.isAuthor) {
		let success = 0;
		let critical = 0;
		let failure = 0;
		let mmRoll = false;
		message.roll.dice.forEach((dice) => {
			if (dice instanceof DieMMWhite || dice instanceof DieMMBlack) {
				mmRoll = true;
				dice.results.forEach((res) => {
					switch (res.result) {
						case 1:
							if (dice instanceof DieMMBlack) failure++;
							break;
						case 5:
							success++;
							break;
						case 6:
							if (dice instanceof DieMMBlack) critical++;
							else success++;
							break;
					}
				});
			}
		});

		if (mmRoll) {
			let total = critical * 3 + success - failure;
			let content =
				critical > 0
					? `Critical: <b>${total}</b>`
					: `Success: <b>${total}</b>`;
			ChatMessage.create({
				content: content,
				whisper: message.data.whisper,
				blind: message.data.blind,
			});
		}
	}
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
