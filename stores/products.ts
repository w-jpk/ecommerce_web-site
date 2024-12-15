import { defineStore } from "pinia";

interface Review {
  name: string;
  rating: number;
  review: string;
  date: string;
  image: string[];
}

interface Characteristics {
  article: number;
  compound: string[];
  colors: string[];
}

interface Product {
  id: number;
  name: string;
  price: number;
  discount: number;
  count: number;
  images: string[];
  rating: number;
  colors: string[];
  sizes: string[];
  shortDesc: string;
  description: string;
  characteristics: Characteristics;
  reviews: Review[];
}

export const useMyProductsStore = defineStore({
  id: "myProductsStore",
  state: () => ({
    products: <Product[]>[
      {
        id: 1,
        name: "Платье лапша в обтяг с разрезом трикотажное длинное",
        price: 2245,
        discount: 20,
        count: 10,
        images: [
          "~/assets/image/dress (1).jpg",
          "~/assets/image/dress (2).jpg",
          "~/assets/image/dress (3).jpg",
        ],
        rating: 4.5,
        colors: ["#d6c1ac", "#fff", "#000"],
        sizes: ["S", "M", "L"],
        shortDesc:
          "Платье трикотажное женское с разрезом, станет незаменимым элементом гардероба любой модной женщины. Оно теплое и стильное, изготовлено из высококачественного трикотажного материала.",
        description: `
          Платье трикотажное женское с разрезом станет незаменимым элементом гардероба.
          Оно теплое, стильное и изготовлено из высококачественного трикотажа, обеспечивая комфорт даже в прохладные дни.
          Подходит для создания офисного стиля, повседневных и вечерних образов, а также для беременных женщин.
          Материал: плотный трикотаж.
        `,
        characteristics: {
          article: 174474163,
          compound: ["хлопок 70%", "эластан 5%", "полиэстер 25%"],
          colors: [
            "бежевый",
            "бежевый лайт",
            "теплый белый",
            "мягкий белый",
            "молочный",
          ],
        },
        reviews: [
          {
            name: "Анастасия С.",
            rating: 4.5,
            review: "Удобное, не колется, хорошо сидит, не слишком тонкое",
            date: "14 декабря",
            image: ["/assets/image/model.jpg", "/assets/image/model.jpg"],
          },
          {
            name: "Анастасия С.",
            rating: 4.5,
            review: "Удобное, не колется, хорошо сидит, не слишком тонкое",
            date: "14 декабря",
            image: ["/assets/image/model.jpg", "/assets/image/model.jpg"],
          },
          {
            name: "Анастасия С.",
            rating: 4.5,
            review: "Удобное, не колется, хорошо сидит, не слишком тонкое",
            date: "14 декабря",
            image: ["/assets/image/model.jpg", "/assets/image/model.jpg"],
          },
        ],
      },
    ],
  }),
  actions: {
    addProduct(product: Product) {
      this.products.push(product);
    },
    removeProduct(productId: number) {
      this.products = this.products.filter(
        (product) => product.id !== productId
      );
    },
    updateProduct(updatedProduct: Product) {
      const index = this.products.findIndex(
        (product) => product.id === updatedProduct.id
      );
      if (index !== -1) {
        this.products[index] = { ...this.products[index], ...updatedProduct };
      }
    },
  },
});
