<template>
    <!--Hi my name is Mohammed Yassine Kharrat and I coded this website from scratch using Vuejs
    When I said from scratch, I meant from the vuejs starter hello world project
    Of course, this project would never be possible without the help of multiple youtube channels!-->
    <div>
        <Contents :recipe= "recipeData"/>
    </div>

</template>


<script>
import Contents from "../components/recipe/contents.vue"
import db from "../fb"
export default {
    name: 'recipe',
    components: {
        Contents
    },
    data(){
        return{
            recipeData:{}
        }
    },
    created(){
        let recipeID = this.$route.query.data;
        db.collection("Food recipies").doc("Food list").collection('food').doc(recipeID).get().then(doc=>{
            this.recipeData = doc.data()
        })
        console.log(this.recipeData)
    }
}
</script>
