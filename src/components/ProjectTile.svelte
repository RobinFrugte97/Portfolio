<script>
    import { onMount } from 'svelte'
    import { tempBackground } from '../stores/projects'

    export let project

    let tiles
    let text
    let title

    let options = {
        root: null,
        rootMargin: '0px',
        threshold: .3
    }
    onMount(() => {
        let observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    entry.target.style.animation = `tileAnimation 1s ${entry.target.dataset.delay} forwards ease`
                    observer.unobserve(entries[0].target)
                } else {
                    entry.target.style.animation = "none"
                }
            })
        }, options)
        observer.observe(tiles)
        observer.observe(text)
        observer.observe(title)
    })

</script>
<a id="tile" href="/#/projects/{project.name}" bind:this={tiles} data-delay="0s" on:click|preventDefault={() => {
    let curtain = document.getElementById('curtain')
    let footer = document.getElementById('footer')
	curtain.style = `background-color: ${project.primaryLanguage.color}; animation: addCurtain .8s forwards ease;`
    footer.style = `animation: hideFooter .5s forwards ease;`
    tempBackground.set(project.primaryLanguage.color)
    setTimeout(() => {
        window.location.href = `/#/projects/${project.name}`
    }, 800)
}}>
    <section>
        <!-- <img src={project.openGraphImageUrl} alt='Image from {project.name}'> -->
        <div id="image" style="background-image: url({project.openGraphImageUrl});"></div>
        <div id="overlay" ></div>
        <div id="information">
            <article>
                <h2 data-delay=".1s" bind:this={title}>
                    {project.name}
                </h2>
                <p data-delay=".3s" bind:this={text}>
                    {project.description}
                </p>
            </article>
            <div id="anchors">
                <a href="{project.url}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="{project.homepageUrl}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.723 18.654l-3.61 3.609c-2.316 2.315-6.063 2.315-8.378 0-1.12-1.118-1.735-2.606-1.735-4.188 0-1.582.615-3.07 1.734-4.189l4.866-4.865c2.355-2.355 6.114-2.262 8.377 0 .453.453.81.973 1.089 1.527l-1.593 1.592c-.18-.613-.5-1.189-.964-1.652-1.448-1.448-3.93-1.51-5.439-.001l-.001.002-4.867 4.865c-1.5 1.499-1.5 3.941 0 5.44 1.517 1.517 3.958 1.488 5.442 0l2.425-2.424c.993.284 1.791.335 2.654.284zm.161-16.918l-3.574 3.576c.847-.05 1.655 0 2.653.283l2.393-2.389c1.498-1.502 3.94-1.5 5.44-.001 1.517 1.518 1.486 3.959 0 5.442l-4.831 4.831-.003.002c-1.438 1.437-3.886 1.552-5.439-.002-.473-.474-.785-1.042-.956-1.643l-.084.068-1.517 1.515c.28.556.635 1.075 1.088 1.528 2.245 2.245 6.004 2.374 8.378 0l4.832-4.831c2.314-2.316 2.316-6.062-.001-8.377-2.317-2.321-6.067-2.313-8.379-.002z"/></svg>
                </a>
            </div>
        </div>
    </section>
</a>



<style>
    a {
        width: 2em;
        height: 2em;
    }
    #image {
        position: relative;
        width: 100%;
        min-height: 263px;
        border-radius: 15px 15px 0 0;
        background-size: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    #overlay {
        position: absolute;
        width: 100%;
        background-color: rgba(0,0,0,0.125);
        top: 0;
        height: 263px;
        transition: 0.2s ease;
        cursor: pointer;
        border-radius: 15px 15px 0 0;

    }
    #overlay:hover {
        background-color: rgba(0,0,0,0);
    }
    article {
        font-family: monospace;
		font-style: normal;
        padding-left: 1em;
    }
    p {
        width: 30em;
        opacity: 0;
    }
    h2 {
        opacity: 0;
    }
    #tile {
        width: 25%;
        min-width: 29em;
        height: 25em;
        background-color: white;
        margin: 0em 3em;
        position: relative;
        box-shadow: 0px 10px 30px -15px rgba(0, 0, 0, 0.5);
        transition: .2s ease;
        border-radius: 15px;
        opacity: 0;
        color: black;
        text-decoration: none;
    }
    #tile:hover {
        transform: scale(1.025);
    }
    #information {
        display: flex;
        align-items: flex-end;
        justify-content: space-around;
    }
    #anchors {
        align-self: flex-start;
        display: flex;
        margin-top: 1em;
    }
</style>