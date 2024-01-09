import {
  isAvailableLanguageTag,
  sourceLanguageTag,
} from "$paraglide/runtime.js";

export const actions = {
  "set-language": async ({ cookies, request }) => {
    const data = await request.formData();
    const languageValue = data.get("language");

    const language = isAvailableLanguageTag(languageValue)
      ? languageValue
      : sourceLanguageTag;
    cookies.set("language", language, {
      path: "/",
      httpOnly: false,
    });
  },
};
