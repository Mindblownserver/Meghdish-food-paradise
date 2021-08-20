<template>
    <div>
        <h2><span>Food Tricks</span></h2>
        <SneakpeakFoodCards :Sneakpeaks="SneakPeak_Tricks" />
    </div>
</template>

<script>
import SneakpeakFoodCards from "@/components/Home/Sneakpeak-FoodCards.vue"

export default {
    name: "SneakpeakTricks",
    components: {
        SneakpeakFoodCards
    },
    data(){
        return {
            SneakPeak_Tricks: []
        }
    },
    created() {
        this.SneakPeak_Tricks= [
            {
                id: 1,
                Tag: ["Easy", "ForestGreen"],
                stars: 4.0,
                title: "Healthy morning bread",
                desc: "Stop yeast, use milk",
                img: "https://omnivorescookbook.com/wp-content/uploads/2019/11/1911_Easy-Milk-Bread-Rolls_001.jpg",
                difficulty: ["Easy","Forestgreen"]
            },
            {
                id: 1,
                Tag: ["Easy", "ForestGreen"],
                stars: 4.0,
                title: "Healthy morning bread",
                desc: "Stop yeast, use milk",
                img: "https://omnivorescookbook.com/wp-content/uploads/2019/11/1911_Easy-Milk-Bread-Rolls_001.jpg",
                difficulty: ["Easy","Forestgreen"]
            },
            {
                id: 1,
                Tag: ["Easy", "ForestGreen"],
                stars: 4.0,
                title: "Healthy morning bread",
                desc: "Stop yeast, use milk",
                img: "https://omnivorescookbook.com/wp-content/uploads/2019/11/1911_Easy-Milk-Bread-Rolls_001.jpg",
                difficulty: ["Easy","Forestgreen"]
            },
            {
                id: 1,
                Tag: ["Easy", "ForestGreen"],
                stars: 4.0,
                title: "Healthy morning bread",
                desc: "Stop yeast, use milk",
                img: "https://omnivorescookbook.com/wp-content/uploads/2019/11/1911_Easy-Milk-Bread-Rolls_001.jpg",
                difficulty: ["Easy","Forestgreen"]
            },
            {
                id: 1,
                Tag: ["Easy", "ForestGreen"],
                stars: 4.0,
                title: "Healthy morning bread",
                desc: "Stop yeast, use milk",
                img: "https://omnivorescookbook.com/wp-content/uploads/2019/11/1911_Easy-Milk-Bread-Rolls_001.jpg",
                difficulty: ["Easy","Forestgreen"]
            },
            {
                id: 1,
                Tag: ["Easy", "ForestGreen"],
                stars: 4.0,
                title: "Healthy morning bread",
                desc: "Stop yeast, use milk",
                img: "https://omnivorescookbook.com/wp-content/uploads/2019/11/1911_Easy-Milk-Bread-Rolls_001.jpg",
                difficulty: ["Easy","Forestgreen"]
            },
        ]
    },
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
</style>
