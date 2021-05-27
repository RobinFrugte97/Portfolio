<script>
	import { selectedColor } from "../stores/projects";


	
</script>
<header>
	<h1>
		robinfrugte<span>.dev</span><div id="blink"></div>
	</h1>

	<nav>
		<a href="/Portfolio/#/projects" on:click={() => {
			selectedColor.set("")
		}}>Projects</a>
		<a href="/Portfolio/#/aboutme">About</a>
	</nav>
</header>


<style>
	header {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 2em;
	}
    h1 {
		font-family: monospace;
		font-style: normal;
		font-weight: 400;
		display: flex;
		background-color: #1E1E1E;
		color: white;
		padding: .3em .7em;
	}
	span {
		color: #BC3585;
	}
	#blink {
		width: 12px;
		height: 1em;
		margin-left: .2em;
		opacity: 0%;
		animation: blink step-start 1s infinite;
		background-color: #BC3585;
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