<template>
    <div class="layout">
        <AwesomeHoverCard :title="'New'" :description="'The options are never-ending. Basically, the whole World is your cookbook. We promise to provide you hundreds and thousands of recipes online, which gives you an advantage of trying out new recipes and improvising without buying expensive cookbooks.'" :image="'fa fa-solid fa-fire'"/>
        <AwesomeHoverCard :title="'Healthy and delecious'" :description="'Many commercially prepared foods are high in fat, salt, and sugar. When we prepare our food, we know exactly which ingredients and how much of each are going into our food.'" :image="'fa fa-solid fa-heart-circle-plus'"/>
        <AwesomeHoverCard :title="'Saves money'" :description="'Eating homemade foods is usually much cheaper than eating at a restaurant or buying processed foods from the market.'" :image="'fa fa-solid fa-money-bill-trend-up'"/>
    </div>
</template>


<script>
import AwesomeHoverCard from "@/components/About/icon_to_text_card.vue"
export default {
    name: "AboutAdvantagesCards",
    components:{
        AwesomeHoverCard
    }
}
</script>
<style scoped>
.layout{
    display: grid;
    grid-gap: 2.4rem;
    grid-template-columns: 31% 31% 31%;
    margin-top: -100px;
}
</style>