<script>
    import { onMount } from 'svelte'

    let mugshot
    let mugshotText
    let skillset
    let skills
    let container
    let image
    let socials
    let aboutText2

    let options = {
        root: null,
        rootMargin: '0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
    }
    onMount(() => {
        let observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                console.log(entry)
                if (entry.target.id.includes("skillset") && entry.intersectionRatio > 0) {

                    document.getElementById('footer').style.display = "none"
                    mugshot.style.width = "33.3%"
                    mugshot.style.flexDirection = "column"
                    mugshot.style.height = "calc(100vh - 175px)"
                    mugshot.style.justifyContent = "normal"
                    image.style.margin = "2em 0"
                    container.style.top = "175px"
                    container.style.position = "fixed"
                    mugshotText.style.width = "80%"
                    mugshotText.style.textAlign = "center"
                    mugshotText.style.maxWidth = "511px"
                    skillset.style.width =  "calc(66.6% - 20%)"
                    skillset.style.height = "calc(100vh - 175px)"
                    skillset.style.animation = `tileAnimation .5s 1s forwards ease`
                    socials.style.animation = `hideFooter .5s 1s forwards ease`
                    socials.style.display = "flex"

                    observer.unobserve(entry.target)
                } 
                if (entry.target.id.includes("skills") && entry.intersectionRatio > 0.25) {
                    entry.target.style.animation = `tileAnimation 1s forwards ease`;

                    observer.unobserve(entry.target)
                }
                if (entry.target.id.includes("aboutText2") && entry.intersectionRatio > 0.25) {
                    entry.target.style.animation = `tileAnimation 1s forwards ease`;

                    observer.unobserve(entry.target)
                }
            })
        }, options)
        observer.observe(skillset)
        observer.observe(skills)
        observer.observe(aboutText2)
    })
</script>

<div id="aboutmecontainer" bind:this={container}>
    <section id="mugshot" bind:this={mugshot}>
        <img src="./assets/images/Mugshot.jpg" alt="Mugshot Robin" bind:this={image}>
        <p bind:this={mugshotText}>Hey! My name is Robin Frugte. I am a <span>front-end developer</span> from the Netherlands. I am always looking to learn about exciting new stuff and improve my development skills!</p>
        <div id="socials" bind:this={socials}>
            <a href="https://github.com/RobinFrugte97/">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/robin-frugte/">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
        </div>
    </section>
    <section id="skillset" bind:this={skillset}>
        <p id="aboutText1">I like to experiment with new frameworks or packages for my own projects. Most recently I have been experimenting with Svelte, which this website is built with. Because Svelte is up and coming, there are a lot of interesting packages available with varying support. It is very interesting to me to see thing being added to those packages. To see the framework evolve thanks to the community.</p>
        <div id="skills" bind:this={skills}>
            <h2>My skills</h2>
            <div id="iconContainer">
                <img class="skill" src="/assets/images/icons/Svelte_Logo.svg" alt="Svelte icon">
                <img class="skill" src="/assets/images/icons/JavaScript_Logo.svg" alt="Javascript icon">
                <img class="skill" src="/assets/images/icons/HTML5_Logo.svg" alt="HTML icon">
                <img class="skill" src="/assets/images/icons/CSS3_Logo.svg" alt="CSS icon">
                <img class="skill" src="/assets/images/icons/Git_icon.svg" alt="Git icon">
            </div>
        </div>
        <p id="aboutText2" bind:this={aboutText2}>Something else I've been interested in lately is web animation. Using Intersection Observer or just plain CSS animations on navigation, I love experimenting with that stuff.</p>
    </section>
</div>

<style>
#mugshot img {
    border-radius: 50%;
    width: 20em;
}
#mugshot p {
    font-family: monospace;
    font-size: 1.75em;
    width: 40%;
}    
#aboutmecontainer {
    flex-wrap: wrap;
    height: 100%;
    display: flex;
    flex-direction: row;
    /* transition: .2s ease; */
    z-index: 5;
}
#mugshot {
    height: calc(100vh - 104px);
    width: 100%;
    display: flex;
    flex-direction: row;
    color: white;
    align-items: center;
    justify-content: space-evenly;
    transition: 1s ease;
}

#skillset {
    width: 100%;
    background-color: #EFEFEF;
    /* transition: .2s ease; */
    overflow-y: scroll;
    padding: 0 10%;
    opacity: 0;
}
#skillset p {
    font-size: 1.5em;
    font-family: monospace;
    margin-top: 10em;
    margin-bottom: 4em;
    height: calc(100vh - 20em);
}
#skillset img {
    width: 7.5em;
    height: 7.5em;
}
#skills {
    opacity: 0;
    margin-top: 4em ;
    margin-bottom: 4em;
    height: calc(100vh - 20em);
    transition: .3s ease;
}
#aboutText2 {
    opacity: 0;
    margin-top: 4em!important;
    transition: .3s ease;
}
#socials {
    display: none;
    opacity: 0;
    margin-top: 1em;
    width: 10em;
    justify-content: space-evenly;
}
#socials svg {
    width: 3em;
}
#socials svg:hover path {
    fill: #BC3585;
}
#socials path {
    fill: white;
}
#iconContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
span {
    color: #BC3585;
    text-transform: uppercase;
}
h2 {
    font-size: 2em;
    font-family: monospace;
}

</style>