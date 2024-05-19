const tokensNotPresent = {
	title: 'Klayr - Mainnet - Native tokens',
};

const tokensIncorrect = {
	title: 'Klayr - Mainnet - Native tokens',
	tokens: 'Tokens',
};

const tokenIDNotPresent = {
	title: 'Klayr - Mainnet',
	description: 'Metadata configuration for the Klayr blockchain (mainchain) in mainnet',
	chainName: 'klayr_mainchain',
	displayName: 'Klayr',
	chainID: '00000000',
	networkType: 'mainnet',
	genesisURL: 'https://downloads.klayr.com/klayr/mainnet/genesis_block.json.tar.gz',
	projectPage: 'https://klayr.com',
	logo: {
		png: 'https://klayr-qa.ams3.digitaloceanspaces.com/klayr.png',
		svg: 'https://klayr-qa.ams3.digitaloceanspaces.com/klayr.svg',
	},
	backgroundColor: '#f7f9fb',
	serviceURLs: [
		{
			http: 'https://mainnet-service.klayr.com',
			ws: 'wss://mainnet-service.klayr.com',
		},
	],
	explorers: [],
	appNodes: [
		{
			url: 'wss://mainnet.klayr.com',
			maintainer: 'Lightcurve GmbH',
		},
	],
};

const tokenNameNotPresent = {
	title: 'Klayr - Mainnet - Native tokens',
	tokens: [
		{
			tokenID: '0000000000000000',
			description: 'Default token for the entire Klayr ecosystem',
			denomUnits: [
				{
					denom: 'beddows',
					decimals: 0,
					aliases: [
						'Beddows',
					],
				},
				{
					denom: 'lsk',
					decimals: 8,
					aliases: [
						'Klayr',
					],
				},
			],
			baseDenom: 'beddows',
			displayDenom: 'lsk',
			symbol: 'LSK',
			logo: {
				png: 'https://klayr-qa.ams3.digitaloceanspaces.com/klayr.png',
				svg: 'https://klayr-qa.ams3.digitaloceanspaces.com/klayr.svg',
			},
		},
	],
};

const denomUnitsNotPresent = {
	title: 'Klayr - Mainnet - Native tokens',
	tokens: [
		{
			tokenID: '0000000000000000',
			tokenName: 'Klayr',
			description: 'Default token for the entire Klayr ecosystem',
			baseDenom: 'beddows',
			displayDenom: 'lsk',
			symbol: 'LSK',
			logo: {
				png: 'https://klayr-qa.ams3.digitaloceanspaces.com/klayr.png',
				svg: 'https://klayr-qa.ams3.digitaloceanspaces.com/klayr.svg',
			},
		},
	],
};

const denomUnitsDecimalsIncorrect = {
	title: 'Klayr - Mainnet - Native tokens',
	tokens: [
		{
			tokenID: '0000000000000000',
			tokenName: 'Klayr',
			description: 'Default token for the entire Klayr ecosystem',
			denomUnits: '<INCORRECT>',
			baseDenom: 'beddows',
			displayDenom: 'lsk',
			symbol: 'LSK',
			logo: {
				png: 'https://klayr-qa.ams3.digitaloceanspaces.com/klayr.png',
				svg: 'https://klayr-qa.ams3.digitaloceanspaces.com/klayr.svg',
			},
		},
	],
};

const denomUnitsDecimalsNotPresent = {
	title: 'Klayr - Mainnet - Native tokens',
	tokens: [
		{
			tokenID: '0000000000000000',
			tokenName: 'Klayr',
			description: 'Default token for the entire Klayr ecosystem',
			denomUnits: [
				{
					denom: 'beddows',
					aliases: [
						'Beddows',
					],
				},
				{
					denom: 'lsk',
					decimals: 8,
					aliases: [
						'Klayr',
					],
				},
			],
			baseDenom: 'beddows',
			displayDenom: 'lsk',
			symbol: 'LSK',
			logo: {
				png: 'https://klayr-qa.ams3.digitaloceanspaces.com/klayr.png',
				svg: 'https://klayr-qa.ams3.digitaloceanspaces.com/klayr.svg',
			},
		},
	],
};

