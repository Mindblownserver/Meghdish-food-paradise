<template>
    <!--Error with v-for solution is adding :key="index" and v-for="(recepy, index) in array"-->
    <div class="container mb-5 mt-5">
        <ul :style="gridStyle" class="card-list">
            <li v-for="(Sneakpeak, index) in Sneakpeaks" :key="index" class="card-item">
                <SneakPeakRecepy :recepy="Sneakpeak"/>
            </li>
        </ul>
        
    </div>
</template>

<script>
import SneakPeakRecepy from "@/components/Home/Sneakpeak-FoodCard.vue"
export default {
    name: "SneakpeakFoodCards",
    props: {
        Sneakpeaks: Array,
        id: String,
    },
    components: {
        SneakPeakRecepy
    },
    data() {
        return {
            numberOfColumns: 3,
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

<style>
.container{
    margin-bottom: 110px !important;

}
.card-list {
  display: grid;
  grid-gap: 1em;
}



ul {
  list-style-type: none;
}


</style>