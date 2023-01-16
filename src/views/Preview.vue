<template>
		<main class="page">
			<div class="recipe-page">
				<Transition mode="in-out" appear name="slide-fade">
					<section  class="recipe-hero card">
						<img
							:src="imgUrl"
							alt="insert picture"
							class="img recipe-hero-img"/>
						<article class="recipe-info" style="text-align:start;">
							<h2>{{title}}</h2>
							<Chip :text="FdTags[0]" :BG="FdTags[1]"/>
							<p v-html="compiledMarkdown" class="markdown"></p>
							<div class="recipe-icons">
								<article>
									<i class="far fa-star"></i>
									<h5>rating</h5>
									<p>0</p>
								</article>
								<article>
									<i class="far fa-clock"></i>
									<h5>prep. time</h5>
									<p>{{cookingTime}} min.</p>
								</article>
								<article>
									<i class="far fa-smile"></i>
									<h5>difficulty</h5>
									<p :style="{color: difficultyColor}">{{difficulty}}</p>
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
						<div class="single-instruction" v-for="(instruction, index) in instructions" :key="index">
							<header>
								<p>step {{index+1}}</p>
								<div></div>
							</header>
							<p>{{instruction}}</p>
						</div>
						<!-- end of single instruction -->
					</article>
					</Transition>
					<Transition name="ToLeft" appear mode="in-out">
					<article class="second-column card">
						<div>
							<h4>Ingredients</h4>
							<div v-for="(ingridient,index) in ingridients" :key="index">
								<p class="single-ingredient">{{ingridient}}</p>
							</div>
						</div>
					</article>
					</Transition>
				</section>
				<button type="button" class="btn btn-outline-success" @click="AddRecipe">Submit it as a recipe</button>
				<button type="button" class="btn btn-outline-primary" @click="AddTrick">Submit it as a trick</button>
				<router-link to="/create"><button type="button" class="btn btn-outline-warning">Problem? return to create section!</button></router-link>
			</div>
		</main>
		
</template>

<script>
import marked from "marked"
import db from "../fb.js"
import Chip from "@/components/chip.vue"
export default {
		name: "Preview",
		el: '#lol',
		components: {
			Chip
		},
		data() {
				return {
						description: "",
						title:"",
						imgUrl: "",
						cookingTime: 15,
						difficulty: "",
						difficultyColor: "",
						instructions: [],
						ingridients: [],
						FdTags: []
				}
		},
		
		created(){
				const getMockup =db.collection('preview').doc('Mockup')
				getMockup.get().then(doc => {
						console.log(doc.data())
						// reinitializing variables the hard way
						this.title =  doc.data().title
						this.imgUrl =  doc.data().image
						this.description = doc.data().description
						this.cookingTime = doc.data().cookingTime
						this.difficulty = doc.data().difficulty[0]
						this.difficultyColor = doc.data().difficulty[1]
						this.instructions = doc.data().instructions
						this.ingridients = doc.data().ingridients
						this.FdTags = doc.data().Tag

				})
		},
		computed: { // In computed, the methode compiledMarkdown occures whenever description is changed!
				compiledMarkdown: function() {
						return marked(this.description);
				}
		},
		methods:{
			AddRecipe(){
				const DBList = db.collection("Food recipies").doc("Food list").collection('food').doc(this.title)
				const recipe = {
					"title": this.title,
					"image": this.imgUrl,
					"Tag": [this.FdTags[0],this.FdTags[1]],
					"desc": this.description,
					"Time": this.cookingTime,
					"difficulty": [this.difficulty,this.difficultyColor],
					"stars": 0,
					"instructions": this.instructions,
					"ingridients": this.ingridients
					}
				DBList.set(recipe)
			},
			AddTrick(){

			}
		}
}
</script>

<style scoped>
*,
::after,
::before {
	box-sizing: border-box;
}
.btn{
	margin-left: 10px;
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

</style>