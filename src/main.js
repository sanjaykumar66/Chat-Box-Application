import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import chatModule from './store/modules/chat';
import { createStore } from 'vuex';
const store = createStore({
    modules: {
      chat: chatModule,
    },
});

createApp(App).use(store).mount('#app')
