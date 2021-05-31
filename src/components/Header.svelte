<script>
	import { selectedColor } from "../stores/projects";


	
</script>
<header id="desktop">
	<div>
		<h1>
			robinfrugte<span>.dev</span><div id="blink"></div>
		</h1>
		<button class="mobile" on:click={() => {
				let menu = document.getElementById("mobile")
				menu.style = "animation: addMenu .8s forwards ease;"
			}}>
			<svg width="30" height="30" id="icoOpen">
				<path d="M0,5 30,5" stroke="#000" stroke-width="3"/>
				<path d="M0,14 30,14" stroke="#000" stroke-width="3"/>
				<path d="M0,23 30,23" stroke="#000" stroke-width="3"/>
			</svg>
		</button>
	</div>

	<nav class="desktop">
		<a href="/#/projects" on:click={() => {
			selectedColor.set("")
		}}>Projects</a>
		<a href="/#/aboutme">About</a>
	</nav>
</header>
<header id="mobile" class="mobile">
	<button on:click={() => {
		let menu = document.getElementById("mobile")
		menu.style = "animation: removeMenu .8s forwards ease;"
	}}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg></button>
	<nav>
		<a href="/#/projects" on:click={() => {
			selectedColor.set("")
			let menu = document.getElementById("mobile")
			menu.style = "animation: removeMenu .8s forwards ease;"
		}}>projects</a>
		<a href="/#/aboutme" on:click={() => {
		let menu = document.getElementById("mobile")
		menu.style = "animation: removeMenu .8s forwards ease;"
	}}>about</a>
	</nav>
</header>


<style>
	#desktop {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 2em;
	}
    #desktop h1 {
		font-family: monospace;
		font-style: normal;
		font-weight: 400;
		display: flex;
		background-color: #1E1E1E;
		color: white;
		padding: .3em .7em;
	}
	#desktop span {
		color: #BC3585;
	}
	#desktop #blink {
		width: 12px;
		height: 1em;
		margin-left: .2em;
		opacity: 0%;
		animation: blink step-start 1s infinite;
		background-color: #BC3585;
	}
	#desktop path {
		stroke: white;
	}
	#desktop nav {
		width: 15em;
    	display: flex;
    	justify-content: space-evenly;
	}
	#desktop a {
		text-decoration: underline;
		text-decoration-color: #BC3585;
		text-decoration-thickness: 3px;
		color: white;
		font-size: 1.5em;
		font-family: monospace;
		
	}
	#desktop a:hover {
		background-color: #BC3585;
	}
	#desktop button {
		align-self: center
	}
	#mobile {
		display: none;
    	flex-direction: column;
		position: fixed;
		height: 100vh;
		width: 100%;
		right: 0;
		background-color: rgb(43, 43, 43);
		z-index: 5;
		transform: translateX(-100%);
	}
	#mobile nav {
		display: flex;
		flex-direction: column;
		margin-top: 3em;
		height: 10em;
		justify-content: space-evenly;
	}
	#mobile a {
		color: white;
		text-decoration: none;
		font-size: 2em;
		align-self: flex-end;
		margin-right: 1em;
	}
	button {
		background: none;
    	border: none;
		width: 4em;
		align-self: flex-end;
	}
	#mobile button svg {
		width: 100%;
		height: 100%;
		fill: white;
		margin-top: 1em;
	}
	.mobile {
		display: none;
	}
	@keyframes blink {
		0% {
			opacity: 100%;
		}
		50% {
			opacity: 0%;
		}
		100% {
			opacity: 100%;
		}
	}
	
</style>