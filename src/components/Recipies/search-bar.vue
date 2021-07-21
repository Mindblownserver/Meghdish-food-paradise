<template>
    <div class="search">
        <h1>Discover</h1>
        <div class="boxContainer">
            <table class="elementsContainer">
                <tr>
                    <td>
                        <input type="text" placeholder="Search recipe" class="Search">
                    </td>
                    <td>
                        <a href="#">
                            <i class="fas fa-search"></i>
                        </a>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "Seachbar"
}
</script>

<style scoped>
.search{
    text-align: start;
    margin-top: 10px;
    margin-left: 100px;
}
.boxContainer{
    position: relative;
    width: 250px;
    padding: 0px 10px;
    border: 2px solid black;
    border-radius: 50px;
}
.elementsContainter{
    width: 100%;
    height: 100%;
    vertical-align: middle;
}

.Search{
    border: none;
    height: 100%;
    width: 100%;
    padding: 0px 5px;
    border-radius: 50px;
    font-size: 18px;
    font-weight: 500;
}
.Search:focus{
    outline: none;
}

i {
    color: black;
}
i:hover {
    color: rgb(66, 65, 65);
}

</style>