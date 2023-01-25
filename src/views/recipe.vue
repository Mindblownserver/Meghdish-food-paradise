<template>
    <!--Hi my name is Mohammed Yassine Kharrat and I coded this website from scratch using Vuejs
    When I said from scratch, I meant from the vuejs starter hello world project
    Of course, this project would never be possible without the help of multiple youtube channels!-->
    <div>
        <Contents :recipe= "recipeData" :recipeID="recipeID" :isAdmin="isAdmin"/>
    </div>

</template>


<script>
import Contents from "../components/recipe/contents.vue"
import db from "../fb"
import 'firebase/auth';
import firebase from 'firebase/app';
export default {
    name: 'recipe',
    components: {
        Contents
    },
    data(){
        return{
            recipeData:{},
            isAdmin: false,
            recipeID: "",
        }
    },
    async created(){
        this.recipeID = this.$route.query.data;
        db.collection("Food recipies").doc("Food list").collection('food').doc(this.recipeID).get().then(doc=>{
            this.recipeData = doc.data()
        })
        console.log(this.recipeData)
        firebase.auth().onAuthStateChanged(user =>{
            if(user.uid == "tuPfqpaqcMZ7uxRLi1UR3x4o8lX2"){
                this.isAdmin = true;
            }
        })
    },
}
</script>
