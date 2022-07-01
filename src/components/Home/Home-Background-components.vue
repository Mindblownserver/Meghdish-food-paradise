<template>
  <section class="hero row container">
    <div>
      <h1>Creative recipes to satisfy your appatite</h1>
      <p>Our job is to broaden your sphere of knowledge in terms of food from diverse cultures.</p>
      <a href="/recipes" class="btn pr "><img src="../../assets/cutlry.svg" style="filter: invert(100%);" height="20" width="20" alt=""> | Browse recipes</a>
      <a href="/tricks" class="btn btn-outline-danger"><i class="fa fa-magic" aria-hidden="true"></i> | See tricks</a>
    </div>
    <div class="row">
      <img src="../../assets/home_blob.svg" alt="" height="550" width="470">
    </div>
  </section>
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
.hero a{
  font-weight: 700;
  font-size: 20px;
  padding: 0.3em 1em;
}
.img{
  width: 100%;
  object-fit: cover;
  
}
.btn{
  border-radius: 41px;
  margin-bottom: 20px;
}
.pr{
  background-image: linear-gradient(to right, rgba(248, 117, 55, 1), var(--main-web-color));
  color: white;
  margin-right: 24px;
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
