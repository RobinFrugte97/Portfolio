<script>
    export let language

    import ProjectTile from "../components/ProjectTile.svelte"

    console.log(language)

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
    
</style>