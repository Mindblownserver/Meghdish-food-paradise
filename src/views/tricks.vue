<template>
  <div>
    <TrickBackgroundComponents />
  </div>
  <div>
    <Seachbar @search="search"/>
  </div>
  <div>
    <verticalContents :tricks="tricks"/>
  </div>
</template>
<script>
import Seachbar from "@/components/Tricks/search-bar.vue"
import TrickBackgroundComponents from "@/components/Tricks/trick-search-bg.vue"
import verticalContents from "@/components/Tricks/vertical-contents.vue"
import db from "../fb.js"
export default {
  name: "Tricks",
  components:{
    TrickBackgroundComponents,
    Seachbar,
    verticalContents
  },
  data(){
        return{
            all_tricks: [],
            tricks: [],
        }
  },
  created(){
    db.collection("Food Tricks").doc("Trick list").collection("trick").get().then((Snapshots) => {
            Snapshots.forEach((doc) => {
                this.all_tricks.push(doc.data())
                this.tricks.push(doc.data())
                // console.log("Gotcha fam")
            })
        })
    
  },
  methods:{
    search(text){
        console.log(text)
        if (text === ""){
            this.tricks = this.all_tricks;
        }
        else{
            this.tricks = this.tricks.filter((trick) => trick.title.toLowerCase().includes(text) || trick.desc.toLowerCase().includes(text));
        }
    }
  }
  
}
</script>
