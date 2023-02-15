<template>
    <div class="card">
        <div class="row">
            <div class="col-md-5 inner">
                <img :src="trick.image" alt="" referrerpolicy="no-referrer" class="img-fluid img">
            </div>
            <div id="text" class="col-md-auto">
                <div class="title" style="margin-bottom: 10px">
                    <h3 style="margin-bottom: -0.005px" class="card-title mt-3">{{trick.title}}</h3>
                    <div class="stars-outer">
                        <div class="stars-inner" :style="{'width': rating}"></div>
                    </div>
                </div>
                <p v-html="MarkedDesc" class="Desc"></p>
                <div class="Other Content">
                    <span>Difficulty: </span>
                    <span :style="{'color': trick.difficulty[1]}">{{trick.difficulty[0]}}</span>
                </div>
                <h6>Total time:</h6>
                
                <h6 :style="{'color': trick.difficulty[1]}">{{trick.Time}} min</h6>
                <button @click="pushToTrick" class="btn" :style="{'background-color': trick.difficulty[1]}"> View recipe <i class="fa fa-arrow-right"></i></button>
            </div>
            <!-- <div id="text" class="col">
                <button type="submit" class="save"><i class="fa-regular fa-bookmark" style="margin-right: 20px"></i></button>
            </div> -->
        </div>
    </div>
</template>

<script>
import marked from "marked"
export default {
    name: "BigTrickCard",
    props: {
        trick: Object,
    },
    data() {
        return {
            rating: String,
        }
    },
    computed: { // In computed, the methode compiledMarkdown occures whenever description is changed!
				MarkedDesc: function() {
						return marked(this.snippet(this.trick.desc)); // Make some steps marked
				},
		},
    methods: {
        snippet(value){
            return value.slice (0,100) + ' ...'
        },
        pushToTrick(){
            let Trick = this.trick.title;
            this.$router.push({name:`trick` , query:{data: Trick} })
        }
    },
    created() {
        //numbers to stars
        let averageStar = this.trick.stars/this.trick.ratedBy;
        const starPercentage = (averageStar / 5) *100;
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
        this.rating = starPercentageRounded;
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