<script>
	import { onMount } from "svelte"
    import mapProjectsToLanguage from "../helpers/utils/categoryMap.js"
    import { allProjects, selectedColor } from "../stores/projects.js"

	import Javascript from "./Javascript.svelte"
	import Html from "./Html.svelte"
	import Css from "./Css.svelte"
	import Svelte from "./Svelte.svelte"

    let projects = []
	let svelteProjects = []
	let javascriptProjects = []
	let htmlProjects = []
	let cssProjects = []

    onMount(async () => {
        const dataResponse = await fetch('data.json')
        projects = await dataResponse.json()
        
        allProjects.set(projects)

        // categorize projects into languages
        let categoryProjects = mapProjectsToLanguage(projects)


        svelteProjects = categoryProjects.svelte
        javascriptProjects = categoryProjects.javascript
        htmlProjects = categoryProjects.html
        cssProjects = categoryProjects.css
    })
</script>

<main>
	<Svelte bind:svelteProjects />
	<Javascript bind:javascriptProjects />
	<Html bind:htmlProjects />
	<Css bind:cssProjects />
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
	@keyframes addCurtain {
		from {
        	transform: translateY(100vh);
		}
		to {
        	transform: translateY(0vh);
		}
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