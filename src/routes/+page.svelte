<script>
  import { enhance } from "$app/forms";
    import * as m from "$paraglide/messages.js"
  import { availableLanguageTags, languageTag } from "$paraglide/runtime";
</script>

<h1>{m.hello_world()}</h1>

<form method="post" action="?/set-language" use:enhance>
    <select name="language" on:change={e => e.target?.form?.submit()}>
        {#each availableLanguageTags as lang}
            <option value={lang} selected={languageTag() == lang} >{lang}</option>
        {/each}
    </select>

    <noscript>
        <button type="submit">Change Language</button>
    </noscript>
</form>