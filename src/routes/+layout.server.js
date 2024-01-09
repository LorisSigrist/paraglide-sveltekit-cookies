import { isAvailableLanguageTag, sourceLanguageTag } from '$paraglide/runtime.js';

export function load({ cookies }) {
    const languageCookie = cookies.get('language');
    const language = isAvailableLanguageTag(languageCookie) ? languageCookie : sourceLanguageTag;

    return { language };
}