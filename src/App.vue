<script setup>
import AuthPage from './components/auths/index.vue';
import ChatPage from './components/chats/index.vue';
</script>

<template>

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
