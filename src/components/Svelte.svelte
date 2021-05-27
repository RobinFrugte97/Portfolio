<script>
    export let svelteProjects

    import ProjectTile from "../components/ProjectTile.svelte"

</script>

<div class="lContainer">
    <h1>Svelte</h1>
    <section class="languageContainer" id="svelte">
        {#each svelteProjects as project}
            <ProjectTile bind:project />
        {/each}
        <span id="space"></span>
    </section>
</div>


<style>
    h1 {
        font-family: monospace;
		font-style: normal;
		font-weight: 1000;
        transform: translateX(15%) translateY(.275em);
        color: #ff3e00;
        font-size: 3.5em;
        margin-bottom: 0;
        align-self: flex-end;
    }
    div {
        width: 100%;
        transform: rotate(3deg) translateX(-8%);
        display: flex;
        flex-direction: column;
        margin-top: 8%;
    }
    #svelte {
        background-color: #ff3e00;
    }
</style>