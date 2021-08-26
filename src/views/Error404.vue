<template>
    <header class="navbar">
        <Navbar />
    </header>
    <div style="margin-top: 50px;">
        <h1>Error 404: Page not found!</h1>
        <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?size=338&ext=jpg&ga=GA1.2.1216666481.1626019052" alt="">
    </div>
    
    <router-link v-bind:to="'/'"><button type="button" class="btn btn-info">Return to home page</button></router-link>
</template>

<script>
import Navbar from "@/components/navbar.vue"
export default {
    name:"Error404",
    components: {
        Navbar
    }
}
</script>

<style scoped>
.btn{
    margin-top: 50px;
}

.navbar{
    background-color: rgba(37, 37, 37, 0.76);
    height: 50px;
}
</style>