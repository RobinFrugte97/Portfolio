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
	curtain.style = `background-color: ${project.primaryLanguage.color}; animation: addCurtain .5s forwards ease;`
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
</style>