<template>
    <div >
        <Uppercontent  />
    </div>
</template>


<script>
import Uppercontent from "@/components/recipe/Uppercontent.vue"
export default {
    name: 'Contents',
    components: {
        Uppercontent
    }
}
</script>


<style scoped>
*{
    color: black;
    display: flex;
    text-align: flex-start;
    margin-left: 8px;
    margin-top: 10px;
}
</style>