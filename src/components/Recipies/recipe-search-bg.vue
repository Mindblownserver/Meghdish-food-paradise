<template>
  <section class="hero row container">
    <div>
      <h1>Browse recipes by difficulty, rating and filter</h1>
      <p>We also provide approximate time you need to prepare your meal.</p>
    </div>
    <div class="row">
      <img src="../../assets/recipe_blob.svg" alt="" height="550" width="470">
    </div>
  </section>
</template>

<script>
export default {
  name: 'RecipeBackgroundComponents',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row{
  display: flex;
  
}
h1,p{
  margin: 0;
}
.container{
  max-width: 90%;
  margin: 0 auto;
  text-align: start;
  transition: 0.4s;
}
.hero{
  gap: 2em;
  flex-wrap: wrap-reverse;
  align-items: center;
  min-height: calc(100vh - 93.6px);
}
.hero>*{
  flex: 1 1 25em;
}
.hero h1{
  font-weight: 700;
  font-size: clamp(40px,5vw, 70px);
  line-height: 1;
}
.hero p{
  font-weight: 500;
  font-size: 30px;
  padding: 1em 0;
}

.img{
  width: 100%;
  object-fit: cover;
  
}


div.row{
  margin-left: -100px;
  justify-content: flex-end;
}
/*
@media  screen and (max-width < 1157.50px) {

}
 */
</style>
