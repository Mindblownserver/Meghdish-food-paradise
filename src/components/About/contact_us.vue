<template>
<!--Contact us component was made thanks to this codepen https://codepen.io/onediv/pen/AWGZEe  -->
<section id="contact">
    <div class="sectionheader">	<h1>Contact Us</h1></div>
    <article>
        <p>Ever experienced a bug or any sort of inconvenience while surfing for a recipe? Let us know by sending an email to us..Don't worry, we'll never share your email with anyone else.</p>
        <label for="checkcontact" class="contactbutton"><i class="fa-solid icon fa-envelope"></i></label><input id="checkcontact" type="checkbox">
        <form class="contactform">
            <p class="input_wrapper"><input type="text" name="contact_nom" value=""  id ="contact_nom" placeholder="Username.."><i class="fa-solid i fa-user"></i></p>
            <p class="input_wrapper"><input type="text" name="contact_email" value=""  id ="contact_email" placeholder="Email.."><i class="fa-solid i fa-envelope"></i></p>
            <p class="input_wrapper"><input type="text" name="contact_sujet" value=""  id ="contact_sujet" placeholder="Subject (optional)"><i class="fa-solid i fa-circle-info"></i></p>
            <p class="textarea_wrapper"><textarea name="contact_message" id="contact_message" placeholder="message.."></textarea></p>
            <p class="submit_wrapper"><input type="button" value="Submit"></p>			
        </form>
    </article>
</section>
</template>

<script>
export default{
    name:"ContactUs"
}
</script>
<style scoped>
#contact {
width: 500px;
margin:2em auto;
background:white;
position: relative;
}
#contact::after {
content: "";
display: block;
height: 30px;
width: 90%;
left: 5%;
bottom: 0;
position: absolute;
-webkit-box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.19);
box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.19);
border-radius: 100%;
z-index: -1;
}
#contact article {
  padding: 1em;
}
#contact h1 {
background: var(--main-web-color);
font-size: 1.75em;
padding: 0.6em 0 0.6em 0.4em;
color: white;
text-shadow: 0 0.06em 0 #424242;
position: relative;
}
.contactbutton {
background: var(--main-web-color);
-webkit-box-shadow: 1px 1px 0 0 #ffffff,2px 2px 0 0 #ffffff,3px 3px 0 0 #ffffff;
box-shadow: 1px 1px 0 0 #ffffff,2px 2px 0 0 #ffffff,3px 3px 0 0 #ffffff;
text-align: center;
align-items: center;
justify-content: center;
display: block;
width: 100%;
height: 50px;
margin-top: 20px;
margin-bottom: 2px;
cursor: pointer;
}
.contactbutton:hover {
-webkit-box-shadow: 1px 1px 0 0 #ffffff,0px 0px 0 0 #ffffff,0px 0px 0 0 #ffffff;
box-shadow: 1px 1px 0 0 #ffffff,0px 0px 0 0 #ffffff,0px 0px 0 0 #ffffff;
margin-top: 22px;
margin-left: 2px;
margin-bottom: 0px;
}


#checkcontact{
position: absolute;
left: -9999px;
}
.contactform {
overflow: hidden;
max-height: 0px;
-webkit-transition: all linear 1s;
-moz-transition: all linear 1s;
-o-transition: all linear 1s;
-ms-transition: all linear 1s;
transition: all linear 1s;
}
#checkcontact:checked + .contactform {
max-height: 1000px;
}
.input_wrapper {
position: relative;
}
.textarea_wrapper textarea {
margin-top: 20px;
display: block;
width: 100%;
background: white;
border: 1px solid #DADADA;
box-shadow: 0 0 1px 0 #E4E4E4;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
padding: 1em;
-webkit-transition: all 250ms ease;
-moz-transition: all 250ms ease;
-ms-transition: all 250ms ease;
-o-transition: all 250ms ease;
transition: all 250ms ease;
color: #5E5E5E;
}
.input_wrapper input[type="text"] {
margin-top: 1em;
display: block;
width: 100%;
background: white;
border: 1px solid #DADADA;
box-shadow: 0 0 1px 0 #E4E4E4;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
padding: 1em;
-webkit-transition: all 250ms ease;
-moz-transition: all 250ms ease;
-ms-transition: all 250ms ease;
-o-transition: all 250ms ease;
transition: all 250ms ease;
color: #5E5E5E;
text-indent: 15%;
}
.input_wrapper input[type="text"]:focus {
box-shadow: inset 2px 2px 5px 0 #DADADA;
outline: none;
text-indent: 0;
}
.input_wrapper .i {
position: absolute;
font-size: 2em;
left: 0;
padding-top: 13px;
top: 0;
height: 100%;
background: var(--main-web-color);
color: white;
box-sizing: border-box;
width: 15%;
text-align: center;
-webkit-transition: all 250ms ease;
-moz-transition: all 250ms ease;
-ms-transition: all 250ms ease;
-o-transition: all 250ms ease;
transition: all 250ms ease;
}
.input_wrapper input[type="text"]:focus + .i {
left: 85%;
}
.textarea_wrapper textarea {
margin-top: 20px;
display: block;
width: 100%;
  min-height:150px;
background: white;
border: 1px solid #DADADA;
box-shadow: 0 0 1px 0 #E4E4E4;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
padding: 1em;
-webkit-transition: all 250ms ease;
-moz-transition: all 250ms ease;
-ms-transition: all 250ms ease;
-o-transition: all 250ms ease;
transition: all 250ms ease;
color: #5E5E5E;
}
.textarea_wrapper textarea:focus {
box-shadow: inset 2px 2px 5px 0 #DADADA;
outline: none;
}
.submit_wrapper {
text-align: center;
}
.submit_wrapper input {
text-align: center;
display: inline-block;
width: 40%;
height: 50px;
margin-top: 1em;
margin-bottom: 6px;
cursor: pointer;
background: var(--main-web-color);
color: white;
font-size: 1em;
border: none;
-webkit-box-shadow: 1px 1px 0 0 #ffffff,2px 2px 0 0 #ffffff,3px 3px 0 0 #ffffff;
box-shadow: 1px 1px 0 0 #ffffff,2px 2px 0 0 #ffffff,3px 3px 0 0 #ffffff;
-webkit-appearance: none;
  -webkit-transition: all 250ms ease;
-moz-transition: all 250ms ease;
-ms-transition: all 250ms ease;
-o-transition: all 250ms ease;
transition: all 250ms ease;
}
.submit_wrapper input:hover {
-webkit-box-shadow: 1px 1px 0 0 #ffffff,0px 0px 0 0 #ffffff,0px 0px 0 0 #ffffff;
box-shadow: 1px 1px 0 0 #ffffff,0px 0px 0 0 #ffffff,0px 0px 0 0 #ffffff;
margin-top: 22px;
margin-left: 2px;
margin-bottom: 0px;
}

.icon{
    color: white;
    font-size: 3em;
    left: 0;
    
}
@media (max-width: 500px){
#contact {
width: 100%;
}
  .input_wrapper .i {
line-height: 3.5em;
font-size: 0.8em;
}
}
</style>
