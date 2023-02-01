<template>
    <div class="card" style="width: 20rem">
        <div class="inner">
            <img class="card-img-top" :src="recipe.img" referrerpolicy="no-referrer" alt="">
        </div>
        <div class="card-body">
            <div class="title" style=" margin-bottom: 10px;">
                <h5 style="margin-bottom: -3px" class="card-title">{{recipe.title}}</h5>
                <div class="stars-outer">
                    <div class="stars-inner" :style="{'width': rating}"></div>
                </div>
                <h6></h6>
                <Chip style="margin-top: -10px" :text="recipe.Tag[0]" :BG="recipe.Tag[1]"/>
            </div>
            

            <p class="Desc">{{snippet(recipe.desc)}}</p>
            <div class="Other Content" style=" margin: 10px;">
                <span>Difficulty: </span>
                <span :style="{'color': recipe.difficulty[1]}">{{recipe.difficulty[0]}}</span>
            </div>
            <h6>Total time:</h6>
            <h6 :style="{color: recipe.Tag[1]}">{{recipe.Time}} min</h6>
            <button class="btn" @click="pushToRecipe" :style="{'background-color': recipe.Tag[1]}"> View recipe <i class="fa fa-arrow-right"></i></button>
        </div>
    </div>
</template>

<script>
import Chip from "@/components/chip.vue"

export default {
    name: "SmallRecipeCard",
    props: {
        recipe: Object,
        
    },
    data() {
        return {
            rating: String,
        }
    },
    components: {
        Chip,
    },
    methods: {
        snippet(value){
            return value.slice (0,50) + ' ...'
        },
        pushToRecipe(){
            let Recipe = this.recipe.title;
            this.$router.push({name:`recipe` , query:{data: Recipe} })
        }
    },
    created() {
        let averageStar = this.recipe.stars/this.recipe.ratedBy;
        const starPercentage = (averageStar / 5) *100;
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
        this.rating = starPercentageRounded;
    },

}
</script>

<style  scoped>

.btn{
    position: absolute;
    border: none;
    outline: none;
    color: white;
    font-size: 1.2rem;
    padding: 12px 25px;
    cursor: pointer;
    transition: all 500ms ease;

}
.btn:hover{
    transform: translateY(-10px);
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
.card{
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.294);
    margin-bottom: 70px;

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

</style>

