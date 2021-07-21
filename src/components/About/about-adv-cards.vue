<template>
    <div id="team">
        <div class="container my-3 py-5 text-center">
            <div class="row justify-content-center">
                <div class="col-lg-3 col-md-4" >
                    <div class="card mt-3">
                        <div class="adva align-items-center p-2 justify-content-center text-center">
                            <div class="img-fluid bg rounded-circle" >
                                <img src="https://cdn0.iconfinder.com/data/icons/octicons/1024/flame-512.png" alt="MFP" class="img-fluid rounded-circle" width="100">
                            </div>
                            <h4 class="title">New</h4>
                            <p>The options are never-ending. Basically, the whole World is your cookbook. We promise to provide you hundreds and thousands of recipes online, which gives you an advantage of trying out new recipes and improvising without buying expensive cookbooks.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4" >
                    <div class="card mt-3">
                        <div class="adva align-items-center p-2 text-center">
                            <div class="img-fluid bg rounded-circle" >
                                <img src="https://cdn2.iconfinder.com/data/icons/heart-feeling-outline/64/23-tasty-512.png" alt="MFP" class="img-fluid rounded-circle " width="100">
                            </div>
                            <h4 class="title">Healthy and delecious</h4>
                            <p>Many commercially prepared foods are high in fat, salt, and sugar. When we prepare our food, we know exactly which ingredients and how much of each are going into our food.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4" >
                    <div class="card mt-3">
                        <div class="adva align-items-center p-2 text-center">
                            <div class="img-fluid bg rounded-circle" >
                                <img src="https://s3.amazonaws.com/iconbros/icons/icon_pngs/000/000/167/original/money-bag.png?1510083180" alt="MFP" class="img-fluid rounded-circle " width="100">
                            </div>
                            <h4 class="title">Saves money</h4>
                            <p>Eating homemade foods is usually much cheaper than eating at a restaurant or buying processed foods from the market.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>


<script>
export default {
    name: "AboutAdvantagesCards"
}
</script>

<style scoped>

#team{
    margin-top: -140px !important;
}

#team .bg{
    width: 100px;
    height: 100px;
    display: contents;
}

#team img{
    margin-top: -50px;
    background: rgb(255, 153, 0);
    border: 20px solid rgb(255, 153, 0);

}
#team p{
    padding-top: 20px;
    font-weight: 500;
    color: #333;
    text-align: center;
}

.adva{
    --padding: 1.6rem;
    padding: var(--padding);
    justify-content: center;
    position: relative;
    
}

@media(hover){
    .adva{
        transition: transform 500ms ease;
    }
}

#team .title{
    font-size: 24px;
    position: relative;
    font-weight: bold;
    color: black;
    padding-top: 20px;

}
#team .card{
    border-radius: 15px;
    height: 350px;
    margin-bottom: 100px;
    transition: transform 500ms ease;
}
#team .card:hover, #team .card:focus-within{
    transform: scale(1.1);
    
}

.card:hover .title::after{
    transform: scale(1);
    
}

.title::after{
    content: "";
    transform-origin: left;
    position: absolute;
    left: calc(var(--padding) - 34px);
    bottom: 0;
    height: 3px;
    width: calc(96% + var(--padding));
    background: orange;
    transform: scaleX(0);
    transition: transform 500ms ease;
}
</style>