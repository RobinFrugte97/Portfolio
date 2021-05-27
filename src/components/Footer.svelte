<script>

</script>

<footer id="footer" style="opacity: 0;">
    <p>
        Created with Svelte and GraphQL
    </p>
    <div id="wrapper"><p>Robin Frugte © 2021-∞</p><div id="blink"></div></div>
</footer>

<style>
    #footer {
        font-family: monospace;
		font-style: normal;
		font-weight: 400;
        color: white;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 15em;
        background-color: #1E1E1E;
        height: 12em;
        padding-top: 3em;
        font-size: 1em;
        animation: hideFooter .2s .5s forwards ease;
    }
    #wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    #blink {
        width: 6px;
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