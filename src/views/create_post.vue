<template>
    <div v-if="accessToken">
        <main class="page">
      <div class="recipe-page">
        <Transition mode="in-out" appear name="slide-fade">
          <section  class="recipe-hero card">
            <input type="text" class="form-control" aria-label="Large" placeholder="imageURL..." v-model="imgUrl" aria-describedby="inputGroup-sizing-sm">
            <article class="recipe-info" style="text-align:start;">
              <div class="input-group input-group-lg">
                <input type="text" class="form-control" aria-label="Large" placeholder="Title..." v-model="title" aria-describedby="inputGroup-sizing-sm">
                
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="0" value="Bread">
              <label class="form-check-label" for="inlineRadio1">Bread</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="1" value="Juice">
              <label class="form-check-label" for="inlineRadio2">Juice</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="2" value="Meat">
              <label class="form-check-label" for="inlineRadio1">Meat</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="3" value="Pasta">
              <label class="form-check-label" for="inlineRadio2">Pasta</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="4" value="Sauces">
              <label class="form-check-label" for="inlineRadio2">Sauces</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="5" value="Vegetarian">
              <label class="form-check-label" for="inlineRadio1">Vegetarian</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="6" value="Breakfast">
              <label class="form-check-label" for="inlineRadio2">Breakfast</label>
            </div>
            <div class="input-group">
                <textarea class="form-control p pre-markdown" v-model="description" placeholder="Description..." aria-label="With textarea"></textarea>
                
            </div>
              <div class="recipe-icons">
                <article>
                  <i class="far fa-star"></i>
                  <h5>rating</h5>
                  <p>0</p>
                </article>
                <article>
                  <i class="far fa-clock"></i>
                  <h5>prep. time</h5>
                  <p><input type="number"   max="999" min="0" class="form-control" v-model="cookingTime" style="max-width:100px">min.</p>
                </article>
                <article class="diff">
                  <i class="far fa-smile"></i>
                  <h5>difficulty</h5>
                <select id="inputState" v-model="difficulty" class="form-control">
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
            <div class="single-instruction instru">
              <header>
                <p>step 1</p>
                <div></div>
              </header>
              <div class="input-group">
                <textarea class="form-control p" aria-label="With textarea"></textarea>
              </div>
            </div>
            <!-- end of single instruction -->
            <button type="button" class="btn btn-outline-info" @click="addStep">+</button>
            <button type="button" class="btn btn-outline-danger" @click="removeStep">-</button>
          </article>
          </Transition>
          <Transition name="ToLeft" appear mode="in-out">
          <article class="second-column card">
            <div>
              <h4>Ingredients</h4>
              <div id="ingri">
                <div class="input-group mb-3">
                      <input type="text" class="form-control single-ingredient" aria-label="Default" aria-describedby="inputGroup-sizing-default">
                </div>
              </div>
              <button type="button" class="btn btn-outline-info" @click="addIngridient">+</button>
              <button type="button" class="btn btn-outline-danger" @click="removeIngridient">-</button>
            </div>
          </article>
          </Transition>
        </section>
      </div>
    </main>
    <router-link to="/create/preview"><button type="button" class="btn btn-outline-info" @click="preview">Preview</button></router-link>
    </div>
    <div v-else>
        <p>illigal</p>
    </div>
</template>

<script>
import db from "../fb.js"
export default {
    name: "Create",
    props: ["marked"],
    data() {
        return {
            accessToken: true,
            description: "",
            imgUrl: "",
            title:"",
            cookingTime: 15,
            difficulty: "",
            FdTag: ""
        }
    },
    methods :{
      addIngridient(){
        let newField = document.createElement("input")
        let ingri = document.querySelector("#ingri")
        newField.setAttribute("type","text")
        newField.setAttribute("class", "form-control single-ingredient mb-3 ")
        newField.setAttribute("aria-describedby", "inputGroup-sizing-default")
        ingri.appendChild(newField)
      },
      removeIngridient(){
        let ingri = document.querySelector("#ingri")
        let inputTags = ingri.getElementsByTagName("input")
        if (inputTags.length>1){
          ingri.removeChild(inputTags[inputTags.length -1])
        }
      },
      addStep(){
        let instru = document.querySelector(".instru")
        let headers = instru.getElementsByTagName("header")
        let stepHeader = document.createElement("header")
        let newStep = document.createElement("textarea")
        newStep.setAttribute("class", "form-control")
        newStep.setAttribute("aria-label", "With textarea")
        stepHeader.innerHTML = `<p>step ${headers.length+1}</p><div></div>`
        instru.appendChild(stepHeader)
        instru.appendChild(newStep)
      },
      removeStep(){
        let instru = document.querySelector(".instru")
        let headers = instru.getElementsByTagName("header")
        let steps = instru.getElementsByClassName("form-control")
        if (headers.length>1) {
          instru.removeChild(headers[headers.length -1])
          instru.removeChild(steps[steps.length -1])
        }
      },
      preview(){
        // Get ingridientElements
        let food = db.collection('Food recipies').doc('Food list').collection('food');
        let ingridientElements = document.querySelector('#ingri').getElementsByTagName("input")
        let ingridients = []
        let snapshot = food.where("title","==",this.title).get()
        for(let i = 0; i< ingridientElements.length;i++){
          ingridients.push(ingridientElements[i].value)
        }
        // Get instructionElements
        let instructionElements = document.querySelector('.instru').getElementsByTagName("textarea")
        let instructions = []
        for(let i = 0; i< instructionElements.length;i++){
          instructions.push(instructionElements[i].value)
        }
        // console.log(instructions, ingridients)
        // get difficulty color
        let difficultyColor;
        switch (this.difficulty) {
          case "Easy":
            difficultyColor="Forestgreen";
            break;
          case "Medium":
            difficultyColor="Gold";
            break;
          case "Hard":
            difficultyColor="Crimson";
            break;
          default:
            break;
        } 
        // get Tag & its correspondent color 
        let FdTagsColors = ["#B9721F","#6A2FE8","#DC1C1C","#EC994B","#d9c007","#0D8F21","#1BC8C8"]
        let radios = document.getElementsByClassName("form-check-input")
        let i = 0
        while (i<radios.length) {
          if (radios[i].checked){
            break;
          }
          else{
            i++
          }
        }
        // Create THE object
        const recipe = {
        "title": this.title,
        "image": this.imgUrl,
        "Tag": [radios[i].value,FdTagsColors[i]],
        "description": this.description,
        "cookingTime": this.cookingTime,
        "difficulty": [this.difficulty,difficultyColor],
        "ingridients": ingridients,
        "instructions": instructions
        }
        // Upload to firebase preview collection
        if(snapshot.empty){
          db.collection('preview').doc('Mockup').set(recipe);
          }
        else{
          alert("You can't post something that has the same title as another recipe!");
          }
        
      },
    }
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


.markdown{
  display: none;
}
</style>