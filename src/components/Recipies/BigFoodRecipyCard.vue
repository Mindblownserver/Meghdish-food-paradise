<template>
    <div class="card">
        <div class="row">
            <div class="col-md-5 inner">
                <img :src="recipe.image" alt="" referrerpolicy="no-referrer" class="img-fluid img">
            </div>
            <div id="text" class="col-md-auto">
                <div class="title" style="margin-bottom: 10px">
                    <h3 style="margin-bottom: -0.005px" class="card-title mt-3">{{recipe.title}}</h3>
                    <div class="stars-outer">
                        <div class="stars-inner" :style="{'width': rating}"></div>
                    </div>
                </div>
                <p v-html="MarkedDesc" class="Desc"></p>
                <div class="Other Content" style="margin-bottom: 10px">
                    <span>Difficulty: </span>
                    <span :style="{'color': recipe.difficulty[1]}">{{recipe.difficulty[0]}}</span>
                </div>
                <h6>Total time:</h6>
                
                <h6 :style="{color: recipe.Tag[1]}">{{recipe.Time}} min</h6>
                <Chip class="clickable" :text="recipe.Tag[0]" :BG="recipe.Tag[1]" @click="filter_food(recipe.Tag[0])"/>
                <button @click="pushToRecipe" class="btn" :style="{'background-color': recipe.Tag[1]}"> View recipe <i class="fa fa-arrow-right"></i></button>
            </div>
            <!-- <div id="text" class="col">
                <button type="submit" class="save"><i class="fa-regular fa-bookmark" style="margin-right: 20px"></i></button>
            </div> -->
        </div>
    </div>
</template>

<script>
import Chip from "../chip.vue"
import marked from "marked"
// import db from "../../fb.js"
export default {
    name: "BigRecipyCard",
    props: {
        recipe: Object,
    },
    emits: ["filter"],
    data() {
        return {
            rating: String,
            tag_id: String,
        }
    },
    components: {
        Chip,
    },
    computed: { // In computed, the methode compiledMarkdown occures whenever description is changed!
				MarkedDesc: function() {
						return marked(this.snippet(this.recipe.desc)); // Make some steps marked
				},
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
        //numbers to stars
        let averageStar = this.recipe.stars/this.recipe.ratedBy;
        const starPercentage = (averageStar / 5) *100;
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
        this.rating = starPercentageRounded;
        // db.collection("Food recipies").doc("Food list").collection("food").doc("Spaghetti").add({
        //     title: "Spaghetti",
        //     img: "https://firebasestorage.googleapis.com/v0/b/meghdish-food-paradise.appspot.com/o/Recipies%2FMUi327LQaOnMCKxEvlR8%2FMUi327LQaOnMCKxEvlR8.png?alt=media&token=6100e6dd-85c6-4ccf-bce0-65e604ce6863",
        //     desc: "Tagletelli is love, tagleteli is life",
        //     stars: 3,
        //     Time: "30min",
        //     Tag: ["Pasta", "#EC994B"],
        //     difficulty: ["Easy","Forestgreen"] //this.recipe.difficulty[1]
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
.clickable{
    cursor: pointer;
}
/* .save{
    border-radius: 20px;
    margin-top: 24px;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
}
.fa-bookmark{
    font-size: 1.3rem;
    color: var(--main-web-color);
} */
</style>