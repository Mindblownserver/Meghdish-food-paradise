<template>
    <div class="UpperContent">
        <uppercontent  :trick="trick"/>
    </div>
    <div class="RatingContent">
        <rateTrick @submitRating="submitRating"/>
    </div>
    <div v-if="isAdmin">
        <deleteCard :trickID="recipeID" />
    </div>
</template>


<script>
import db from "../../fb"
import 'firebase/auth';
import firebase from 'firebase/app';
import uppercontent from "@/components/Trick/uppercontent.vue"
import rateTrick from "@/components/Trick/rateTrick.vue"
import deleteCard from '@/components/Trick/deleteCard.vue'
export default {
    name: 'Contents',
    components: {
        uppercontent,
        rateTrick,
        deleteCard
    },
    props:{
        trick: Object,
        isAdmin: Boolean,
        trickID:String
    },
    methods:{
      submitRating(star,feedback){
        console.log(star, feedback);
        firebase.auth().onAuthStateChanged(user => {
            if(user){
            // User is logged in
                let RatedBy = this.trick.ratedBy +1;
                db.collection("Food Tricks").doc("Trick list").collection('trick').doc(this.trickID).update({ratedBy: RatedBy, stars: star}).then(()=>{
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
              Subject : `A feedback about the ${this.trickID} trick` ,
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