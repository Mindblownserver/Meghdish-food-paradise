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
      Sneakpeak_recepies: []
    }
  },
  components: {
    HomeContents,
  },
  created() {
    db.collection("SneakPeakRecepies").onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change => {
          this.Sneakpeak_recepies.push({
            ...change.doc.data(),
            id: change.doc.id
            })
          }
        )
      })

  },
};
</script>
