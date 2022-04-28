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
		'Follow': '关注',
		'Try': 'Try',
		'Learn': '学会',
		'Install': '安装',
		'Donate': '捐赠',
		'Watch YouTube videos': '观看 YouTube 视频',
		'Directly in your browser': '直接在浏览器中',
		'Support': '支持',
		'Sponsor on Patreon': 'Patreon 的赞助商',
		'Install on your device': '在您的设备上安装',
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
		'Follow': 'Follować',
		'Try': 'Spróbować',
		'Learn': 'Uczyć się',
		'Install': 'Zainstalować',
		'Donate': 'Darowizna',
		'Watch YouTube videos': 'Oglądać video z YouTube',
		'Directly in your browser': 'Bezpośrednio w przeglądarce',
		'Support': 'Pomoc',
		'Sponsor on Patreon': 'Sponsor na Patreonie',
		'Install on your device': 'Zainstaluj na swoim urządzeniu',
	},
	// Slovak
	'sk': {
		'Follow': 'Sledovať',
		'Try': 'Vyskúšať',
		'Learn': 'Učte sa',
		'Install': 'Nainštalovať',
		'Donate': 'Darcovstvo',
		'Watch YouTube videos': 'Pozrite si video na YouTube',
		'Directly in your browser': 'Priamo v prehliadači',
		'Support': 'Pomoc',
		'Sponsor on Patreon': 'Sponzor na Patreone',
		'Install on your device': 'Nainštalujte do svojho zariadenia',
	},
	// Czech
	'cs': {
		'Follow': 'Sledovat',
		'Try': 'Vyzkoušet',
		'Learn': 'Učte se',
		'Install': 'Nainstalovat',
		'Donate': 'Dárcovství',
		'Watch YouTube videos': 'Podívejte se na video na YouTube',
		'Directly in your browser': 'Přímo v prohlížeči',
		'Support': 'Pomoc',
		'Sponsor on Patreon': 'Sponzor na Patreonu',
		'Install on your device': 'Nainstalujte do svého zařízení',
	},
} as const
