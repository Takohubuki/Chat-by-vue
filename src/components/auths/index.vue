<template>
    <div class="login-page">
        <div class="card">
            <form @submit.prevent="login">
                <div class="title">Login</div>
                <input type="text" placeholder="username" v-model="username">
                <br>
                <input type="password" placeholder="password" v-model="password">
                <br>
                <button>Login</button>
            </form>

            <form @submit.prevent="signup">
                <div class="title">Sign up</div>
                <input type="text" placeholder="username" v-model="username">
                <br>
                <input type="password" placeholder="password" v-model="password">
                <!-- <br>
                <input type="password" placeholder="confirm your password">
                <br> -->
                <input type="email" placeholder="your email" v-model="email">
                <br>
                <input type="text" placeholder="First name" v-model="first_name">
                <br>
                <input type="text" placeholder="Last name" v-model="last_name">
                <br>
                <button type="submit">Sign up</button>
            </form>
        </div>
    </div>
</template>
<script>
import { loginRest, signupRest } from './api';
export default {
    name: 'AuthPage',
    data() {
        return {
            username: "",
            password: "",
            email: "",
            first_name: "",
            last_name: ""
        }
    },
    methods: {
        login() {
            loginRest(this.username, this.password).then((response) => {
                this.$emit("onAuth", { ...response.data, secret: this.password })
            }).catch((error) => console.log('Login error!', error));
        },

        signup() {
            signupRest(this.username, this.password, this.email, this.first_name, this.last_name).then(
                (response) => {
                    this.$emit("onAuth", { ...response.data, secret: this.password })
                }
            ).catch((error) => console.log('Sign up error!', error));
        },
    }
}
</script>
<style lang="">
    
</style>