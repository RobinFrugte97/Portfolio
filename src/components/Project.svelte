<script>
    import { onMount } from "svelte"
	import { allProjects, selectedColor, tempBackground } from "../stores/projects.js"
    import SvelteMarkdown from 'svelte-markdown'

    export let params

    let projects = []
    let selectedProject = {}
    let source = ``

    onMount(async () => {
        const dataResponse = await fetch('data.json')
        projects = await dataResponse.json()
        console.log(projects)
        checkSelected()
    })
    
    let checkSelected = async () => {
        if ($allProjects.length > 0) {
            selectedProject = $allProjects.filter(project => project.name == params.project)[0]
            source = selectedProject.object.text
            // source = source.replaceAll(/(```)/ig, "")
            // console.log(source)
        }
        if ($allProjects.length === undefined) {
            selectedProject = projects.filter(project => project.name == params.project)[0]
            console.log(selectedProject)
            source = selectedProject.object.text
            // source = source.replaceAll(/(```)/ig, "")
            // console.log(source)
        }
    }
</script>
{#if Object.keys(selectedProject).length > 0}
    <div id="curtainDown" style="background-color: {selectedProject.primaryLanguage.color};" ></div>
    <div id="curtainUp" style="background-color: {selectedProject.primaryLanguage.color};" ></div>
    <section>
        <div id="mainWrapper" style="background-color: {selectedProject.primaryLanguage.color}">
            <a href="/Portfolio/#/projects" on:click|preventDefault={() => {
                let curtainUp = document.getElementById('curtainUp')
                curtainUp.classList.add('anim')
                selectedColor.set(selectedProject.primaryLanguage.color)
                setTimeout(() => {
                    window.location.href = `/Portfolio/#/projects`
                }, 800)
            }}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg></a>
            <img src="{selectedProject.openGraphImageUrl}" alt="image of {selectedProject.name}">
            <div id="projectInfo">
                <article>
                <h1>
                    {selectedProject.name}
                </h1>
                <p>
                    {selectedProject.description}
                </p>
            </article>
            <ul>
                {#each selectedProject.languages.nodes as language}
                    <li style="background-color: {language.color};">{language.name}</li>
                {/each}
                
            </ul>
            </div>
        </div>
        <div id="readme">
            <SvelteMarkdown {source} />
        </div>
    </section>
{:else}
    <!-- Prevent layout shift -->
    <section >
        <div id="mainWrapper"></div>
    </section>
    <div id="temp" style="background-color: {$tempBackground}"></div>
{/if}

<style>
    section {
        width: 100vw;
        z-index: 3;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #1E1E1E;
        animation: showSection .2s .3s forwards ease;
        opacity: 0;
        font-family: monospace;
		font-style: normal;
    }
    #mainWrapper {
        display: flex;
        flex-direction: row;
        height: 30em;
        padding-top: 3em;
        justify-content: space-evenly;
        width: 100%;
        position: relative;
        
    }
    img {
        box-shadow: 0px 10px 30px -15px rgba(0, 0, 0, 0.5);
        border-radius: 15px;
        height: 80%;
    }
    ul {
        padding: 0;
    }
    li {
        text-decoration: none;
        list-style: none;
    }
    a {
        cursor: pointer;
        background: none;
        border: none;
        position: absolute;
        right: 2%;
        top: 4%;
        transform: scale(2);
        outline: none;
    }
    p {
        max-width: 30em;
    }
    #curtainDown {
        height: 100vh;
        width: 100vw;
        position: fixed;
        z-index: 5;
        animation: removeCurtain .8s .2s forwards ease;
    }
    #curtainUp {
        height: 100vh;
        width: 100vw;
        position: fixed;
        z-index: 5;
        transform: translateY(100vh);
    }
    #temp {
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: 5;
    }
    #readme {
        color: white;
        max-width: 60%;
        background-color: rgba(15, 15, 15, 0.5);
        margin: auto;
        margin-top: 2em;
        padding: 1em 2em;
        border-radius: 15px;

    }
    @keyframes removeCurtain {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(100vh);
        }
    }
    @keyframes showSection {
        from {
            opacity: 0;
        }
        to {
            opacity: 100;
        }
    }
    @keyframes addCurtain {
        from {
            transform: translateY(100vh);
        }
        to {
            transform: translateY(0vh);
        }
    }
</style>