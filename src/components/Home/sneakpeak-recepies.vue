<template>
    <div>
        <span>-popular selects-</span>
        <h3>Trending Food</h3>
        <div class="center">
            <SneakpeakFoodCards :Sneakpeaks="Sneakpeak_recepies" />
        </div>
    </div>
</template>

<script>

import SneakpeakFoodCards from "@/components/Home/Sneakpeak-FoodCards.vue"
export default {
    name: "SneakpeakRecepies",
    components: {
        SneakpeakFoodCards,
    },
    props: {
        Sneakpeak_recepies: Array,
    }
    
}
</script>
<style scoped>
span{
    color: var(--main-web-color);
}

h3{
    margin-top: 20px;
}
.center{
    display: flex;
    align-content: center;
}
</style>