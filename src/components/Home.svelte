<script>
	import { onMount } from "svelte"
    import mapProjectsToLanguage from "../helpers/utils/categoryMap.js"
    import { allProjects, selectedColor } from "../stores/projects.js"

	import Language from "./Language.svelte"

    let projects = []
    let categorizedProjects = []

    onMount(async () => {
        const dataResponse = await fetch('data.json')
        projects = await dataResponse.json()
        
        allProjects.set(projects)

        // categorize projects into languages
        categorizedProjects = mapProjectsToLanguage(projects)

        console.log(categorizedProjects)

        document.getElementById('footer').style.display = "flex"

    })
</script>

<main>
    {#each categorizedProjects as language}
         <Language bind:language/>
    {/each}
</main>
{#if selectedColor}
	<div id="curtainDown" style="background-color: {$selectedColor};"></div>
{/if}
<div id="curtain"></div>


<style>
    main {
		width: 100%;
		padding-top: 4em;
	}
	#curtain {
        height: 100vh;
        width: 100vw;
        position: fixed;
        z-index: 5;
        transform: translateY(100vh);
    }
	#curtainDown {
		height: 100vh;
        width: 100vw;
        position: fixed;
        z-index: 5;
		animation: removeCurtain .8s forwards ease;
	}
	@keyframes removeCurtain {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(100vh);
        }
    }

</style>