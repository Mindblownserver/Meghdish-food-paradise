<template>
    <nav>
        <div class="menu-item"><a style="color: white;" href="/">Home</a></div>
        <div class="menu-item"><a style="color: white;" href="/recipies/all">Recepies</a></div>
        <div class="menu-item"><a style="color: white;" href="/tricks">Tricks</a></div>
        <div class="menu-item"><a style="color: white;" href="/about">About</a></div>
    </nav>
</template>

<script>
export default{
    name: 'Navbar',
}
</script>

<style >
nav{
    position: absolute;
    display: flex;
    justify-content: flex-start;
}
nav .menu-item {
    padding: 10px 15px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
}

nav .menu-item.active,
nav .menu-item:hover{
    background-color: #444;
    border-bottom-color: rgb(0, 153, 20);
}

nav .menu-item a { 
    text-decoration: none;
}
</style>