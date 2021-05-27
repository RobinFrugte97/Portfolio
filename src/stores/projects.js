import { writable } from 'svelte/store';

export let selectedProject = writable()
export let showSelected = writable(false)
export let allProjects = writable({})
export let selectedColor = writable()
export let tempBackground = writable()