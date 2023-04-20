<script setup>
import AuthPage from './components/auths/index.vue';
import ChatPage from './components/chats/index.vue';
</script>

<template>
    <AuthPage v-if="!user" @onAuth="handleAuth"/>
    <ChatPage v-else :username="user.username" :secret="user.secret"/>

</template>

<script>
    export default {
        data() {
            return {
                user: undefined
            };
        },
        methods: {
            handleAuth(user) {
                this.user = user;
            }
        }
    }
</script>
<style scoped>
</style>
