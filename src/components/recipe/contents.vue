<template>
    <div class="UpperContent">
        <Uppercontent  :recipe="recipe"/>
    </div>
    <div class="RatingContent">
        <RateRecipe />
    </div>
    <div v-if="isAdmin">
        <Delete_card :recipeID="recipeID" />
    </div>
</template>


<script>
import Uppercontent from "@/components/recipe/Uppercontent.vue"
import RateRecipe from "@/components/recipe/Rate_recipe.vue"
import Delete_card from '@/components/recipe/Delete_card.vue'
export default {
    name: 'Contents',
    components: {
        Uppercontent,
        RateRecipe,
        Delete_card
    },
    props:{
        recipe: Object,
        isAdmin: Boolean,
        recipeID:String
    }
}
</script>


<style scoped>
*{
    color: black;
    display: flex;
    width: 85.5%;
    margin-top: 50px;
    margin-left: 120px;
}
.UpperContent{
    margin-bottom: -60px;
}
.RatingContent{
    margin-bottom: -42px;
}
</style>