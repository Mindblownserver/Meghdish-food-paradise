<template>
    <section>
        <div class="img"><img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/17/f5/39/f7/fooood-at-the-food-department.jpg" alt="">
        </div>
        <div class="content">
            <div class="form">
                <h2>Login to Meghdish Food</h2>
                <form>
                    <div class="input">
                        <input type="text" placeholder="Email.." v-model="Email" name="">
                    </div>
                    <div class="input">
                        <input type="password" placeholder="Password.." v-model="Password" name="">
                    </div>
                    <div class="form-check form-check-inline remember">
                        <input class="form-check-input" v-model="checkbox" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">Remember me</label>
                    </div>
                    
                    <div class="input">
                        <button type="button" class="btn" @click="Login">Login</button>

                    </div>
                    <div class="input">
                        <p>Don't have an account? <a href="/signup">Sign up</a></p>
                    </div>
                    <h4>Sign up with social media</h4>
                    <ul class="sci">
                        <li @click="signInFacebook"><i class="fab fa-facebook-f"></i></li>
                        <li @click="signInGoogle"><i class="fab fa-google"></i></li>
                    </ul>
                </form>
                
            </div>
        </div>
    </section>
</template>
<script>
import firebase from 'firebase/app';
import 'firebase/auth';
export default {
    name: "Sign in",
    data() {
        return {
            Email: "",
            Password: "",
            checkbox: false,
        }
    },
    methods: {
        async Login(){
            const auth = firebase.auth()
            // console.log(this.Email, this.Password , this.checkbox)
            await auth.setPersistence(this.checkbox ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION).then( () => {
                return  auth.signInWithEmailAndPassword(this.Email, this.Password).then(()=>{
                    this.$router.replace({ path: '/' });
                }).catch(error =>{
                    alert(error.message)
                })
            })
        },
        async signInGoogle(){
            var provider = new firebase.auth.GoogleAuthProvider();
            const auth = firebase.auth()
            await auth.setPersistence(this.checkbox ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION).then(()=>{
                auth.signInWithPopup(provider).then((result) => {
                    var user = result.user;
                    alert(`Welcome back ${user.displayName} :D`);
                }).catch((error) => {
                    console.log(error.code);
                    alert(error.message);
                });
            });
            this.$router.replace({ path: '/' }); 
        },
        async signInFacebook(){
            var provider = new firebase.auth.FacebookAuthProvider();
            const auth = firebase.auth();
            await auth.signInWithPopup(provider).then((result) => {
                var user = result.user;
                alert(`Welcome back ${user.displayName} :D`);
            })
            .catch((error) => {
                console.log(error.code);
                alert(error.message);
            });
            this.$router.replace({ path: '/' }); 
        } 
    },


}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
section{
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
}
section .img{
    position: relative;
    width: 40%;
    height: 100%;
}
section .img:before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to left, var(--main-web-color) 0%, rgba(248, 117, 55, 1) 100%);
    z-index: 1;
    /***mix-blend-mode: screen;*/
}

section .img img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

section .content{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
}
section .content .form{
    width: 50%;
}
section .content .form h2{
    color: black;
    font-weight: bolder;
    font-size: 1.5rem;
    margin-bottom: 20px;
    display: inline-block;
    letter-spacing: 1px;
}
section .content .form .input{
    margin-block: 20px;
}
section .content .form .input span{
    font-size: 16px;
    margin-bottom: 5px;
    display: inline-block;
    color: rgb(228, 99, 39);
    font-weight: 300;
    font-size: 16px;
    letter-spacing: 1px;
}
section .content .form .input input{
    width: 100%;
    padding: 10px 20px;
    outline: none;
    font-weight: 400;
    border: 1px solid rgb(228, 99, 39);
    font-size: 16px;
    letter-spacing: 1px;
    color: black;
    background: transparent;
    border-radius: 20px;
}
section .content .form .input button{
    background: linear-gradient(to left, var(--main-web-color) 0%, rgba(248, 117, 55, 1) 100%);
    color: white;
    font-weight: 500;
    width: 50%;
    padding: 10px 20px;
    border-radius: 20px;
}

section .content .form .input p a{
    color: #e46e07;
}
section .content .form .remember{
    margin-bottom: 10px;
    color: #fc9842;
    font-weight: 400;
    font-size: 14px;
}
section .content .form h4{
    color:var(--main-web-color);
    text-align: center;
    margin: 80px 0 10px;
    font-weight: 500;
    
}
.sci{
    display: flex;
    justify-content: center;
    align-items: center;
}
section .content .sci li{
    list-style: none;
    width: 50px;
    height: 50px;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    background-color:#fc9842;
    border-radius: 50%;
    margin: 0 7px;
    cursor: pointer;
}
section .content .form .sci li:hover{
    background-color: #fe5f75;
}

@media  (max-width: 900px) {
    section .img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    section .content{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    section .content .form{
        width: 100%;
        padding: 40px;
        background-color: rgb(255 255 255 / 0.9);
        margin: 50px;
    }
    section .content .form .h3{
        color: rgb(228, 99, 39);
        text-align: center;
        margin: 30px 0 10px;
        font-weight: 500;
    }
}
</style>