<template>
    <header class="navbar">
        <Navbar />
    </header>

    <div>
        <Contents />
    </div>

</template>


<script>
import Navbar from "../components/navbar.vue"
import Contents from "../components/recipe/contents.vue"
export default {
    name: 'recipe',
    components: {
        Navbar,
        Contents
    }
}
</script>

<style scoped>
.navbar{
    background-color: rgba(37, 37, 37, 0.76);
    height: 50px;
}

</style>