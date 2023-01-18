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
      if (user){
        console.log("User logged in"); // Trying to either put the default preference section or make it personal if the user is logged in!
      }
    })
    db.collection("SneakpeakFood").get().then((Snapshots) => {
      Snapshots.forEach((doc) => {
          this.Sneakpeak_recepies.push(doc.data())
      })
    });
    
  },
};
</script>