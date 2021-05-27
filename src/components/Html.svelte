<script>
    export let htmlProjects

    import ProjectTile from "../components/ProjectTile.svelte"

</script>

<div class="lContainer">
    <h1>HTML</h1>
    <section class="languageContainer" id="html">
        {#each htmlProjects as project}
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
        color: #E34C26;
        font-size: 3.5em;
        margin-bottom: 0;
        align-self: flex-end;
    }
    div {
        width: 100%;
        transform: rotate(3deg) translateX(-8%);
        display: flex;
        flex-direction: column;
    }
    #html {
        background-color: #E34C26;
    }
</style>