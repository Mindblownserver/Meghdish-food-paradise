<template>
    <ul>
        <li class="right disappear"><a href="/">Home</a></li>
        <li class="right disappear"><a href="/recipies/all">Recepies</a></li>
        <li class="right disappear"><a href="/tricks">Tricks</a></li>
        <li class="right disappear"><a href="/about">About</a></li>
        <div v-if="loggedIn">
          <li class="deactive disappear">
            <a href="#">Account</a>
            <i class="fas fa-chevron-down"></i>
            <div class="dropdown-content">
              <h5 style="margin-top: 20px;">{{username}}</h5>
              <p style="color: silver;">{{email}}</p>
              <hr>
              <a href="/help"><i class="fas fa-question-circle" style="margin-right: 20px"></i>Help</a>
              <a @click="logout"><i class="fas fa-user-alt-slash"  style="margin-right: 20px"></i>Log out</a>
            </div>
          </li>
        </div>
        <div v-else>
          <li class="active"><a href="/signin">Sign in</a></li>
        </div>
    </ul>
</template>

<script>
export default{
    name: 'Navbar',
    emits: ["logout"],
    props: {
      loggedIn: Boolean,
      username: String,
      email: String
    },
    methods: {
      logout(){
        this.$emit("logout")
      }
    },
}
</script>

<style scoped>
/* just something to make things disappear 

.disappear{
  display: none;
} */

ul {
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background-color: #333;
}

li {
    
    float: left;
    padding: 10px 15px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
}


a{
  font-size: 20px;
}

li a {
  display: block;
  text-decoration: none;
  color: white;
}

li.right:hover{
  background-color: #444;
  text-decoration: none;
  border-bottom-color: rgb(0, 153, 20);
}


.active {
  background-color: #04AA6D;
  float:right;
}

.deactive {
  background-color: #a50000;
  cursor: pointer;
  float:right;
}
.dropdown-content {
  display: none;
  border-radius: 5px;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 300px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  transform: translateX(-198px) translateY(30px);
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

.dropdown-content a:hover {
  background-color: #ddd;
}

.deactive:hover .dropdown-content {
  display: block;
}
.fa-chevron-down{
  color: white;
  font-size: 10px;
  margin-left: 6px;
  margin-top: 8px;
}

</style>