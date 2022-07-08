<template>
    <div class="card">
        <div class="title">
            <h3 class="mini_title">How's the recipe?</h3>
        </div>
        <div class="stars-outer">
            <div class="stars-inner"></div>
        </div>
        <div class="buttons">
            <button type="button" class="btn btn">Submit</button>
            <i class="far fa-smile-beam"></i>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'RateRecipe'
}
</script>

<style scoped>
.mini_title{
    font-weight: bolder;
}

.card{
    display: flex;
    width: 50rem;
    text-align: start;
    background-color: white;
    margin-left: 0;
    margin-top: 10px;
    margin-bottom: 30px;
    padding: 30px 40px;
    border-radius: 10px;
    box-shadow: 2px 3px 5px rgb(187, 187, 187);
}
.scrollable {
    background-color: #333;
    overflow: auto;
    white-space: nowrap;
}


.stars-outer{
    cursor: pointer;
    position: relative;
    display: inline-block;
}
.stars-inner{
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
    white-space: nowrap;
    overflow: hidden;
}
.stars-outer::before {
    content:  "\f005 \f005 \f005 \f005 \f005";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    color: #ccc;
}
.stars-inner::before {
    content:  "\f005 \f005 \f005 \f005 \f005";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    color: #fc9400;
}




.buttons:hover > .far{
    animation: rotationn 1s linear;
}

button{
    display: block;
    margin-top: 10px;
    width: 150px;
    background-color: #fc9400;
    color: white;
}

div i{
    position: relative;
    display: block; 
    margin-left: 13px;
    margin-top: -31px;
    color: rgb(255, 255, 255);
    font-size: 23px;
    transition:  ease-in-out;
    float: left;
}


@keyframes rotationn {
    0% {
        transform: rotate(0);
        
    }
    33%{
        transform: rotate(25deg);
        
    }
    66%{
        transform: rotate(-25deg);
        
    }

    100% {
        transform: rotate(0);
    }
}

</style>