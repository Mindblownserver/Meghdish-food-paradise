<template>
    <div class= "banner-area">
        <div class="content-area">
            <div class="content">
            <h1 class="title">About us</h1>
            <p class="caption">Feeding you with recepies worldwide</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AboutBackgroundComponents',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  .banner-area{
    width: 100%;
    height: 67vh;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)) ,url(../../assets/about-us-bg.jpg);
    background-size: cover;
  }
  .content-area{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content{
    text-align: center;
  }
  .content h1{
    font-size: 70px;
    text-decoration: underline;
    color: rgb(247, 253, 248);
  }
  .content p{
    font-size: 30px;
    margin: 20px;
    color: rgb(218, 218, 218);
  }

</style>
