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
                <div class="tooltip-content">
                    {{ props.message.from.firstName }}
                </div>
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

.thumbnail{
    position: relative;
    cursor: pointer;
}
.thumbnail>img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 0px;
    margin-left: 12px;
    align-self: flex-end;
}

.tooltip-content {
    position: absolute;
    background-color: #444;
    color: #fff;
    padding: 8px;
    border-radius: 8px;
    font-size: 12px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    transform: translateX(-50%);
    white-space: nowrap;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    top: 10px;
    left: -15px;
}

.others-msg .tooltip-content{
    left: 140%;
}


.thumbnail:hover .tooltip-content {
      opacity: 1;
      visibility: visible;
}

.tooltip-content::after {
    content: '';
    border-width: 5px;
    position: absolute;
    border-style: solid;
    bottom: 36%;
    left: 100%;
    border-color: transparent transparent transparent #444;
}

.others-msg .tooltip-content::after{
    right: 100%;
    left: auto;
    border-color: transparent #444 transparent transparent;
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