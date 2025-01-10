import { texts } from './Texts'

const langs: readonly string[] = (_ => {
	// Get languages
	const languages: readonly string[] = window.navigator.languages || [(window.navigator as any).userLanguage || window.navigator.language || (window.navigator as any).systemLanguage || 'en-US']

	// Simplify
	let languagesIDs: readonly string[] = languages.map(_ => _.substr(0, 2).toLowerCase())

	// Override with ?lang= query parameter
	try {
		const url = window.location
		const params = new URLSearchParams(url.search)
		const lang = params.get('lang')

		if (lang != null && lang !== '') {
			languagesIDs = [lang]
		}
	} catch (error) {
		console.error(error)
	}

	// Fixup
	languagesIDs = languagesIDs.map(_ => {
		if (_ === "jp") return "ja"
		if (_ === "ua") return "uk"
		if (_ === "kaz") return "kk"
		if (_ === "kz") return "kk"
		if (_ === "pol") return "pl"
		if (_ === "ces") return "cs"
		if (_ === "cze") return "cs"
		if (_ === "slk") return "sk"
		if (_ === "slo") return "sk"
		if (_ === "gre") return "el"
		if (_ === "per") return "fa"
		if (_ === "mac") return "mk"
		if (_ === "baq") return "eu"
		if (_ === "arm") return "hy"
		if (_ === "bur") return "my"
		if (_ === "wel") return "cy"
		if (_ === "ice") return "is"
		if (_ === "geo") return "ka"
		if (_ === "mao") return "mi"
		// Contributor Notice: you may add more languages here
		return _
	})

	// Remove en, it is assumed as fallback
	languagesIDs = languagesIDs.filter(_ => _ !== 'en')

	// Least priority
	languagesIDs = [...languagesIDs, 'en']

	return languagesIDs
})()

export const translate = (text: string): string => {
	for (let index = 0; index < langs.length; index++) {
		const lang: string = langs[index]
		const strings = texts[lang]

		if (strings && strings[text]) {
			return strings[text]
		}
	}

	return text
}

export const Text = ({ children }: { children: string }) => {
	children = children.trim()

	for (let index = 0; index < langs.length; index++) {
		const lang: string = langs[index]
		const strings = texts[lang]

		if (strings && strings[children]) {
			return <>{strings[children]}</>
		}
	}

	return <>{children}</>
}
