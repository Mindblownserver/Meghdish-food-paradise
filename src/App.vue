<template>
  <header v-if="this.$route.path!== '/signin' && this.$route.path !== '/login'">
    <Navbar :loggedIn="loggedIn" @logout="logout"/>
  </header>
  
  <router-view/>

  <footer v-if="this.$route.path!== '/signin' && this.$route.path !== '/login'">
    <Foooter/>
  </footer>

</template>

<script>
import Navbar from "@/components/navbar.vue"
import Foooter from "@/components/Footer.vue"
import firebase from 'firebase/app';
import 'firebase/auth';
export default {
  name: 'App',
  components: {
    Navbar,
    Foooter
  },
  data() {
    return {
      largeScreen: 1196,
      MediumScreen:800,
      SmallScreen:400,
      loggedIn: false,
    }
  },
  methods: {
    logout(){
      firebase.auth().signOut().then(() => {
        console.log("Logged OUT IMMEDIATLY :)")
      }).catch((error) => {
        alert(error)
      });
    }
  },
    created() {
      firebase.auth().onAuthStateChanged((user) => {
      if (user){
        this.loggedIn = true;
        console.log("USer logged in ", user, this.loggedIn)
      }
      else{
        console.log("USer logged out")
        this.loggedIn= false;
      }
    })
  },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');

* {
  padding: 0;
  font-family: 'Satisfy', cursive;
}
#app{
  text-align: center;
  background-color: rgb(247, 247, 247);
}

</style>