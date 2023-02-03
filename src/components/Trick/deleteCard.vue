<template>
    <div class="card">
        <div class="title">
            <h3 class="mini_title">Not sure about the trick?</h3>
        </div>
        <!--I'm working on this site for more than 2 months and It is really getting maintained :I. Edit: I have started working in this since 20th August ,2021. Time sure flies!-->
        <div>
            <button class="btn btn-danger" ><i class="fa-solid fa-trash"></i> |Delete</button>
            <div class="dropdown-content">
              <h5 style="margin-top: 20px;">Are you sure?</h5>
              <p style="color: silver;">You might lose it forever (for a long time)</p>
              <!-- <a href="/saves"><i class="fa-solid fa-bookmark" style="margin-right: 20px"></i>Saves</a> -->
              <!-- I wanted to implement the save feature but due to time constraints and my uni studies, I sadly couldn't :*(-->
              <hr>
              <a href="/tricks" @click="deletePost"><i class="fa-solid fa-trash"  style="margin-right: 20px"></i>yes</a>
            </div>
            <!-- To somehow make a heads up display without the need of a modal, we need to make a dropdown thing similar to the logout button! -->
        </div>
    </div>
</template>

<script>
import db from "../../fb"
export default {
    name: 'deleteCard',
    props:{
        trickID: String
    },
    methods:{
        deletePost(){
            console.log(this.trickID);
            db.collection("Food Tricks").doc("Trick list").collection("trick").doc(`${this.trickID}`).delete();
        }
    },
    
}
</script>

<style scoped>
.mini_title{
    font-weight: bolder;
}

.card{
    display: flex;
    width: 50rem;
    background-color: white;
    margin: 10px 0 30px 0;
    text-align: start;
    padding: 30px 30px;
    border-radius: 10px;
    box-shadow: 2px 3px 5px rgb(187, 187, 187);
}
.dropdown-content {
  display: block;
  border-radius: 5px;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 300px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  opacity: 0;
  transform: translateX(50px) translateY(21px);
  transition: all .9s cubic-bezier(0.25, 1.03, 0.8, 0.92);
}
.dropdown-content a {
  float: none;
  color: black;
  border-radius: 5px;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content p{
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
}
.dropdown-content h5{
    text-align: center;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

#check{
  display: none;
}

button:focus ~.dropdown-content {
  opacity: 100%;
  transform: translateX(70px) translateY(21px);
}
</style>