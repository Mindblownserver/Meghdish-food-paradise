<template>
  <!--Welcome to my humble website guys!-->
  <div v-if="large">
    <header v-if="this.$route.path!== '/signin' && this.$route.path !== '/login'">
      <Navbar :loggedIn="loggedIn" @logout="logout" :username="displayname" :email="email"/>
    </header>
  </div>
  <div v-else>
    <header v-if="this.$route.path!== '/signin' && this.$route.path !== '/login'">
      <Hamberger :loggedIn="loggedIn" @logout="logout"/>
    </header>
  </div>
  
  <router-view/>

  <footer v-if="this.$route.path!== '/signin' && this.$route.path !== '/login'">
    <Foooter/>
  </footer>

</template>

<script>
import Navbar from "@/components/new_navbar.vue"
import Foooter from "@/components/Footer.vue"
import Hamberger from "@/components/hamburger_nav.vue"
import firebase from 'firebase/app';
import 'firebase/auth';
export default {
  name: 'App',
  components: {
    Navbar,
    Foooter,
    Hamberger
  },
  data() {
    return {
      largeScreen: 1196,
      MediumScreen:800,
      SmallScreen:700,
      large: false,
      loggedIn: false,
      displayname: "",
      email: "",
    }
  },
  methods: {
    logout(){
      firebase.auth().signOut().then(() => {
        console.log("Logged OUT IMMEDIATLY :)")
      }).catch((error) => {
        alert(error)
      });
      this.$router.replace({path: "/"})
    }
  },
    created() {
      document.title = "Megdish Food"
      firebase.auth().onAuthStateChanged((user) => {
      if (user){
        this.loggedIn = true;
        console.log("User logged is ", this.loggedIn);
        this.displayname= user.displayName;
        this.email = user.email;
      }
      else{
        console.log("User logged out")
        this.loggedIn= false;
      }
    })
  },
  mounted() {
        if (window.screen.width > this.SmallScreen){
          this.large = true;
        }
        else{
          this.large = false;
        }
  },

}
</script>

<style>

* {
  padding: 0;
  font-family: 'Montserrat', cursive;
}
:root{
  --main-web-color: hsl(29, 81%, 61%);
  --web-bg: rgb(247, 247, 247);
}
#app{
  text-align: center;
  background-color: var(--web-bg);
  overflow-x: hidden;
}
::-webkit-scrollbar {
    width: 1em;
}
::-webkit-scrollbar-track {
    background: var(--web-bg);
}
::-webkit-scrollbar-thumb {
    border-radius: 100vw;
    border: .25vw solid var(--web-bg);
    background: linear-gradient(hsl(19, 93%, 59%), var(--main-web-color));
}
::-webkit-scrollbar-thumb:hover{
  background: linear-gradient(hsl(19, 93%, 40%), hsl(29, 81%, 50%));
}
</style>