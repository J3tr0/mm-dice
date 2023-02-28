export class DieMMWhite extends Die {
	constructor(termData) {
		termData.faces = 6;
		super(termData);
	}

	/** @override */
	static DENOMINATION = 'w';

	static COMMAND = `d${DieMMWhite.DENOMINATION}`;
}

export class DieMMBlack extends DieMMWhite {
	/** @override */
	static DENOMINATION = 'b';

	static COMMAND = `d${DieMMBlack.DENOMINATION}`;
}
