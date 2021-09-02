<template>
    <nav>
        <input type="checkbox" name="check" id="check">
        <button class="menu" onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'));document.getElementById('check').checked=!document.getElementById('check').checked;" aria-label="Main Menu">
            <svg width="40" height="40" viewBox="0 0 100 100">
                <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                <path class="line line2" d="M 20,50 H 80" />
                <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
            </svg>
        </button>
        <ul>
            <li class="right disappear"><a href="/">Home</a></li>
            <li class="right disappear"><a href="/recipies/all">Recepies</a></li>
            <li class="right disappear"><a href="/tricks">Tricks</a></li>
            <li class="right disappear"><a href="/about">About</a></li>
            <div v-if="loggedIn">
                <li class="disappear"><a @click="logout" href="#">Logout</a></li>
            </div>
            <div v-else>
                <li class="active"><a href="/signin">Sign in</a></li>
            </div>
        </ul>
    </nav>
</template>

<script>
export default {
    name:"Hamberger",
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
*{
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
}

#check{
    display: none;
}
nav{
    background-color: #333;
    height: 40px;
    width: 100%;
}

.menu{
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 20px;
  float: right;
  display: flex;
  padding: 0;
}
.line {
  fill: none;
  stroke: white;
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
.opened .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 6;
}
.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}

/* menu items ul and li */

ul{
    background-color: rgb(39, 36, 36);
    position: absolute;
    width: 100%;
    display: block;
    height: 270px;
    text-align: center;
    top: 40px;
    opacity: 0;
    left: 0;
    transform: translateX(-100%);
    transition: all  .9s cubic-bezier(0.35,-0.01, 0.21, 0.97);
}

ul li{
    display: block;
    padding-block: 15px;
}
ul li a{
    color: white;
}


li:hover{
  background-color: #444;
  text-decoration: none;
  border-bottom-color: rgb(0, 153, 20);
}


#check:checked ~ ul{
    transform: translateX(0);
    opacity: 100%;
}

</style>