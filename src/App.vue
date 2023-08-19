<script setup>
import composeSection from './components/composeSection.vue';
import conversationArea from './components/conversationArea.vue';
import { computed,provide,ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
store.dispatch('fetchConversations');
const conversation = computed(() => store.state.chat.conversation);
const currentUser = computed(() => store.state.chat.currentUser);
provide('currentUser', currentUser)
const message = ref('');

function sendMessage(){
  message.value = message.value.replace('\\n','<br>')
  store.dispatch('sendReply',message.value);
  setTimeout(()=>{
    store.dispatch('getReply','I was working in the garden and just thought of you!')
  },1000)
  
}
</script>
<template>
  <div class="container">
    <conversationArea :conversation="conversation" :currentUser="currentUser"/>
    <composeSection v-model="message" @submit="sendMessage"/>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>