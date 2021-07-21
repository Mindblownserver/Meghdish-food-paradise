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
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');

* {
  padding: 0;
  font-family: 'Satisfy', cursive;
  color: rgb(3, 25, 66);
}
#app{
  text-align: center;
}

</style>