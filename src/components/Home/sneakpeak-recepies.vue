<template>
    <div>
        <h2><span>Food Recepies</span></h2>
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
h2{
    width: 100%; 
    text-align: center; 
    color: silver;
    border-bottom: 1px solid silver; 
    line-height: 0.1em;
    margin: 50px 0 20px; 
}

h2 span { 
    background:rgb(245, 245, 245); 
    padding:0 10px; 
}
.center{
    display: flex;
    align-content: center;
}
</style>