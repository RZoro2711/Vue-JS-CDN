const app = Vue.createApp({
  data() {
    return {
      books: [
        {
          title: "Book 1",
          author: "Khunn Satt Ko Ko",
          age: 21,
          img : "images/1.png",
          isfav : true,
        },
        {
          title: "Book 2",
          author: "Khunn Satt",
          age: 22,
          img : "images/2.jpg",
          isfav : false,
        },
        {
          title: "Book 3",
          author: "Zoro",
          age: 23,
          img : "images/3.jpg",
          isfav : true,
        },
      ],
      isShow: true,
    };
  },
  computed:{
    chooseClick(){
        return this.books.filter(book => {
            return book.isfav;
        })
    }
  }

});
app.mount("#app");
