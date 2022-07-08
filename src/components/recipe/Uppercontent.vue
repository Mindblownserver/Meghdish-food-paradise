<template>
    <main class="page">
      <div class="recipe-page">
        <section class="recipe-hero card">
          <img
            src=""
            alt="insert picture"
            class="img recipe-hero-img"
          />
          <article class="recipe-info" style="text-align:start;">
            <h2>Banana Pancakes</h2>
            <p>
              Shabby chic humblebrag banh mi bushwick, banjo kale chips
              meggings. Cred selfies sartorial, cloud bread disrupt blue bottle
              seitan. Dreamcatcher tousled bitters, health goth vegan venmo
              whatever street art lyft shabby chic pitchfork beard. Drinking
              vinegar poke tbh, iPhone coloring book polaroid truffaut tousled
              ramps pug trust fund letterpress. Portland four loko austin
              chicharrones bitters single-origin coffee. Leggings letterpress
              occupy pour-over.
            </p>
            <div class="recipe-icons">
              <article>
                <i class="far fa-star"></i>
                <h5>rating</h5>
                <p>4.9</p>
              </article>
              <article>
                <i class="far fa-clock"></i>
                <h5>cook time</h5>
                <p>15 min.</p>
              </article>
              <article>
                <i class="far fa-smile"></i>
                <h5>difficulty</h5>
                <p>easy</p>
              </article>
            </div>
          </article>
        </section>
        <!-- content -->
        <section class="recipe-content">
          <article class="card">
            <h4>Instructions</h4>
            <!-- single instruction -->
            <div class="single-instruction">
              <header>
                <p>step 1</p>
                <div></div>
              </header>
              <p>
                I'm baby mustache man braid fingerstache small batch venmo
                succulents shoreditch.
              </p>
            </div>
            <!-- end of single instruction -->
            <!-- single instruction -->
            <div class="single-instruction">
              <header>
                <p>step 2</p>
                <div></div>
              </header>
              <p>
                Pabst pitchfork you probably haven't heard of them, asymmetrical
                seitan tousled succulents wolf banh mi man bun bespoke selfies
                freegan ethical hexagon.
              </p>
            </div>

            <div class="single-instruction">
              <header>
                <p>step 3</p>
                <div></div>
              </header>
              <p>
                Polaroid iPhone bitters chambray. Cornhole swag kombucha
                live-edge.
              </p>
            </div>
            <!-- end of single instruction -->
          </article>
          <article class="second-column card">
            <div>
              <h4>Ingredients</h4>
              <p class="single-ingredient">1 1/2 cups dry pancake mix</p>
              <p class="single-ingredient">1/2 cup flax seed meal</p>
              <p class="single-ingredient">1 cup skim milk</p>
            </div>
          </article>
        </section>
      </div>
    </main>
    
</template>

<script>
export default {
    name: 'Uppervalue'
}
</script>

<style scoped>
*,
::after,
::before {
  box-sizing: border-box;
}

:root {
  --borderRadius: 0.25rem;
  --letterSpacing: 1px;
  --transition: 0.3s ease-in-out all;
  --max-width: 1120px;
  --fixed-width: 600px;

}

a {
  text-decoration: none;
}
ul {
  list-style-type: none;
  padding: 0;
}

.img {
  width: 100%;
  display: block;
  object-fit: cover;
}

/*
=============== 
Page
===============
*/

.page {
  width: 90vw;
  max-width: var(--max-width);
  margin: 0 auto;
}
.page {
  padding-top: 2rem;
  min-height: calc(100vh - (6rem + 4rem));
}


/*
=============== 
Recipe Template
===============
*/

.recipe-hero {
  display: grid;
  gap: 3rem;
}

.recipe-hero-img {
  height: 300px;
  border-radius: var(--borderRadius);
}

.recipe-icons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 2rem 0;
  text-align: center;
}
.recipe-icons i {
  font-size: 1.5rem;
  color: var(--main-web-color);
}
.recipe-icons h5,
.recipe-icons p {
  margin-bottom: 0;
  font-size: 0.85em;
}


@media screen and (min-width: 992px) {
  .recipe-hero {
    grid-template-columns: 4fr 5fr;
    align-items: center;
  }
}
.recipe-content {
  padding: 3rem 0;
  display: grid;
  gap: 2rem 5rem;
}
@media screen and (min-width: 992px) {
  .recipe-content {
    grid-template-columns: 2fr 1fr;
  }
}
.single-instruction header {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;
  align-items: center;
}
.single-instruction header p {
  text-transform: uppercase;
  font-weight: 600;
  color: var(--main-web-color);
  margin-bottom: 0;
}
.single-instruction > p {
  margin-top: 10px;
  text-align: start;
}

.single-instruction header div {
  height: 2px;
  background: silver;
}

.second-column {
  display: grid;
  row-gap: 2rem;
}

.single-ingredient {
  border-bottom: 2px solid silver;
  text-align: start;
  padding-bottom: 0.75rem;
}

.card{
    background-color: white;
    padding: 30px 40px;
    border-radius: 10px;
    box-shadow: 2px 3px 5px rgb(187, 187, 187);
}

</style>