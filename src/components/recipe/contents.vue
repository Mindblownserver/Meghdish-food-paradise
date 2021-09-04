<template>
    <div >
        <Uppercontent  />
    </div>
    <div>
        <PopularRecipies />
    </div>
    <div>
        <RateRecipe />
    </div>
</template>


<script>
import Uppercontent from "@/components/recipe/Uppercontent.vue"
import PopularRecipies from "@/components/recipe/popular_recipies.vue"
import RateRecipe from "@/components/recipe/Rate_recipe.vue"
export default {
    name: 'Contents',
    components: {
        Uppercontent,
        PopularRecipies,
        RateRecipe
    }
}
</script>


<style scoped>
*{
    color: black;
    display: flex;
    text-align: start;
    width: 100%;
    margin-top: 50px;
}

@media only screen and (max-width: 868px){
    *{
        width: 95vw;
    }
}
</style>