const denomUnitsDenomNotPresent = {
	title: 'Klayr - Mainnet - Native tokens',
	tokens: [
		{
			tokenID: '0000000000000000',
			tokenName: 'Klayr',
			description: 'Default token for the entire Klayr ecosystem',
			denomUnits: [
				{
					decimals: 0,
					aliases: [
						'Beddows',
					],
				},
				{
					denom: 'lsk',
					decimals: 8,
					aliases: [
						'Klayr',
					],
				},
			],
			baseDenom: 'beddows',
			displayDenom: 'lsk',
			symbol: 'LSK',
			logo: {
				png: 'https://klayr-qa.ams3.digitaloceanspaces.com/klayr.png',
				svg: 'https://klayr-qa.ams3.digitaloceanspaces.com/klayr.svg',
			},
		},
	],
};

const baseDenomNotPresent = {
	title: 'Klayr - Mainnet - Native tokens',
	tokens: [
		{
			tokenID: '0000000000000000',
			tokenName: 'Klayr',
			description: 'Default token for the entire Klayr ecosystem',
			denomUnits: [
				{
					denom: 'beddows',
					decimals: 0,
					aliases: [
						'Beddows',
					],
				},
				{
					denom: 'lsk',
					decimals: 8,
					aliases: [
						'Klayr',
					],
				},
			],
			displayDenom: 'lsk',
			symbol: 'LSK',
			logo: {
				png: 'https://klayr-qa.ams3.digitaloceanspaces.com/klayr.png',
				svg: 'https://klayr-qa.ams3.digitaloceanspaces.com/klayr.svg',
			},
		},
	],
};

const displayDenomNotPresent = {
	title: 'Klayr - Mainnet - Native tokens',
	tokens: [
		{
			tokenID: '0000000000000000',
			tokenName: 'Klayr',
			description: 'Default token for the entire Klayr ecosystem',
			denomUnits: [
				{
					denom: 'beddows',
					decimals: 0,
					aliases: [
						'Beddows',
					],
				},
				{
					denom: 'lsk',
					decimals: 8,
					aliases: [
						'Klayr',
					],
				},
			],
			baseDenom: 'beddows',
			symbol: 'LSK',
			logo: {
				png: 'https://klayr-qa.ams3.digitaloceanspaces.com/klayr.png',
				svg: 'https://klayr-qa.ams3.digitaloceanspaces.com/klayr.svg',
			},
		},
	],
};

const symbolNotPresent = {
	title: 'Klayr - Mainnet - Native tokens',
	tokens: [
		{
			tokenID: '0000000000000000',
			tokenName: 'Klayr',
			description: 'Default token for the entire Klayr ecosystem',
			denomUnits: [
				{
					denom: 'beddows',
					decimals: 0,
					aliases: [
						'Beddows',
					],
				},
				{
					denom: 'lsk',
					decimals: 8,
					aliases: [
						'Klayr',
					],
				},
			],
			baseDenom: 'beddows',
			displayDenom: 'lsk',
			logo: {
				png: 'https://klayr-qa.ams3.digitaloceanspaces.com/klayr.png',
				svg: 'https://klayr-qa.ams3.digitaloceanspaces.com/klayr.svg',
			},
		},
	],
};

const logoNotPresent = {
	title: 'Klayr - Mainnet - Native tokens',
	tokens: [
		{
			tokenID: '0000000000000000',
			tokenName: 'Klayr',
			description: 'Default token for the entire Klayr ecosystem',
			denomUnits: [
				{
					denom: 'beddows',
					decimals: 0,
					aliases: [
						'Beddows',
					],
				},
				{
					denom: 'lsk',
					decimals: 8,
					aliases: [
						'Klayr',
					],
				},
			],
			baseDenom: 'beddows',
			displayDenom: 'lsk',
			symbol: 'LSK',
			logo: {
				png: 'https://klayr-qa.ams3.digitaloceanspaces.com/klayr.png',
				svg: 'https://klayr-qa.ams3.digitaloceanspaces.com/klayr.svg',
			},
		},
	],
};

const logoPngNotPresent = {
	title: 'Klayr - Mainnet - Native tokens',
	tokens: [
		{
			tokenID: '0000000000000000',
			tokenName: 'Klayr',
			description: 'Default token for the entire Klayr ecosystem',
			denomUnits: [
				{
					denom: 'beddows',
					decimals: 0,
					aliases: [
						'Beddows',
					],
				},
				{
					denom: 'lsk',
					decimals: 8,
					aliases: [
						'Klayr',
					],
				},
			],
			baseDenom: 'beddows',
			displayDenom: 'lsk',
			symbol: 'LSK',
			logo: {
				svg: 'https://klayr-qa.ams3.digitaloceanspaces.com/klayr.svg',
			},
		},
	],
};

