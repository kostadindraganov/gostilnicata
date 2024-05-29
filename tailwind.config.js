const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				press: ['"Press Start 2P"', "cursive", ...defaultTheme.fontFamily.sans],
				pacifico: ['"Pacifico"', "cursive", ...defaultTheme.fontFamily.sans],
				markscript: [
					'"MarckScript"',
					"cursive",
					...defaultTheme.fontFamily.sans,
				],
				bg: ["Neue-regular-cyrillic", ...defaultTheme.fontFamily.sans],
				boldCyrillic: ["Neue-bold-cyrillic", ...defaultTheme.fontFamily.sans],
			},
		},
		backgroundImage: {
			stone: "url('~/assets/img/stone.jpeg')",
			stone1: "url('./assets/img/stone.jpeg')",
			stone2: "url('assets/img/stone.jpeg')",
			stone3: "url('/img/stone.jpeg')",
		},
	},
};
