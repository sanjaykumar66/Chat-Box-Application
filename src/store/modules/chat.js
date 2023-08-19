import { currentUser , conversation, otherUser } from '@/helper/index.js';

const state = {
    currentUser:'',
    conversation:[],
}

const mutations = {
    SET_CONVERSATION(state,conversation){
        state.conversation = conversation;
    },
    SET_CURRENTUSER(state,currentUser){
        state.currentUser = currentUser;
    },
    ADD_MESSAGE(state,message){
        state.conversation.push(message);
    }
}

const actions = {
    fetchConversations({commit}){
        setTimeout(()=>{
            commit('SET_CONVERSATION', JSON.parse(conversation));
            commit('SET_CURRENTUSER', JSON.parse(currentUser));
        },500)
    },
    sendReply({commit},message,from){
        return new Promise((resolve) => {
            setTimeout(() => {
                const currentDate = new Date();
                const newMessage = {
                    id: state.conversation.length + 1,
                    from: state.currentUser,
                    message: message,
                    date: currentDate.getFullYear()+'-'+currentDate.getMonth() + 1+'-'+currentDate.getDate()+' '
                         +currentDate.getHours()+':'+currentDate.getMinutes()+':'+currentDate.getSeconds(),
                };
                commit('ADD_MESSAGE', newMessage);
                resolve(newMessage);
            }, 500); 
        });
    },
    getReply({commit},message){
        return new Promise((resolve) => {
            setTimeout(() => {
                const currentDate = new Date();
                const newMessage = {
                    id: state.conversation.length + 1,
                    from: JSON.parse(otherUser),
                    message: message,
                    date: currentDate.getFullYear()+'-'+currentDate.getMonth() + 1+'-'+currentDate.getDate()+' '
                         +currentDate.getHours()+':'+currentDate.getMinutes()+':'+currentDate.getSeconds(),
                };
                commit('ADD_MESSAGE', newMessage);
                resolve(newMessage);
            }, 500); 
        });
    }
}

export default {
    state,
    mutations,
    actions
};