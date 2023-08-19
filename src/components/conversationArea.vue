<script setup>
import { defineProps , ref, watch } from 'vue';
import messageEntry from './messageEntry.vue';
const props = defineProps({
    conversation:Array,
})
const chatContainer = ref(null);

watch(
  () => props.conversation,
  (newValue, oldValue) => {
    
    setTimeout(()=>{
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
    },400)

  },
  { deep: true }
)

</script>

<template>
     <div ref="chatContainer" class="chat-container">
       <messageEntry 
            v-for="(message) in props.conversation" :key="message.id" :message="message"/>
    </div>
</template>

<style scoped>
.chat-container {
  overflow-y: auto;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  padding: 10px 5px;
  margin-bottom: 12px;
  scroll-behavior: smooth;
}
</style>