import { reactive } from "vue";

export const store = reactive({
  popularProduct: [
    {
      pic: "./assets/img/s2.jpg",
      name: "Fress Cobies",
      discount: "SALE!",
      price: 18,
    },
    {
      pic: "./assets/img/s5.jpg",
      name: "Fress Apple",
      price: 18,
    },
    {
      pic: "./assets/img/s8.jpg",
      name: "Fresh Waterlemon",
      discount: "",
      price: 15,
    },
    {
      pic: "./assets/img/s1.jpg",
      name: "Organic Juice",
      discount: "SALE!",
      price: 20,
    },
  ],
});
