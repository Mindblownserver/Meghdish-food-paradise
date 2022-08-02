<template>
<!--I found this cardd online..Thank you Codev Land...Link: https://codepen.io/codev_land/pen/yLXeyWX--->
    <div class="containerr">
        <div class="cardd">
            <div class="slide slide1">
                <div class="content">
                    <div class="icon">
                        <i :class="image"></i>
                    </div>
                  </div>
            </div>
            <div class="slide slide2">
                <div class="content">
                    <h3>{{title}}</h3>
                    <p>{{description}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"AwesomeHovercard",
    props:{
        title:{
            type:String,
            default:'title'
        },
        description:{
            type: String,
            default:"Plausible and logical description of the following title"
        },
        image:{
            type:String,
            default:"Icon"
        }
    }
}
</script>
<style scoped>
.containerr{
    margin: 0;
    padding: 0; 
    display: flex;
    align-items: center;
    justify-content: center;
}

.containerr .cardd .icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--main-web-color);
}

.containerr .cardd .icon .fa {
    position: absolute;
    top: 50%;
    left: 50%;
    background: var(--main-web-color);
    transform: translate(-50%, -50%);
    font-size: 80px;
    color: #fff;
}

.containerr .cardd .slide {
    width: 300px;
    height: 200px;
    transition: 0.5s;
}

.containerr .cardd .slide.slide1 {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transition: .7s;
    height: 250px;
    transform: translateY(100px);
}

.containerr .cardd:hover .slide.slide1{
    transform: translateY(0px);
}

.containerr .cardd .slide.slide2 {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    height: 250px;
    transition: .8s;
    transform: translateY(-150px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}

.containerr .cardd:hover .slide.slide2{
    transform: translateY(0);
}

.containerr .cardd .slide.slide2::after{
    content: "";
    position: absolute;
    width: 30px;
    height: 4px;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--main-web-color);
}

 p {
    margin: 0;
    padding: 0;
    text-align: center;
    color: #414141;
}
.containerr .cardd .slide.slide2 .content h3 {
    margin: 0 0 10px 0;
    padding: 0;
    font-size: 24px;
    text-align: center;
    color: #414141;
} 
</style>