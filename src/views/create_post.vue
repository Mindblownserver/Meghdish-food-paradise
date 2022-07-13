<template>
    <div v-if="accessToken">
        <main class="page">
      <div class="recipe-page">
        <Transition mode="in-out" appear name="slide-fade">
          <section  class="recipe-hero card">
            <img
              src=""
              alt="insert picture"
              class="img recipe-hero-img"/>
            <article class="recipe-info" style="text-align:start;">
              <div class="input-group input-group-lg">
                <input type="text" class="form-control" aria-label="Large" placeholder="Title..." v-model="title" aria-describedby="inputGroup-sizing-sm">
            </div>      
            <div class="input-group">
                <textarea class="form-control p" v-model="description" placeholder="Description..." aria-label="With textarea"></textarea>
            </div>
              <div class="recipe-icons">
                <article>
                  <i class="far fa-star"></i>
                  <h5>rating</h5>
                  <p>0</p>
                </article>
                <article>
                  <i class="far fa-clock"></i>
                  <h5>cook time</h5>
                  <p><input type="number" style="max-width:100px"> min.</p>
                </article>
                <article class="diff">
                  <i class="far fa-smile"></i>
                  <h5>difficulty</h5>
                <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                </select>
                </article>
              </div>
            </article>
          </section>
        </Transition>
        <!-- content -->
        <section class="recipe-content">
          <Transition name="ToRight" appear mode="in-out">
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
          </Transition>
          <Transition name="ToLeft" appear mode="in-out">
          <article class="second-column card">
            <div>
              <h4>Ingredients</h4>
              <div class="input-group mb-3">
                    <input type="text" class="form-control single-ingredient" aria-label="Default" aria-describedby="inputGroup-sizing-default">
                </div>
            </div>
          </article>
          </Transition>
        </section>
      </div>
    </main>
    </div>
    <div v-else>
        <p>illigal</p>
    </div>
</template>

<script>
import marked from "marked"
export default {
    name: "Create",
    el: '#lol',
    props: ["marked"],
    data() {
        return {
            accessToken: true,
            input: "# hello",
            description: "",
            title:"",
        }
    },
    computed: {
        compiledMarkdown: function() {
            return marked(this.input);
        }
    },
}
</script>

<style>

.btn{
    margin: 30px;
}
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
  margin-top: 30px;
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
.recipe-icons .p {
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
.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-enter-to{
  transform: translateY(0);
  opacity: 1;
}

.slide-fade-enter-from {
  transform: translateY(-60px);
  opacity: 0;
}

.ToRight-enter-active {
  transition: all 0.5s ease;
  transition-delay: 1s;
}

.ToRight-enter-to{
  transform: translateX(0);
  opacity: 1;
}

.ToRight-enter-from {
  transform: translateX(-60px);
  opacity: 0;
}

.ToLeft-enter-active {
  transition: all 0.5s ease;
  transition-delay: 2s;
}

.ToLeft-enter-to{
  transform: translateX(0);
  opacity: 1;
}

.ToLeft-enter-from {
  transform: translateX(60px);
  opacity: 0;
}
.diff{
    justify-content: center;
    align-items: center;
}
select{
    max-width: 100px;
}
</style>