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
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AuthPage'
}
</script>
<style lang="">
    
</style>