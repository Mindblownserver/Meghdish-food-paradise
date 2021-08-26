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
    display: block;
    text-align: start;
    margin-left: 8px;
    width: 100%;
    margin-top: 10px;
}

</style>