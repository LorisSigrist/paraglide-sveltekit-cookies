<script>
  import { setLanguageTag } from "$paraglide/runtime.js";
  
  export let data;
  $: setLanguageTag(data.language);
</script>

{#key data.language}
    <slot />
{/key}
