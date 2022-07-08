<template>
    <div class="card">
        <div class="title">
            <h3 class="mini_title">Popular in Pastas</h3>
        </div>
        <!--Horizontal scroll...I'm working on this site for more than 2 months and It is really getting maintained :I-->
        <div class="scrollable">
            <!--Here insert elements-->
        </div>
    </div>
</template>

<script>
export default {
    name: 'PopularRecipies'
}
</script>

<style scoped>
.mini_title{
    font-weight: bolder;
}

.card{
    display: flex;
    width: 50rem;
    text-align: start;
    background-color: white;
    margin-top: 10px;
    margin-bottom: 30px;
    padding: 30px 40px;
    border-radius: 10px;
    box-shadow: 2px 3px 5px rgb(187, 187, 187);
}
.scrollable {
    background-color: #333;
    overflow: auto;
    white-space: nowrap;
}

</style>