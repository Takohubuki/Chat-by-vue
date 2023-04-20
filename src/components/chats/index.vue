<template>
    <div style="height: 100vh;">
        <PrettyChatWindow
            :projectId="projectId"
            :username="username"
            :secret="secret" />
    </div>
</template>
<script>
import { PrettyChatWindow } from 'react-chat-engine-pretty';
import { applyReactInVue } from 'veaury';

export default {
    name: 'ChatPage',
    data() {
        return {
            projectId: import.meta.env.VITE_CHATENGINE_PROJECT_ID,
        };
    },
    components: {
        PrettyChatWindow: applyReactInVue(PrettyChatWindow)
    },
    props: {
        username: {
            type: String,
            required: true
        },
        secret: {
            type: String,
            required: true
        }
    }
}
</script>
<style lang="" scoped>
  .ce-new-chat-button {
    width: 32px;
    position: relative;
    bottom: 22px;
  }  
</style>