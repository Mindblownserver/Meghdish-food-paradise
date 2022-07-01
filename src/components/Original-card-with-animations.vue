<template>
    <div class="card">
        <div class="card-content">
            <h2 class="card-title">Something aweseome</h2>
            <div class="card-body">
                <p>Description:</p>
                <p>difficulty</p>
                <p>Bread</p>
                <a href="#" class="btn btn-success btn-lg" tabindex="-1" role="button" aria-disabled="true">Learn more!</a>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name:"CARD",

}
</script>


<style  scoped>

*, *::before, *::after{
    box-sizing: border-box;
}

body{
    display: grid;
    min-height: 100vh;
    place-items: center;
    line-height: 1.6;
    background: white;
}

.card{
    color: black;
    
    background: url(https://img-3.journaldesfemmes.fr/Qf4POYz6ateXL7_PU55SSeKNKf4=/750x500/smart/a5181741d55b4b3d8b54bda593ff87f5/recipe-jdf/10021667.jpg);
    background-size: cover;
    padding: 10rem 0 0;
    max-width: 40ch;
    border-radius: 1rem;
    overflow: hidden;
}

.card-content{
    --padding: 1.5rem;
    padding: var(--padding);
    background: linear-gradient(
        hsl(0 0% 100% / 0),
        hsl(0 0% 100% / 0.3) 10%,
        hsl(0 0% 100% / 1)
    );
    transition-delay: 500ms;
}

.card-title{
    position: relative;

}



.card-title::after{
    content: "";
    position: absolute;
    height: 4px;
    left: calc(var(--padding) * -1);
    bottom: 0;
    width: 110%;
    background: #28a745;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 500ms ease;
}



a:focus, a:hover{
    color: #28a745;
    background: white;
    outline: #28a745 1px solid;
}
.card-body{
    color: rgb(1 1 1 / 0.85);
}


@media (hover) {
    .card-content{
        transform: translateY(70%);
        transition: transform 500ms ease;
    }

    .card:hover .card-content > *{
        opacity: 1;
    }

    .card:hover .card-content{
        transform: translateY(0);
        transition-delay: 500ms;
    }
    .card:hover .card-content > *:not(.card-title){
        opacity: 1;
        transition-delay: 1000ms;
    }

    .card-content > *:not(.card-title){
        opacity: 0;
        transition: opacity 500ms linear;
    }

    .card:hover .card-title::after{
        transform: scaleX(1);
    }
    
    .card-title::after{
        transform: scaleX(0); 
    }
}

@media (prefers-reduced-motion: reduce){
    *{
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}

</style>

