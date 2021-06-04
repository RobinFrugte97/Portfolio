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
            <a id="close" href="/#/projects" on:click|preventDefault={() => {
                let curtainUp = document.getElementById('curtainUp')
                curtainUp.classList.add('anim')
                selectedColor.set(selectedProject.primaryLanguage.color)
                setTimeout(() => {
                    window.location.href = `/#/projects`
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
                    <div id="anchors">
                        <a href="{selectedProject.url}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                        <a href="{selectedProject.homepageUrl}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M13.723 18.654l-3.61 3.609c-2.316 2.315-6.063 2.315-8.378 0-1.12-1.118-1.735-2.606-1.735-4.188 0-1.582.615-3.07 1.734-4.189l4.866-4.865c2.355-2.355 6.114-2.262 8.377 0 .453.453.81.973 1.089 1.527l-1.593 1.592c-.18-.613-.5-1.189-.964-1.652-1.448-1.448-3.93-1.51-5.439-.001l-.001.002-4.867 4.865c-1.5 1.499-1.5 3.941 0 5.44 1.517 1.517 3.958 1.488 5.442 0l2.425-2.424c.993.284 1.791.335 2.654.284zm.161-16.918l-3.574 3.576c.847-.05 1.655 0 2.653.283l2.393-2.389c1.498-1.502 3.94-1.5 5.44-.001 1.517 1.518 1.486 3.959 0 5.442l-4.831 4.831-.003.002c-1.438 1.437-3.886 1.552-5.439-.002-.473-.474-.785-1.042-.956-1.643l-.084.068-1.517 1.515c.28.556.635 1.075 1.088 1.528 2.245 2.245 6.004 2.374 8.378 0l4.832-4.831c2.314-2.316 2.316-6.062-.001-8.377-2.317-2.321-6.067-2.313-8.379-.002z"/></svg>
                        </a>
                    </div>
                
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
    #close {
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
    #anchors {
        align-self: flex-start;
        display: flex;
        margin-top: 1em;
    }
    #anchors a {
        margin-right: 1em;
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