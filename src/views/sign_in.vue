<template>
    <section>
        <div class="img"><img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/17/f5/39/f7/fooood-at-the-food-department.jpg" alt="">
        </div>
        <div class="content">
            <div class="form">
                <h2>Sign up to Meghdish Food</h2>
                <form>
                    <div class="input">
                        <input type="text" placeholder="Username.." place v-model="username" name="">
                    </div>
                    <div class="input">
                        <input type="text" v-model="Email" placeholder="Email.." name="">
                    </div>
                    <div class="input">
                        <input type="password" placeholder="Password.." v-model="Password" name="">
                    </div>
                    <div class="input">
                        <input type="password" v-model="confirm" placeholder="Confirm password.." name="">
                    </div>
                    <div class="form-check form-check-inline remember">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">Remember me</label>
                    </div>
                    <div class="input" style="margin-bottom:10px;">
                        <p>Have an account? <a href="/login">Login</a></p>
                    </div>
                    <div class="input1">
                        <button type="button" class="btn" @click="createAccount">Sign up</button>

                    </div>
                </form>
                <h3>Sign up with social media</h3>
                <ul class="sci">
                    <li><i class="fab fa-facebook-f"></i></li>
                    <li><i class="fab fa-google"></i></li>
                </ul>
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
            username: "",
            Password: "",
            confirm: "",
        }
    },
    methods: {
        createAccount(){
            const auth = firebase.auth()
            console.log(this.Email, this.Password)
            if(this.Password === this.confirm){
                auth.createUserWithEmailAndPassword(this.Email, this.Password).then((userCredentions) => {
                    this.$router.replace({ path: '/' })
                    return userCredentions.user.updateProfile({
                        displayName: this.username
                    })
                }).catch(error =>{
                    alert(error.message)
                })
                
            }
            else{
                alert(`The password you typed doesn't match what you confirmed. Expected => ${this.Password} but got => ${this.confirm}`)
            }
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
    /**mix-blend-mode: screen;**/
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
    font: 600;
    font-size: 1.5rem;
    font-weight: bolder;
    margin-bottom: 20px;
    display: inline-block;
    letter-spacing: 1px;
}


section .content .form .input input{
    width: 100%;
    padding: 10px 20px;
    outline: none;
    font-weight: 400;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    letter-spacing: 1px;
    color: black;
    background: transparent;
    border-radius: 31px;
    margin-top: 20px;
    margin-bottom: 20px;
}
section .content .form .input1 button{
    background: linear-gradient(to left, var(--main-web-color), rgba(248, 117, 55, 1));;
    color: white;
    font-weight: 500;
    width: 50%;
    padding: 10px 20px;
    border-radius: 20px;
}
section .content .form .input p{
    color: black;
}
section .content .form .input p a{
    color: var(--main-web-color);
}
section .content .form .remember{
    margin-bottom: 10px;
    color: var(--main-web-color);
    font-weight: 400;
    font-size: 14px;
}
section .content .form h3{
    color:rgb(228, 99, 39);
    text-align: center;
    margin: 80px 0 10px;
    font-weight: 500;
    
}
section .content .form .sci{
    display: flex;
    justify-content: center;
    align-items: center;
}
section .content .form .sci li{
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