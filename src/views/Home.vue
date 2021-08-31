<template>
  
  <div>
    <HomeContents :sneakpeak_recepies="Sneakpeak_recepies"/>
  </div>
</template>

<script>
import HomeContents from '@/components/Home/Home-contents.vue';
import db from "./../fb"

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
    db.collection("SneakpeakFood").get().then((Snapshots) => {
      Snapshots.forEach((doc) => {
          this.Sneakpeak_recepies.push(doc.data())
      })
    });
    
  },
};
</script>


<style scoped>


</style>
