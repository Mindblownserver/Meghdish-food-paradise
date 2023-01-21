<template>
    <div>
        <h3>Cuisine tricks</h3>
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

