<template>
    <div class="card">
        <div class="row">
            <div class="col-md-5 inner">
                <img :src="recipe.img" alt="" class="img-fluid img">
            </div>
            <div id="text" class="col-md-auto">
                <div class="title" style="margin-bottom: 10px">
                    <h3 style="margin-bottom: -0.005px" class="card-title mt-3">{{recipe.title}}</h3>
                    <div class="stars-outer">
                        <div class="stars-inner" :style="{'width': Stars}"></div>
                    </div>
                </div>
                <p class="Desc">{{snippet(recipe.desc)}}</p>
                <div class="Other Content" style="margin-bottom: 10px">
                    <span>Difficulty: </span>
                    <span :style="{'color': recipe.difficulty[1]}">{{recipe.difficulty[0]}}</span>
                </div>
                <h6>Total time:</h6>
                
                <h6 :style="{color: recipe.Tag[1]}">{{recipe.Time}}</h6>
                <Chip :text="recipe.Tag[0]" :BG="recipe.Tag[1]" @click="filter_food(recipe.Tag[0])"/>
                <a :href="'/recipes/recipe/' + recipe.title"><button class="btn" :style="{'background-color': recipe.Tag[1]}"> View recipe <i class="fa fa-arrow-right"></i></button></a>
            </div>
        </div>
    </div>
</template>

<script>
import Chip from "../chip.vue"
//import db from "../../fb.js"
export default {
    name: "BigRecipyCard",
    props: {
        recipe: Object,
    },
    emits: ["filter"],
    data() {
        return {
            Stars: String,
            tag_id: String
        }
    },
    components: {
        Chip,
    },
    methods: {
        snippet(value){
            return value.slice (0,100) + ' ...'
        },
    },
    created() {
        //numbers to stars
        const starPercentage = (this.recipe.stars / 5) *100;
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
        this.Stars = starPercentageRounded;
        // db.collection("Food recipies").add({
        //     title: this.recipe.title,
        //     img: this.recipe.img,
        //     desc: this.recipe.desc,
        //     stars: this.recipe.stars,
        //     Time: this.recipe.Time,
        //     Tag: [this.recipe.Tag[0], this.recipe.Tag[1]],
        //     difficulty: [this.recipe.difficulty[0],this.recipe.difficulty[1]]
        // })
    },
}
</script>

<style scoped>

*{
    transition: all 500ms ease;
}

.img{
    width: 400rem;
}

#text{
    text-align: start;
}

img{
    width: 100%;
}

.card{
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.294);
    margin-bottom: 70px;

}
.btn{
    position: absolute;
    bottom: -30px;
    left: 35vw;
    border: none;
    outline: none;
    align-items: center;
    color: white;
    font-size: 1.5rem;
    padding: 22px 45px;
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.294);
    
}


@media screen and (min-width: 1502px) {
    .btn{
        left: 550px;
    }
}

.btn:hover{
    transform: scale(1.1);
}

.fa-arrow-right{
    margin-left: 20px;
    font-size: 1.3rem;
}
.stars-outer{
    position: relative;
    display: inline-block;
}
.stars-inner{
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
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

.inner{
    overflow: hidden;
}
.card img{
    transition: all 1.5s ease;
}
.card:hover img{
    transform: scale(1.2);
}
</style>