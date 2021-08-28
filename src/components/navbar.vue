<template>
    <ul>
        <li class="right"><a href="/">Home</a></li>
        <li class="right"><a href="/recipies/all">Recepies</a></li>
        <li class="right"><a href="/tricks">Tricks</a></li>
        <li class="right"><a href="/about">About</a></li>
        <li class="active"><a href="/signin">Signin</a></li>
    </ul>
</template>

<script>
export default{
    name: 'Navbar',
}
</script>

<style scoped>


ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
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

li a {
  display: block;
  text-decoration: none;
  color: white;
}

li a:hover:not(.active) {
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
</style>