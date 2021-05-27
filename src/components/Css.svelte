<script>
    export let cssProjects

    import ProjectTile from "../components/ProjectTile.svelte"

</script>

<div class="lContainer">
    <h1>CSS</h1>
    <section class="languageContainer" id="css">
        {#each cssProjects as project}
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
        color: #563D7C;
        font-size: 3.5em;
        margin-bottom: 0;
    }
    div {
        width: 100%;
        transform: rotate(-3deg) translateX(-8%);
        display: flex;
        flex-direction: column;
    }
    #css {
        background-color: #563D7C;
    }
</style>