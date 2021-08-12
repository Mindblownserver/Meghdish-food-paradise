<template>
  <div class= "banner-area">
    <div class="content-area">
      <div class="content">
        <h1 class="title">Meghdish Food Paradise</h1>
        <p class="caption">Creative recipies to satisfy your appatite</p>
        <router-link v-bind:to="'/recipies'"><button type="button" class="btn btn-success">Browse Recepies</button></router-link>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'BackgroundComponents',
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .banner-area{
    width: 100%;
    height: 67vh;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)) ,url(../../assets/FoodBackground.jpg);
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
    font-size: 10vw;
    padding: 15px;
    margin: 5px;
    outline: white solid 2px;
    color: rgb(247, 253, 248);
  }
  .content p{
    font-size: 5vw;
    margin: 20px;
    color: rgb(168, 158, 158);
  }

@media screen and (min-width: 1300px) {
  .content h1{
    font-size: 70px;
    padding: 10px;
  }
  .content p{
    font-size: 30px;
  }
}

  .content button{
    border:none;
    outline: none;
    padding: 15px 50px;
    margin-top: 15px;
    border-radius: 5px;
  }
</style>
