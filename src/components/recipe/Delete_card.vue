<template>
    <div class="card">
        <div class="title">
            <h3 class="mini_title">Not sure about the post?</h3>
        </div>
        <!--I'm working on this site for more than 2 months and It is really getting maintained :I. Edit: I have started working in this since 20th August ,2021. Time sure flies!-->
        <div>
            <a href="/recipes/all" class="btn btn-danger" @click="deletePost"><i class="fa-solid fa-trash"></i> |Delete</a>
            <!-- To somehow make a heads up display without the need of a modal, we need to make a dropdown thing similar to the logout button! -->
        </div>
    </div>
</template>

<script>
import db from "../../fb"
export default {
    name: 'Delete_card',
    props:{
        recipeID: String
    },
    methods:{
        deletePost(){
            console.log(this.recipeID);
            db.collection("Food recipies").doc("Food list").collection("food").doc(`${this.recipeID}`).delete();
        }
    },
    
}
</script>

<style scoped>
.mini_title{
    font-weight: bolder;
}

.card{
    display: flex;
    width: 50rem;
    background-color: white;
    margin: 10px 0 30px 0;
    text-align: start;
    padding: 30px 30px;
    border-radius: 10px;
    box-shadow: 2px 3px 5px rgb(187, 187, 187);
}
</style>