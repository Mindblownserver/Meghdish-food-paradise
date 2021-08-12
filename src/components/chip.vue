<template>
    <div class="Chip" :style="{background: BG}">
        <a style="color: white">{{text}}</a>
    </div>
</template>

<script>
export default {
    name: "Chip",
    props :{
        text: String,
        BG: String,
    }
}
</script>
<style scoped>
.Chip{
    display: inline-block;
    padding: 0 20px;
    height: 30px;
    margin-bottom: 10px;
    margin-right: 5px;
    font-size: 18px;
    line-height: 30px;
    border-radius: 25px;
}
a{
    text-decoration: none;
}
</style>