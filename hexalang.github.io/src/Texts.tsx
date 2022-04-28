interface Texts {
	readonly [language: string]: { readonly [text: string]: string }
}

export const texts: Texts = {
	// Do not use!
	'en': {},
	// Italian
	'it': {
		'Follow': 'Follow',
		'Try': 'Try',
		'Learn': 'Learn',
		'Install': 'Install',
		'Donate': 'Donate',
		'Watch YouTube videos': 'Watch YouTube videos',
		'Directly in your browser': 'Directly in your browser',
		'Support': 'Support',
		'Sponsor on Patreon': 'Sponsor on Patreon',
		'Install on your device': 'Install on your device',
	},
	// Spain
	'es': {
		'Follow': 'Follow',
	},
	// German
	'de': {
		'Follow': 'Follow',
	},
	// French
	'fr': {
		'Follow': 'Follow',
	},
	// Japanese
	'ja': {
		'Follow': 'Follow',
	},
	// Kazakh
	'kk': {
		'Follow': 'Follow',
	},
	// Russian
	'ru': {
		'Follow': 'Follow',
	},
	// Arabic
	'ar': {
		'Follow': 'Follow',
	},
	// Ukrainian
	'uk': {
		'Follow': 'Follow',
	},
	// Chinese
	'zh': {
		'Follow': 'Follow',
	},
	// Korean
	'ko': {
		'Follow': 'Follow',
	},
	// Hindi
	'hi': {
		'Follow': 'Follow',
	},
	// Portuguese
	'pt': {
		'Follow': 'Follow',
	},
	// Polish
	'pl': {
		'Follow': 'Follow',
	},
	// Slovak
	'sk': {
		'Follow': 'Follow',
	},
	// Czech
	'cs': {
		'Follow': 'Follow',
	},
} as const
