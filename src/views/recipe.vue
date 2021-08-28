<template>
    
    <!--Hi my name is Mohammed Yassine Kharrat and I coded this website from scratch using Vuejs-->
    <div>
        <Contents />
    </div>

</template>


<script>
import Contents from "../components/recipe/contents.vue"
export default {
    name: 'recipe',
    components: {
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