<template>
  <TrickBackgroundComponents />
  <Seachbar />
</template>
<script>
import Seachbar from "@/components/Tricks/search-bar.vue"
import TrickBackgroundComponents from "@/components/Tricks/trick-search-bg.vue"

export default {
  name: "Tricks",
  components:{
    TrickBackgroundComponents,
    Seachbar,
  }
}
</script>
