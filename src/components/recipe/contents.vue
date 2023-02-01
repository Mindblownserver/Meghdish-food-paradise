<template>
    <div class="UpperContent">
        <Uppercontent  :recipe="recipe"/>
    </div>
    <div class="RatingContent">
        <RateRecipe :recipeID="recipeID" @submitRating="submitRating"/>
    </div>
    <div v-if="isAdmin">
        <Delete_card :recipeID="recipeID" />
    </div>
</template>


<script>
import db from "../../fb"
import 'firebase/auth';
import firebase from 'firebase/app';
import Uppercontent from "@/components/recipe/Uppercontent.vue"
import RateRecipe from "@/components/recipe/Rate_recipe.vue"
import Delete_card from '@/components/recipe/Delete_card.vue'
export default {
    name: 'Contents',
    components: {
        Uppercontent,
        RateRecipe,
        Delete_card
    },
    props:{
        recipe: Object,
        isAdmin: Boolean,
        recipeID:String
    },
    methods:{
      submitRating(star,feedback){
        console.log(star, feedback);
        firebase.auth().onAuthStateChanged(user => {
            if(user){
            // User is logged in
                let RatedBy = this.recipe.ratedBy +1;
                db.collection("Food recipies").doc("Food list").collection('food').doc(this.recipeID).update({ratedBy: RatedBy, stars: star}).then(()=>{
                    this.sendFeedback(user.email,feedback,star);
                });

            }
        })
        // Now you need to update the ratedBy and stars field in firebase + send email notifying admin of the rated post
      },
      sendFeedback(user, feedback, review){
        if(feedback!=""){
          this.$loadScript("https://smtpjs.com/v3/smtp.js")
          .then(()=>{
            // Send mail
            window.Email.send({
              SecureToken : "7d913d27-8ca3-4146-be05-3b9789ee44a1",
              To : 'med.yassine.kharrat@gmail.com',
              From : 'med.yassine.kharrat@gmail.com',
              Subject : `A feedback about the ${this.recipeID} recipe` ,
              Body : feedback + `\n This user rated us with "${review}"`
          }).then(
            () => alert(`Thank you for your feedback ${user}`)
          );
          }).catch((e)=>{
            alert(e + "\nSorry for the inconveniences");
          });
      }
    }
  }
}
</script>


<style scoped>
*{
    color: black;
    display: flex;
    width: 85.5%;
    margin-top: 50px;
    margin-left: 120px;
}
.UpperContent{
    margin-bottom: -60px;
}
.RatingContent{
    margin-bottom: -42px;
}
</style>