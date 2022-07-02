<template>
    <h5><span>All Rights Reserved</span></h5>
    <div class="social">
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-youtube"></i></a>
        <a href="#"><i class="fab fa-linkedin"></i></a>
    </div>
    <div>
        <p>&copy;2022 Meghdish Food</p>
    </div>

</template>

<script>
export default {
    name: "Foooter"
}
</script>

<style scoped>
*{
    transition: 0.3s ease-in-out;
}

h5{
    width: 100%; 
    text-align: center; 
    color: silver;
    border-bottom: 1px solid silver; 
    line-height: 0.1em;
    margin: 50px 0 20px; 
}

h5 span { 
    background:rgb(245, 245, 245); 
    padding:0 10px; 
}

.social{
    padding-bottom: 20px;
    color: #4b4c4d;
}
 a{
    font-size: 24px;
    color: inherit;
    border: 1px solid #cccc;
    width: 40px;
    height: 40px;
    line-height: 38px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    margin: 0 8px;
    opacity: 0.75;
}
a:hover{
    opacity: 0.9;
}
</style>