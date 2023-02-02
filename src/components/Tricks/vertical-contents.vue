<template>
    <div class="container mb-5 mt-5" v-if="IsLarge">
        <div class="row justify-content-center" v-for="(trick,index) in tricks" :key="index">
            <BigTrickCard :trick="trick"/>
            
        </div>
    </div>
    <!-- <div class="container mb-5 mt-5" v-else>
        <div class="row justify-content-center" v-for="(trick,index) in tricks" :key="index">
            <SmallRecipeCard :trick="tricks"/>
        </div>
    </div> -->
    
</template>


<script>
import BigTrickCard from "@/components/Tricks/BigFoodTricksCard.vue"
// import SmallRecipeCard from "@/components/SmallFoodRecipyCard.vue"
export default {
    data(){
        return{
            IsLarge: true,
        }
    },
    emits: ["filter"],
    props: {
        tricks: Array,
    },
    components: {
        BigTrickCard,
        // SmallRecipeCard,
    },
    created() {
        if (window.screen.width < 1200){
            this.IsLarge = false
        }
        else{
            this.IsLarge = true
        }
    },
}
</script>


<style scoped>
.container{
    transition: 0.4s ease-in-out;
    margin-bottom: 110px !important;
    width: 100%;
    margin-left: 80px;
}

template{
    background-color: black;

}
</style>