<template>
    <div class="search">
        <h1>Discover</h1>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Type food name here" id="searchbar" aria-describedby="basic-addon2" @keyup="search">
        </div>
    </div>
    <!--Chips-->
    
    <div class="Container">
        <div class="row">
            <div v-for="(FdTag,index) in FdTags" :key="index">
                <router-link v-bind:to="'/recipies/' + FdTag.id"><Chip :text="FdTag.text" :BG="FdTag.color" @click="filter_food(FdTag.text)"/></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Chip from "../chip.vue"
export default {
    name: "Seachbar",
    components: {
        Chip
    },
    props: {
        FdTags: Array,
    },
    emits: ["all", "filter", "search"],
    methods: {
        filter_food(prop){
            if (prop ==="All") {
                this.$emit("all")
            }
            else{
                this.$emit("filter", prop)
            }
        },
        search(){
            const bar = document.getElementById('searchbar').value.toLowerCase();
            this.$emit('search', bar)
        }
    },
}
</script>

<style scoped>
.search{
    text-align: start;
    margin-top: 10px;
    margin-left: 80px;
    width: 709px;
}

@media only screen and (max-width: 792px){
    .search{
        text-align: center;
        margin-top: 10px;
        width: 100%;
        padding: 10px;
        margin-left: 0;
    }
    .Container{
        margin-left: 10px;
        margin-right: 15px;
    }
    .row{
        margin-left: 0px;
        text-align: center;
    }
}


@media only screen and (min-width: 792px){
.row{
    margin-left: 80px;
}

}
</style>