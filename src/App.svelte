<script>
	import Router from "../node_modules/svelte-spa-router/Router.svelte"
	
	import Footer from "./components/Footer.svelte"
	import Header from "./components/Header.svelte"
	import About from "./components/About.svelte"
	import Home from "./components/Home.svelte"
	import Project from "./components/Project.svelte"
</script>

<Header />

<Router routes={{
	'/': Home,
	'/projects': Home,
	'/aboutme': About,
	'/projects/:project': Project
}} />

<Footer />

<style>
	
</style>