<script>
    export let language

    import ProjectTile from "../components/ProjectTile.svelte"

</script>

<div id="{language.mainLang.toLowerCase()}-container">
    <h1 id="{language.mainLang.toLowerCase()}-header">{language.mainLang}</h1>
    <section class="languageContainer" id="{language.mainLang.toLowerCase()}-bar">
        {#each language.projects as project}
            <ProjectTile bind:project />
        {/each}
        <span id="space"></span>
    </section>
</div>


<style>
    div {
        width: 100%;
        display: flex;
	    flex-direction: column;
    }
    h1 {
        font-size: 3.5em;
	    margin-bottom: 0;
        font-family: monospace;
        font-style: normal;
        font-weight: 1000;
        transform: translateX(15%) translateY(.275em);
    }
</style>