import { texts } from './Texts'

const langs: readonly string[] = (_ => {
	// Get languages
	const languages: readonly string[] = window.navigator.languages || [(window.navigator as any).userLanguage || window.navigator.language || (window.navigator as any).systemLanguage || 'en-US']

	// Simplify
	let languagesIDs: readonly string[] = languages.map(_ => _.substr(0, 2).toLowerCase())

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
		return _
	})

	// Remove en, it is assumed as fallback
	languagesIDs = languagesIDs.filter(_ => _ !== 'en')

	// Least priority
	languagesIDs = [...languagesIDs, 'en']

	return languagesIDs
})()

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
