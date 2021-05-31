import App from './App.svelte';

const app = new App({
	target: document.body
});

if ('serviceWorker' in navigator) {
	window.addEventListener("load", function () {
		navigator.serviceWorker.register('/sw.js')
			.then(function (registration) {
				return registration.update();
			})
	});
}

export default app;