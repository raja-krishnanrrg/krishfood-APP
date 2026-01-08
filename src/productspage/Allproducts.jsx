import burger1 from '../assets/burger1.jpg'
import burger2 from "../assets/burger2.jpg"
import burger3 from "../assets/burger3.jpg"
import pizza1 from "../assets/pizza1.jpg"
import pizza2 from "../assets/pizza2.jpg"
import pizza3 from "../assets/pizza3.jpg"
import sandwich1 from "../assets/sandwich1.jpg"
import sandwich2 from "../assets/sandwich2.jpg"
import sandwich3 from "../assets/sandwich3.jpg"
import drink1 from "../assets/drinks1.jpg"
import drink2 from "../assets/drinks2.jpg"
import desert1 from "../assets/ice1.jpg"
const products = [
    {
      id: 1,
      name: "2 Chana Burgers",
      price: 220,
      category: "Burgers",
      image: burger1,
      subcat: "Non-veg",
      describtion: "Relish 2 Chana burgers",
      subimage: "./src/assets/nonvegsymb.svg",
      qty: 0
    },
    {
      id: 2,
      name: "2 Chana Burger & Fries combo",
      price: 300,
      category: "Burgers",
      image:burger2,
      subcat: "veg",
      describtion: "2 Chana burgers , Med fries ",
      subimage: "./src/assets/vegsymbol.svg",
      qty:0
    },
    {
      id: 3,
      name: "2 Chana Burger & Fries Meal",
      price: 250,
      category: "Burgers",
      image:burger3,
      subcat: "non-veg",
      describtion: "2 Chana burgers , Med fries with Pepsi PET",
      subimage: "./src/assets/nonvegsymb.svg",
      qty:0
    },
    {
      id: 4,
      name: "Club Sandwich",
      price: 440,
      category: "Pizza",
      image: pizza1,
      subcat: "Non-veg",
      describtion: "pizza with banner butter with chicks",
      subimage: "./src/assets/nonvegsymb.svg",
      qty:0
    },
    {
      id: 5,
      name: "Butter sesert",
      price: 390,
      category: "Pizza",
      image: pizza2,
      subcat: "Non-veg",
      describtion: "pizza with spicey deserts",
      subimage: "./src/assets/nonvegsymb.svg",
      qty:0
    },
    {
      id: 6,
      name: "Butter cheese",
      price: 290,
      category: "Pizza",
      image: pizza3,
      subcat: "Non-veg",
      describtion: "pizza with spicey deserts with  minuss",
      subimage: "./src/assets/nonvegsymb.svg",
      qty:0
    },
    {
      id: 7,
      name: "Chicken sandwich",
      price: 930,
      category: "Sandwich",
      image: sandwich1,
      subcat: "Non-veg",
      describtion: "sandwich with  hot spicies",
      subimage: "./src/assets/nonvegsymb.svg",
      qty:0
    }
    ,
    {
      id: 8,
      name: "sandwich cheese",
      price: 190,
      category: "Sandwich",
      image: sandwich2,
      subcat: "Non-veg",
      describtion: "sandwichs with vegetables",
      subimage: "./src/assets/nonvegsymb.svg",
      qty: 0
    },
    {
      id: 9,
      name: "Butter pizza",
      price: 940,
      category: "Sandwich",
      image: sandwich3,
      subcat: "veg",
      describtion: "sandwich with  hot spicies",
      qty: 0,
      subimage: "./src/assets/vegsymbol.svg",
    }, {
      id: 10,
      name: "lime soda",
      price: 920,
      category: "Drinks",
      image: drink1,
      subcat: "veg",
      describtion: "lime chill soda",
      qty: 0,
      subimage: "./src/assets/vegsymbol.svg",
    }, {
      id: 11,
      name: "banner mullet",
      price: 902,
      category: "Drinks",
      image:drink2,
      subcat: "veg",
      describtion: "banner mullet",
      qty: 0,
      subimage: "./src/assets/vegsymbol.svg",
    }, {
      id: 12,
      name: "strawberry",
      price: 790,
      category: "Desserts",
      image: desert1,
      subcat: "veg",
      describtion: "desert strawberry icecrems",
      qty: 0,
      subimage: "./src/assets/vegsymbol.svg",
    }
  ];

  export default products