const appConfig = {
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
			apiCertificatePublicKey: '-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwAOGlgzeePs8O7FjSU9a\nUKQg4EYSJNgQqkwD/ITAJ6TzcXRCUK+N230NaFcQ8EFJw/8Al0r8mpjpOOEpPZDq\n+WljcCRkVHXZCJMvgDNcstzdrt1fKzsCrER2jB3hDUXt04xzzlk8ArJG0JeD/CmW\nAsQqL/S6v/GRVTuViHqzWm2eF2XrduUK8wIbQ1y+7HoVdgZDf5MpuvEXluVX4IeJ\nMyzbn9djdrDkHkcbml8dOHyLE6GOS5jKtXj+bKhyTVlSZFbexxKYiBqCpR6kMUnM\nVrURmWGT+jb7UhGkJiP7EpFB7MjAB+yXMiygd6lz67qjG6wFky1wB9NYGJ/50rrV\nDQIDAQAB\n-----END PUBLIC KEY-----',

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

const nativeTokenConfig = {
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

module.exports = {
	appConfig,
	nativeTokenConfig,
};
