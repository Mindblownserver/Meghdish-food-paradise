<template>
    <!--YO  I'm quadrillingual-->
    <div>
        <Contents :trick= "trickData" :trickID="trickID" :isAdmin="isAdmin"/>
    </div>

</template>


<script>
import Contents from "@/components/Trick/contents.vue"
import db from "../fb"
import 'firebase/auth';
import firebase from 'firebase/app';
export default {
    name: 'trick',
    components: {
        Contents
    },
    data(){
        return{
            trickData:{},
            isAdmin: false,
            trickID: "",
        }
    },
    async created(){
        this.trickID = this.$route.query.data;
        db.collection("Food Tricks").doc("Trick list").collection('trick').doc(this.trickID).get().then(doc=>{
            this.trickData = doc.data()
        })
        console.log(this.trickData)
        firebase.auth().onAuthStateChanged(user =>{
            if(user.uid == "tuPfqpaqcMZ7uxRLi1UR3x4o8lX2" || user.uid == "mH6S3GS603YFfVLAKfLOckc16FI3"){
                this.isAdmin = true;
            }
        })
    },
}
</script>
