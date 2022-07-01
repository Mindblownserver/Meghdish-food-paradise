<template>
    <!--Error with v-for solution is adding :key="index" and v-for="(recepy, index) in array"-->
    <div class="container mb-5 mt-5">
        <ul :style="gridStyle" class="card-list">
            <li v-for="(Sneakpeak, index) in Sneakpeaks" :key="index" class="card-item">
                <SmallRecipeCard :recipe="Sneakpeak"/>
            </li>
        </ul>
        
    </div>
</template>

<script>
import SmallRecipeCard from "@/components/Home/SmallFoodRecipyCard.vue"
export default {
    name: "SneakpeakFoodCards",
    props: {
        Sneakpeaks: Array,
        id: String,
    },
    components: {
        SmallRecipeCard
    },
    data() {
        return {
            numberOfColumns: 3,
        }
    },
    created() {
        if (window.screen.width< 1200 && window.screen.width > 790){
            this.numberOfColumns = 2
            this.gridTemplateColumns
        }
        else if (window.screen.width > 1200) {
            this.numberOfColumns = 3
            this.gridTemplateColumns
        }
        else{
            this.numberOfColumns = 1
            this.gridTemplateColumns
        }
    },
    computed: {
        gridStyle() {
        return {
            gridTemplateColumns: `repeat(${this.numberOfColumns}, minmax(100px, 1fr))`
        }
        },
    },
}
</script>

<style scoped>
.container{
    margin-bottom: 110px !important;
    display: flex;
    align-items: center;
    justify-content: center;

}
.card-list {
  display: grid;
  grid-gap: 10vw;
}

/*1119 is size for 2 coloumns*/


ul {
  list-style-type: none;
}


</style>