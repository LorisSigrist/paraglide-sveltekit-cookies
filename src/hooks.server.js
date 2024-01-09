import { isAvailableLanguageTag, sourceLanguageTag } from '$paraglide/runtime'

export const handle = async ({ event, resolve }) => {
    const languageCookie = event.cookies.get("language")
    const language = isAvailableLanguageTag(languageCookie) ? languageCookie : sourceLanguageTag;

    return await resolve(event, {
        transformPageChunk: ({ html, done }) => {
            if (done) {
                html = html.replace("%lang%", language)
            }
            return html
        }
    })
}