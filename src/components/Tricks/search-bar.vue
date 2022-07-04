<template>
    <div class="search input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" style="background-color:#FFFF;border-radius:16px 0 0 16px" id="basic-addon1"><i class="fa fa-search" aria-hidden="true"></i></span>
        </div>
         <input type="text" class="form-control" placeholder="Search food" id="searchbar" aria-describedby="basic-addon2" @keyup="search">
    </div>
    <!--Chips-->
</template>
<script>
export default {
    name: "Seachbar",
}
</script>

<style scoped>
.search{
    text-align: start;
    margin-top: 10px;
    margin-left: 80px;
    width: 709px;
}
input{
    border-radius: 16px;
}

@media only screen and (max-width: 792px){
    .search{
        text-align: center;
        margin-top: 10px;
        width: 100%;
        padding: 10px;
        margin-left: 0;
    }
    
}

</style>