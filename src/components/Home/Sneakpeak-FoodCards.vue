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
        if (window.screen.width< 1200){
            this.numberOfColumns = 2
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

<style>
.container{
    margin-bottom: 110px !important;
    align-items: center;
    justify-items: center;

}
.card-list {
  display: grid;
  grid-gap: 1em;
}

/*1119 is size for 2 coloumns*/

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .card-list{
    width: 100%;
    display: block;
    
  }
}


ul {
  list-style-type: none;
}


</style>