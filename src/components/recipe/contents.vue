<template>
    <div>
        <Uppercontent  />
    </div>
    <div>
        <RateRecipe />
    </div>
</template>


<script>
import Uppercontent from "@/components/recipe/Uppercontent.vue"
import RateRecipe from "@/components/recipe/Rate_recipe.vue"
export default {
    name: 'Contents',
    components: {
        Uppercontent,
        RateRecipe
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
</style>