const app = Vue.createApp({
  data() {
    return {
      books: [
        {
          title: "Book 1",
          author: "Khunn Satt Ko Ko",
          age: 21,
        },
        {
          title: "Book 2",
          author: "Khunn Satt",
          age: 22,
        },
        {
          title: "Book 3",
          author: "Zoro",
          age: 23,
        },
      ],
      isShow: true,
    };
  },

});
app.mount("#app");
