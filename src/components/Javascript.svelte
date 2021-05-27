<script>
    export let javascriptProjects

    import ProjectTile from "../components/ProjectTile.svelte"

</script>

<div class="lContainer">
    <h1>Javascript</h1>
    <section class="languageContainer" id="js">
        {#each javascriptProjects as project}
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
        color: #F1E05A;
        font-size: 3.5em;
        margin-bottom: 0;
    }
    .lContainer {
        width: 100%;
        transform: rotate(-3deg) translateX(-8%);
        display: flex;
        flex-direction: column;
    }
    #js {
        background-color: #F1E05A;
    }
    
</style>