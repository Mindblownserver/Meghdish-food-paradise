<template>
    <div class="card">
        <div class="title">
            <h3 class="mini_title">Not sure about the post?</h3>
        </div>
        <!--I'm working on this site for more than 2 months and It is really getting maintained :I. Edit: I have started working in this since 20th August ,2021. Time sure flies!-->
        <div>
            <a href="" class="btn btn-info" style="margin-right:20px"><i class="fa-solid fa-pen"></i> |Edit</a>
            <a href="" class="btn btn-danger"><i class="fa-solid fa-trash"></i> |Delete</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Delete_card',
    methods:{
        deletePost(){
            // db.collection("cities").doc("DC").delete()
        }
    }
}
</script>

<style scoped>
.mini_title{
    font-weight: bolder;
}

.card{
    display: flex;
    width: 50rem;
    background-color: white;
    margin: 10px 0 30px 0;
    text-align: start;
    padding: 30px 30px;
    border-radius: 10px;
    box-shadow: 2px 3px 5px rgb(187, 187, 187);
}
</style>