const logoSvgNotPresent = {
	title: 'Klayr - Mainnet - Native tokens',
	tokens: [
		{
			tokenID: '0000000000000000',
			tokenName: 'Klayr',
			description: 'Default token for the entire Klayr ecosystem',
			denomUnits: [
				{
					denom: 'beddows',
					decimals: 0,
					aliases: [
						'Beddows',
					],
				},
				{
					denom: 'lsk',
					decimals: 8,
					aliases: [
						'Klayr',
					],
				},
			],
			baseDenom: 'beddows',
			displayDenom: 'lsk',
			symbol: 'LSK',
			logo: {
				png: 'https://klayr-qa.ams3.digitaloceanspaces.com/klayr.png',
			},
		},
	],
};

const logoPNGIncorrect = {
	title: 'Klayr - Mainnet - Native tokens',
	tokens: [
		{
			tokenID: '0000000000000000',
			tokenName: 'Klayr',
			description: 'Default token for the entire Klayr ecosystem',
			denomUnits: [
				{
					denom: 'beddows',
					decimals: 0,
					aliases: [
						'Beddows',
					],
				},
				{
					denom: 'lsk',
					decimals: 8,
					aliases: [
						'Klayr',
					],
				},
			],
			baseDenom: 'beddows',
			displayDenom: 'lsk',
			symbol: 'LSK',
			logo: {
				png: '<INCORRECT_URL>',
				svg: 'https://klayr-qa.ams3.digitaloceanspaces.com/klayr.svg',
			},
		},
	],
};

const logoSVGIncorrect = {
	title: 'Klayr - Mainnet - Native tokens',
	tokens: [
		{
			tokenID: '0000000000000000',
			tokenName: 'Klayr',
			description: 'Default token for the entire Klayr ecosystem',
			denomUnits: [
				{
					denom: 'beddows',
					decimals: 0,
					aliases: [
						'Beddows',
					],
				},
				{
					denom: 'lsk',
					decimals: 8,
					aliases: [
						'Klayr',
					],
				},
			],
			baseDenom: 'beddows',
			displayDenom: 'lsk',
			symbol: 'LSK',
			logo: {
				png: 'https://klayr-qa.ams3.digitaloceanspaces.com/klayr.png',
				svg: '<INCORRECT_URL>',
			},
		},
	],
};

const baseDenomWithIncorrectDecimals = {
	title: 'Klayr - Mainnet - Native tokens',
	tokens: [
		{
			tokenID: '0000000000000000',
			tokenName: 'Klayr',
			description: 'Default token for the entire Klayr ecosystem',
			denomUnits: [
				{
					denom: 'beddows',
					decimals: 8,
					aliases: [
						'Beddows',
					],
				},
				{
					denom: 'lsk',
					decimals: 8,
					aliases: [
						'Klayr',
					],
				},
			],
			baseDenom: 'beddows',
			displayDenom: 'lsk',
			symbol: 'LSK',
			logo: {
				png: 'https://klayr-qa.ams3.digitaloceanspaces.com/klayr.png',
				svg: 'https://klayr-qa.ams3.digitaloceanspaces.com/klayr.svg',
			},
		},
	],
};

const baseDenomNotInToken = {
	title: 'Klayr - Mainnet - Native tokens',
	tokens: [
		{
			tokenID: '0000000000000000',
			tokenName: 'Klayr',
			description: 'Default token for the entire Klayr ecosystem',
			denomUnits: [
				{
					denom: 'beddows',
					decimals: 0,
					aliases: [
						'Beddows',
					],
				},
				{
					denom: 'lsk',
					decimals: 8,
					aliases: [
						'Klayr',
					],
				},
			],
			baseDenom: 'invalidToken',
			displayDenom: 'lsk',
			symbol: 'LSK',
			logo: {
				png: 'https://klayr-qa.ams3.digitaloceanspaces.com/klayr.png',
				svg: 'https://klayr-qa.ams3.digitaloceanspaces.com/klayr.svg',
			},
		},
	],
};

module.exports = {
	tokensNotPresent,
	tokensIncorrect,
	tokenIDNotPresent,
	tokenNameNotPresent,
	denomUnitsNotPresent,
	denomUnitsDecimalsIncorrect,
	denomUnitsDecimalsNotPresent,
	denomUnitsDenomNotPresent,
	baseDenomNotPresent,
	displayDenomNotPresent,
	symbolNotPresent,
	logoNotPresent,
	logoPngNotPresent,
	logoSvgNotPresent,
	logoPNGIncorrect,
	logoSVGIncorrect,
	baseDenomWithIncorrectDecimals,
	baseDenomNotInToken,
};
