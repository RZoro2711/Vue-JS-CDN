const app = Vue.createApp({
    data(){
        return{
            title : "Vue JS",
            author : "Evan You",
            age : 36,
            isShow : true,
        }
    },
    methods:{
        mouseOverHandler(event, data){
            console.log('Mouse Over is Working', event.type, data);
        },
        mouseLeaveHandler(event, data){
            console.log('Mouse Leave is Working', event.type, data);
        },
        doubleClickHandler(event, data){
            console.log('Double Click is Working', event.type, data);
        }
    }
})
app.mount("#app");