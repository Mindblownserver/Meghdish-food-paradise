<template>
  
  <div>
    <HomeContents :sneakpeak_recepies="Sneakpeak_recepies"/>
  </div>
</template>

<script>
import HomeContents from '@/components/Home/Home-contents.vue';
import db from "./../fb"
import 'firebase/auth';
import firebase from 'firebase/app';
export default {
  name: 'Home',
  data(){
    return{
      Sneakpeak_recepies: [],
    }
  },
  components: {
    HomeContents,
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user){
         // Trying to either put the default preference section or make it personal if the user is logged in!
        //  link the small recipe cards to actual cards!
        db.collection("SneakpeakFood").get().then((Snapshots) => {
          Snapshots.forEach((doc) => {
              this.Sneakpeak_recepies.push(doc.data())
          })
        });
      }
      else{
        let favCategoryUser = db.doc(`/Food recipies/favourite Category/user/${user.uid}`);
        favCategoryUser.get().then(doc=>{ 
          db.collection("Food recipies").doc("Food list").collection("food").where("Tag","array-contains",doc.data().category).limit(6).get().then((snapshots)=>{
          snapshots.forEach((snapshot) => {
              this.Sneakpeak_recepies.push(snapshot.data())
          })
        })
        })
      }
    })
    
    
  },
};
</script>