<template>
    <div class="card">
        <div class="title">
            <h1 class="mini_title Title"> Spaghetti with meat balls</h1>
            <span class="c"><i class="fas fa-star "></i>
            <i class="fas fa-star "></i>
            <i class="fas fa-star "></i>
            <i class="fas fa-star "></i>
            <i class="fas fa-star "></i></span>
            <h6 >Some roughly short description of recipe like time and food.....etc</h6>
            <p class="c">55min</p>
            <p>Pastas</p>
            <p class="text c">Posted 3 years ago</p>
            <img src="" alt="insert photo here">
            <img src="" alt="insert photo here">
            <img src="" alt="insert photo here">
        </div>
        <h2></h2>
        <div class="block">
            <h4 class="mini_title">Ingredients</h4>
            <div class="ingredients" style="margin-top: 40px">
                <div class="spacer">
                    <span class="ing_icon" ><i class="fas fa-utensils"></i></span>
                    <span>1 tablespoon sugar</span>
                </div>
                <div class="spacer">
                    <span class="ing_icon" ><i class="fas fa-utensils"></i></span>
                    <span>1 tablespoon sugar</span>
                </div>
                <div class="spacer">
                    <span class="ing_icon" ><i class="fas fa-utensils"></i></span>
                    <span>1 tablespoon sugar</span>
                </div>
                <div class="spacer">
                    <span class="ing_icon" ><i class="fas fa-utensils"></i></span>
                    <span>1 tablespoon sugar</span>
                </div>
                <div class="spacer">
                    <span class="ing_icon" ><i class="fas fa-utensils"></i></span>
                    <span>1 tablespoon sugar</span>
                </div>
                <div class="spacer">
                    <span class="ing_icon" ><i class="fas fa-utensils"></i></span>
                    <span>1 tablespoon sugar</span>
                </div>
            </div>
        </div>
        <h2></h2>
        <div class="block">
            <h4 class="mini_title">Steps</h4>
            <div class="ingredients" style="margin-top: 40px">
                <div class="step">
                    <div class="spacer" >
                        <span class="ing_icon" ><i class="far fa-check-circle"></i></span>
                        <span class="mini_mini_title" >Step 1</span>
                    </div>
                    <h6 style="margin: 20px 0 40px 0">something about step 1</h6>
                </div>
                <div class="step">
                    <div class="spacer" >
                        <span class="ing_icon" ><i class="far fa-check-circle"></i></span>
                        <span class="mini_mini_title" >Step 1</span>
                    </div>
                    <h6 style="margin: 20px 0 40px 0">something about step 1</h6>
                </div>
                <div class="step">
                    <div class="spacer" >
                        <span class="ing_icon" ><i class="far fa-check-circle"></i></span>
                        <span class="mini_mini_title" >Step 1</span>
                    </div>
                    <h6 style="margin: 20px 0 40px 0">something about step 1</h6>
                </div>
                <div class="step">
                    <div class="spacer" >
                        <span class="ing_icon" ><i class="far fa-check-circle"></i></span>
                        <span class="mini_mini_title" >Step 1</span>
                    </div>
                    <h6 style="margin: 20px 0 40px 0">something about step 1</h6>
                </div>
                <div class="step">
                    <div class="spacer" >
                        <span class="ing_icon" ><i class="far fa-check-circle"></i></span>
                        <span class="mini_mini_title" >Step 1</span>
                    </div>
                    <h6 style="margin: 20px 0 40px 0">something about step 1</h6>
                </div>
            </div>
            <h2></h2>
            <div class="block">
                <h4 class="mini_title">Take note!</h4>
                <h6>Some text that contains the point of view of the cook</h6>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Uppervalue'
}
</script>

<style scoped>
.mini_title{
    font-weight: bolder;
}
.mini_mini_title{
    font-weight: bold;
}

div.spacer span, h6{
    font-size: 20px;
}
.card{
    display: flex;
    width: 50rem;
    text-align: start;
    background-color: white;
    margin-left: 30px;
    margin-top: 10px;
    margin-bottom: 30px;
    padding: 30px 40px;
    border-radius: 10px;
    box-shadow: 2px 3px 5px rgb(187, 187, 187);
}
.text{
    color: rgb(104, 104, 104);
}
.fas, .far{
    color: #fc9400;
}
.c{
    margin-bottom: -3px;
}

h2{
    width: 100%; 
    text-align: center; 
    color: silver;
    border-bottom: 1px solid silver; 
    line-height: 0.1em;
    margin: 30px 0 0; 
}
.block{
    margin-top: 30px;
}

.ing_icon{
    margin-right: 20px;
}
.spacer{
    margin-top: 15px;
}

@media only screen and (max-width: 588px){
    .Title{
        font-size: 7vw;
    }
}
</style>