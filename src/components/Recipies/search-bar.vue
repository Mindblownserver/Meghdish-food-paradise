<template>
    <div class="search input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" style="background-color:#FFFF;border-radius:16px 0 0 16px" id="basic-addon1"><i class="fa fa-search" aria-hidden="true"></i></span>
        </div>
         <input type="text" class="form-control" placeholder="Search food" id="searchbar" aria-describedby="basic-addon2" @keyup="search">
    </div>
    <!--Chips-->
    
    <div class="Container">
        <div class="row">
            <div v-for="(FdTag,index) in FdTags" :key="index">
                <router-link v-bind:to="'/recipes/' + FdTag.id"><Chip :text="FdTag.text" :BG="FdTag.color" @click="filter_food(FdTag.text)"/></router-link>
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
input{
    border-radius: 16px;
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