<template>
    <div class="card mt-3">
        <div class="product-1 align-items-center p-2 text-center">
            <img :src="recepy.img" alt="Meghdish Food Paradise" class="rounded" width="230" height="200">
            <h5>{{recepy.title}}</h5>
            <h6 style="display: none;">{{recepy.id}}</h6>
            <div class="mt-3 info">
                <span class="text1 d-block">{{recepy.desc}}</span>
                <div class="difficulty mt-3 align-items-center">
                    <span>Difficulty:  </span>
                    <span :style="{color: recepy.difficulty[1]}">
                        {{recepy.difficulty[0]}}
                    </span>
                </div>
            </div>
        </div>
        <button type="button" class="btn btn-success">Learn more !</button>
    </div>
</template>

<script>
export default {
    name: "SneakPeakRecepy",
    props: {
        recepy: Object
    },
    

}
</script>

<style scoped>

.card{
    border: none;
    display: flex;
    margin-top: 50px !important;
    outline: none;
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
}
.info{
    color: rgb(112, 108, 108);
    line-height: 17px;
}

.difficulty {
    color: black;
}

</style>