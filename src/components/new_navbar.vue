<template>
    <ul class="root" style="right:100px ;left:100px">
        <a href="/" class="title">Megdish Food</a>
        <ul class="middle">
          <li class="right "><a href="/">Home</a></li>
          <li class="right "><a href="/recipes/all">Recipes</a></li>
          <li class="right "><a href="/tricks/all">Tricks</a></li>
          <li class="right "><a href="/about">About</a></li>
        </ul>
        
        <div v-if="loggedIn">
          <li class="deactive ">
            <button type="button" class="btn btn-danger" href="#"><span id="text">Account</span>
            <i class="fas fa-chevron-down"></i></button>
            <div class="dropdown-content">
              <h5 style="margin-top: 20px;">{{username}}</h5>
              <p style="color: silver;">{{email}}</p>
              <!-- <a href="/saves"><i class="fa-solid fa-bookmark" style="margin-right: 20px"></i>Saves</a> -->
              <!-- I wanted to implement the save feature but due to time constraints and my uni studies, I sadly couldn't :*(-->
              <hr>
              <a @click="logout"><i class="fas fa-user-alt-slash"  style="margin-right: 20px"></i>Log out</a>
            </div>
          </li>
        </div>
        <div v-else class="rightest" >
          <li class="active frame_2"><div id="login"><a href="/login">Login</a></div></li>
          <li class="active frame_3"><div id="register"><a href="/signup">Register</a></div></li>
        </div>

        <ul class="active" style="display:none">
          <li class="icon">
            <div class="eclipse">
              <i class="far fa-bookmark"></i>
            </div>
            <span class="badge badge-light">9</span>
          </li>
          <li class="icon">
            <div class="eclipse">
              <a class="far fa-bell" tabindex="0" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?"></a>
            </div>
            <span class="badge badge-light">9</span>
          </li>
        </ul>
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
      },
      
    },
    created(){
        console.log(this.$route.query.page);
    }
}
</script>

<style scoped>
.root {
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  height: 48px;
  background-color: rgb(247, 247, 247);
  transition: 0.4s;
  left: 0;
}
a{
  cursor:pointer;
}
.middle{
  display: flex;
  justify-content: center;
  margin-bottom: -53px;
}

a{
    text-decoration: none;

}
li {
    
    float: left;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
}

.middle li, .rightest li{
    padding: 10px 15px;
    margin-left: 35px;

}

.title{
  position: absolute;
  left: 0;
  bottom: 6px;
  background: linear-gradient(to right, rgba(248, 117, 55, 1), var(--main-web-color));  
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.24px;
  margin-top: 10px;
  margin-left: 20px;
}


.right a {
  font-size: 16px;
  display: block;
  color: black;
  text-decoration: none;
  transition: 0.3s ease-in-out;
}

li.right a::after{
  display: block;
  content: "";
  width: 0;
  height: 3px;
  margin: 0 auto;
  background-image: linear-gradient(to right, rgba(248, 117, 55, 1), var(--main-web-color));
  border-radius: 5px;
  transition: 0.3s ease-in-out;
}

.middle.right:nth-of-type(5) a::after{
  all: unset;
}

.middle a:hover::after{
  width: 100%;
}

.active {
  float:right;
}

.deactive {
  top: 14px;
  height: 34px;
  float:right;
}
.deactive button{
  border-radius: 41px;
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
  transform: translateX(-90px) translateY(40px);
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

.dropdown-content a:hover {
  background-color: #ddd;
}

#check{
  display: none;
}

button:focus ~.dropdown-content {
  opacity: 100%;
  transform: translateX(-210px) translateY(40px);
}
.fa-chevron-down{
  color: #FFFF;
  font-size: 10px;
  margin-left: 6px;
  margin-top: 8px;
}

button{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  margin-bottom: inherit;
}

.button:hover{
  color: red;
}

.frame_2 {
  display: flex;
  justify-content: center;
  align-items: center;
	top: 12px;
  right: 20px;
	width: 128px;
	height: 34px;
  border-radius: 41px;
  background-color: rgba(248, 117, 55, 1);
}

#login {
	top: 16px;
	height: 23px;
	overflow: hidden;
	font-family: Poppins;
	font-size: 16px;
	font-weight: bold;
	text-align: left;
	letter-spacing: 0.16px;
	color:#FFFFFF;
}

.frame_3 {
	display: flex;
  justify-content: center;
  align-items: center;
  outline: 1px solid var(--main-web-color);
	top: 12px;
  border-radius: 41px;
	width: 128px;
	height: 34px;
}

#register {
	top: 16px;
	height: 23px;
	overflow: hidden;
	font-family: Poppins;
	font-size: 16px;
	font-weight: bold;
	text-align: left;
	letter-spacing: 0.16px;
	color:#FFFF;
}
#login a{
  color: #FFFFFF;
}

#register a{
  color: var(--main-web-color);
}

.eclipse{
  margin-top: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px / 24px;
  width: 32px;
	height: 32px;
  background-color: rgb(243, 243, 243);
} 
.icon{
  margin-right: 10px;
}
.icon:hover{
  cursor: pointer;
}
.badge{
  position: absolute;
  top: 13px;
  width: 15px;
  font-size: 10px;
  border-radius: 20px;
  left: 15px;
  height: 15px;
  background-color: var(--main-web-color);
  color: #FFFF;

}
</style>