<script setup>
import { defineProps,inject  } from 'vue';
const props = defineProps({
    message:Object
})
const currentUser = inject('currentUser')

</script>
<template>
    <div :class="['message-container',props.message.from.id===currentUser.id?'':'others-msg']">
            <div class="thumbnail">
              <img 
                    :alt="props.message.from.firstName" 
                    loading="lazy" 
                    :src="props.message.from.thumbnail" />
            </div>
            <div class="message-bubble" v-html="props.message.message"></div>
    </div>
</template>

<style scoped>
.message-container {
    display: flex;
    align-items: flex-start;
    justify-content: end;
    flex-direction: row-reverse;
    margin-bottom: 12px;
}

.thumbnail>img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 0px;
    margin-left: 12px;
    align-self: flex-end;
}

.message-bubble {
    border-radius: 8px;
    padding: 8px;
    max-width: 60%;
    word-wrap: break-word;
    background: #3366ff;
    color: #fff;
}

.others-msg .message-bubble {
    background: #ccc;
    color: #000;
}

.message-container.others-msg {
    justify-content: start;
    flex-direction: row;
}
.others-msg .thumbnail {
    margin-right: 12px;
    margin-left: 0px;
}
</style>