const app = Vue.createApp({
    data(){
        return{
            title : "Vue JS",
            author : "Evan You",
            age : 36,
        }
    }
})
app.mount("#app");