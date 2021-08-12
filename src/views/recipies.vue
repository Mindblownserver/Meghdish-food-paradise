<template>
    <div>
        <RecipeBackgroundComponents />
    </div>
    <div>
        <Seachbar @search="search" @all="reset" @filter="filter" :FdTags="tags"/>
    </div>
        <VerticalContent :recipies="recipies"/>
</template>

<script>
import RecipeBackgroundComponents from "@/components/Recipies/recipe-search-bg.vue"
import Seachbar from "@/components/Recipies/search-bar.vue"
import VerticalContent from "@/components/Recipies/vertical-content.vue"
import db from "../fb.js"


export default {
    name: "Recipies",
    components: {
        RecipeBackgroundComponents,
        Seachbar,
        VerticalContent
    },
    data(){
        return{
            tags: [],
            all_recipies: [],
            recipies: [],
            id: this.$route.params.id,
            inside: false,
            raw_tags: ['all', 'meat', 'vegetarian', 'lunch-box', 'bread', 'pasta', 'salad', 'sauces']
        }
    },
    methods: {
    filter(e){
        this.recipies = this.all_recipies.filter((recipe) => recipe.Tag[0] === e)
        },
    reset(){
        this.recipies = this.all_recipies;
        },
    search(text){
        console.log(text)
        if (text === ""){
            this.recipies = this.all_recipies;
        }
        else{
            this.recipies = this.recipies.filter((recipe) => recipe.title.toLowerCase().includes(text) || recipe.desc.toLowerCase().includes(text));
        }
    }
    },
    created() {
        db.collection("FoodTags").get().then((Snapshots) => {
            Snapshots.forEach((doc) => {
                this.tags.push(doc.data())
            })
        })
        db.collection("Food recipies").get().then((Snapshots) => {
            Snapshots.forEach((doc) => {
                this.all_recipies.push(doc.data())
            })
        })
        this.recipies = this.all_recipies
    //     console.log() failed try to link the url to tag :'(
    //     if (this.id !== "all"){
    //         this.raw_tags.forEach(tag => {
    //             if (this.id === tag){
    //             console.log("Inside :D");
    //             this.inside = true;
    //             }
    //         })
    //         if (this.inside){
    //             this.filter(this.id);
    //             this.inside  = false;
    //         }
    //         else{
    //             console.error("PAgE nOt fOuNd")
    //         }
    //     }
    //     else{
    //         console.log("Nothing at ALL!")
    //     }
    },
}
</script>