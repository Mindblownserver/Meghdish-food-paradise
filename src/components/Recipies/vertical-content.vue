<template>
    <div class="container mb-5 mt-5" v-if="IsLarge">
        <div class="row justify-content-center" v-for="(recipe,index) in recipies" :key="index">
            <BigRecipyCard :recipe="recipe"/>
            
        </div>
    </div>
    <div class="container mb-5 mt-5" v-else>
        <div class="row justify-content-center" v-for="(recipe,index) in recipies" :key="index">
            <SmallRecipeCard :recipe="recipe"/>
        </div>
    </div>
    
</template>


<script>
import BigRecipyCard from "@/components/Recipies/BigFoodRecipyCard.vue"
import SmallRecipeCard from "@/components/Recipies/SmallFoodRecipyCard.vue"
export default {
    data(){
        return{
            IsLarge: true,
        }
    },
    emits: ["filter"],
    props: {
        recipies: Array,
    },
    components: {
        BigRecipyCard,
        SmallRecipeCard,
    },
    methods: {
        filter_food(prop){
            this.$emit("filter", prop)
        },
    },
    created() {
        if (window.screen.width < 1200){
            console.log("Small")
            this.IsLarge = false
        }
        else{
            console.log("Large")
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