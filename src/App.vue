<template>
  <header>
    <Navbar />
  </header>
  
  <router-view/>

  <footer>
    <Foooter/>
  </footer>
</template>

<script>
import Navbar from "@/components/navbar.vue"
import Foooter from "@/components/Footer.vue"

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
    }
  }

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
}

</style>