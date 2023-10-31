import item1 from "./Item1.jpg";
import item2 from "./Item2.jpg";
import item3 from "./Item3.jpg";
import item4 from "./Item4.jpg";
import item5 from "./Item5.jpg";
import item6 from "./Item6.jpg";
import { showMessage, hideMessage } from "react-native-flash-message";

const initialState = {
  itemList: [
    {
      id: 1,
      name: 'Full Thali',
      image: item1,
      price: 266,
      description:
        'This is our new super Thali, which is delicious even when cold. Don`t miss the opportunity to try! SUPERSOOOUP!',
      weight: '350 g.',
      calories: '340 kcal.',
      protein: '40 g.',
      category: 'Thali',
    },
    {
      id: 2,
      name: 'Rice',
      image: item2,
      price: 90,
      description:
        'Jeera Rice and Dal Tadka is a classic Indian dish that combines fragrant cumin rice with a flavorful lentil curry.',
      weight: '350 g.',
      calories: '340 kcal.',
      protein: '40 g.',
      category: 'Rice',
    },
    {
      id: 3,
      name: 'Paneer Tikka',
      image: item3,
      price: 89,
      description:
        'Paneer Tikka is a popular and delicious tandoori snack where Paneer (Indian cottage cheese cubes) are marinated in a spiced yogurt-based marinade, arranged on skewers and grilled in the oven.',
      weight: '350 g.',
      calories: '340 kcal.',
      protein: '40 g.',
      category: 'Paneer_Tikka',
    },
    {
      id: 4,
      name: 'Frankie',
      image: item4,
      price: 94,
      description:
        'A vegetarian frankie usually includes assorted toppings of veggie stir fry, legumes, paneer, cheese, potato tikki, veg cutlet, lentils kabab.',
      weight: '350 g.',
      calories: '340 kcal.',
      protein: '40 g.',
      category: 'Frankie',
    },
    {
      id: 5,
      name: 'Burger',
      image: item5,
      description:
        'A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor.',
      weight: '350 g.',
      calories: '340 kcal.',
      price: 39,
      protein: '40 g.',
      category: 'Burger',
    },
    {
      id: 6,
      name: 'Idli',
      image: item6,
      price: 79,
      description:
        'Idli Sambar is a South Indian breakfast meal where soft fluffy steamed cakes known as idli are served with sambar, a vegetable lentil stew.',
      weight: '350 g.',
      calories: '340 kcal.',
      protein: '40 g.',
      category: 'Idli',
    },
    {
      id: 7,
      name: 'Thali',
      image: item1,
      price: 80,
      description:
        'This is our new super Thali, which is delicious even when cold. Don`t miss the opportunity to try! SUPERSOOOUP!',
      weight: '350 g.',
      calories: '340 kcal.',
      protein: '40 g.',
      category: 'Thali',
    },
    {
      id: 8,
      name: 'Rice',
      image: item2,
      price: 55,
      description:
        'Jeera Rice and Dal Tadka is a classic Indian dish that combines fragrant cumin rice with a flavorful lentil curry.',
      weight: '350 g.',
      calories: '340 kcal.',
      protein: '40 g.',
      category: 'Rice',
    },
    {
      id: 9,
      name: 'Paneer Tikka',
      image: item3,
      price: 29,
      description:
        'Paneer Tikka is a popular and delicious tandoori snack where Paneer (Indian cottage cheese cubes) are marinated in a spiced yogurt-based marinade, arranged on skewers and grilled in the oven.',
      weight: '350 g.',
      calories: '340 kcal.',
      protein: '40 g.',
      category: 'Paneer_Tikka',
    },
    {
      id: 10,
      name: 'Frankie',
      image: item4,
      price: 86,
      description:
        'A vegetarian frankie usually includes assorted toppings of veggie stir fry, legumes, paneer, cheese, potato tikki, veg cutlet, lentils kabab.',
      weight: '350 g.',
      calories: '340 kcal.',
      protein: '40 g.',
      category: 'Frankie',
    },
    {
      id: 11,
      name: 'Burger',
      image: item5,
      description:
        'A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor.',
      weight: '350 g.',
      calories: '340 kcal.',
      protein: '40 g.',
      category: 'Burger',
      price: 94,
    },
    {
      id: 12,
      name: 'Idli',
      image: item6,
      price: 34,
      description:
        'Idli Sambar is a South Indian breakfast meal where soft fluffy steamed cakes known as idli are served with sambar, a vegetable lentil stew.',
      weight: '350 g.',
      calories: '340 kcal.',
      protein: '40 g.',
      category: 'Idli',
    },
    {
      id: 13,
      name: 'Thali',
      image: item1,
      price: 93,
      description:
        'This is our new super Thali, which is delicious even when cold. Don`t miss the opportunity to try! SUPERSOOOUP!',
      weight: '350 g.',
      calories: '340 kcal.',
      protein: '40 g.',
      category: 'Thali',
    },
    {
      id: 14,
      name: 'Rice',
      image: item2,
      price: 78,
      description:
        'Jeera Rice and Dal Tadka is a classic Indian dish that combines fragrant cumin rice with a flavorful lentil curry.',
      weight: '350 g.',
      calories: '340 kcal.',
      protein: '40 g.',
      category: 'Rice',
    },
    {
      id: 15,
      name: 'Paneer Tikka',
      image: item3,
      price: 54,
      description:
        'Paneer Tikka is a popular and delicious tandoori snack where Paneer (Indian cottage cheese cubes) are marinated in a spiced yogurt-based marinade, arranged on skewers and grilled in the oven.',
      weight: '350 g.',
      calories: '340 kcal.',
      protein: '40 g.',
      category: 'Paneer_Tikka',
    },
    {
      id: 16,
      name: 'Frankie',
      image: item4,
      price: 53,
      description:
        'A vegetarian frankie usually includes assorted toppings of veggie stir fry, legumes, paneer, cheese, potato tikki, veg cutlet, lentils kabab.',
      weight: '350 g.',
      calories: '340 kcal.',
      protein: '40 g.',
      category: 'Frankie',
    },
    {
      id: 17,
      name: 'Burger',
      image: item5,
      description:
        'A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor.!',
      weight: '350 g.',
      calories: '340 kcal.',
      protein: '40 g.',
      category: 'Burger',
      price: 89,
    },
    {
      id: 18,
      name: 'Idli',
      image: item6,
      price: 49,
      description:
        'Idli Sambar is a South Indian breakfast meal where soft fluffy steamed cakes known as idli are served with sambar, a vegetable lentil stew.',
      weight: '350 g.',
      calories: '340 kcal.',
      protein: '40 g.',
      category: 'Idli',
    },
    {
      id: 19,
      name: 'Thali',
      image: item1,
      price: 56,
      description:
        'This is our new super Thali, which is delicious even when cold. Don`t miss the opportunity to try! SUPERSOOOUP!',
      weight: '350 g.',
      calories: '340 kcal.',
      protein: '40 g.',
      category: 'Thali',
    },
    {
      id: 20,
      name: 'Rice',
      image: item2,
      price: 24,
      description:
        'Jeera Rice and Dal Tadka is a classic Indian dish that combines fragrant cumin rice with a flavorful lentil curry.',
      weight: '350 g.',
      calories: '340 kcal.',
      protein: '40 g.',
      category: 'Rice',
    },
    {
      id: 21,
      name: 'Paneer Tikka',
      image: item3,
      price: 87,
      description:
        'Paneer Tikka is a popular and delicious tandoori snack where Paneer (Indian cottage cheese cubes) are marinated in a spiced yogurt-based marinade, arranged on skewers and grilled in the oven.',
      weight: '350 g.',
      calories: '340 kcal.',
      protein: '40 g.',
      category: 'Paneer_Tikka',
    },
    {
      id: 22,
      name: 'Frankie',
      image: item4,
      price: 74,
      description:
        'A vegetarian frankie usually includes assorted toppings of veggie stir fry, legumes, paneer, cheese, potato tikki, veg cutlet, lentils kabab.',
      weight: '350 g.',
      calories: '340 kcal.',
      protein: '40 g.',
      category: 'Frankie',
    },
    {
      id: 23,
      name: 'Burger',
      image: item5,
      description:
        'A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor.!',
      weight: '350 g.',
      calories: '340 kcal.',
      protein: '40 g.',
      price: 65,
      category: 'Burger',
    },
    {
      id: 24,
      name: 'Idli sambar',
      image: item6,
      price: 38,
      description:
        'Idli Sambar is a South Indian breakfast meal where soft fluffy steamed cakes known as idli are served with sambar, a vegetable lentil stew.',
      weight: '350 g.',
      calories: '340 kcal.',
      protein: '40 g.',
      category: 'Idli',
    },
    {
      id: 25,
      name: 'Thali',
      image: item1,
      price: 98,
      description:
        'This is our new super Thali, which is delicious even when cold. Don`t miss the opportunity to try! SUPERSOOOUP!',
      weight: '350 g.',
      calories: '340 kcal.',
      protein: '40 g.',
      category: 'Thali',
    },
    {
      id: 26,
      name: 'Rice',
      image: item2,
      price: 70,
      description:
        'Jeera Rice and Dal Tadka is a classic Indian dish that combines fragrant cumin rice with a flavorful lentil curry.',
      weight: '350 g.',
      calories: '340 kcal.',
      protein: '40 g.',
      category: 'Rice',
    },
    {
      id: 27,
      name: 'Paneer Tikka',
      image: item3,
      price: 39,
      description:
        'Paneer Tikka is a popular and delicious tandoori snack where Paneer (Indian cottage cheese cubes) are marinated in a spiced yogurt-based marinade, arranged on skewers and grilled in the oven.',
      weight: '350 g.',
      calories: '340 kcal.',
      protein: '40 g.',
      category: 'Paneer_Tikka',
    },
    {
      id: 28,
      name: 'Frankie',
      image: item4,
      price: 74,
      description:
        'A vegetarian frankie usually includes assorted toppings of veggie stir fry, legumes, paneer, cheese, potato tikki, veg cutlet, lentils kabab.',
      weight: '350 g.',
      calories: '340 kcal.',
      protein: '40 g.',
      category: 'Frankie',
    },
    {
      id: 29,
      name: 'Burger',
      image: item5,
      description:
        'A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor.',
      weight: '350 g.',
      calories: '340 kcal.',
      price: 439,
      protein: '40 g.',
      category: 'Burger',
    },
    {
      id: 30,
      name: 'Idli',
      image: item6,
      price: 7239,
      description:
        'Idli Sambar is a South Indian breakfast meal where soft fluffy steamed cakes known as idli are served with sambar, a vegetable lentil stew.',
      weight: '350 g.',
      calories: '340 kcal.',
      protein: '40 g.',
      category: 'Idli',
    },
    {
      id: 31,
      name: 'Thali',
      image: item1,
      price: 340,
      description:
        'This is our new super Thali, which is delicious even when cold. Don`t miss the opportunity to try! SUPERSOOOUP!',
      weight: '350 g.',
      calories: '340 kcal.',
      protein: '40 g.',
      category: 'Thali',
    },
  ],
  cartItem: [],
  grandTotal: 0,
};
const calculateTotalPrice = (item) => {
  return item.price * item.quantity;
};
const calculateGrandTotal = (cartItem) => {
  let total = 0;
  cartItem.forEach((item) => {
    total += item.totalPrice;
  });
  return total;
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDTOCART': {
      const existingItem = state.cartItem.find(
        (item) => item.id === action.payload.id
      );

      let updatedcartItem;

      if (existingItem) {
        showMessage({
            message: "Product Already Added in Cart",
            type: "warning",
          });
        return state;
      } else {
        updatedcartItem = [
          ...state.cartItem,
          {
            ...action.payload,
            quantity: 1,
            totalPrice: calculateTotalPrice({ ...action.payload, quantity: 1 }),
          },
        ];
      }

      const grandTotal = calculateGrandTotal(updatedcartItem);
      showMessage({
            message: "Added to the cart",
            type: "success",
          });
      return {
        ...state,
        cartItem: updatedcartItem,
        grandTotal: grandTotal,
      };
    }
    case 'DECREASEQUANTITY': {
      const updatedcartItem = state.cartItem.map((item) => {
        if (item.id === action.payload.id && item.quantity > 0) {
          item.quantity -= 1;
          item.totalPrice = calculateTotalPrice(item);
        }
        return item;
      });

      const grandTotal = calculateGrandTotal(updatedcartItem);

      return {
        ...state,
        cartItem: updatedcartItem.filter((item) => item.quantity > 0),
        grandTotal: grandTotal,
      };
    }
    case 'INCREASEQUANTITY': {
      const updatedcartItem = state.cartItem.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity += 1;
          item.totalPrice = calculateTotalPrice(item);
        }
        return item;
      });

      const grandTotal = calculateGrandTotal(updatedcartItem);

      return {
        ...state,
        cartItem: updatedcartItem,
        grandTotal: grandTotal,
      };
    }
    case 'REMOVEFROMCART': {
      const updatedcartItem = state.cartItem.filter(
        (item) => item.id !== action.payload
      );

      const grandTotal = calculateGrandTotal(updatedcartItem);

      return {
        ...state,
        cartItem: updatedcartItem,
        grandTotal: grandTotal,
      };
    }
    case 'UPDATELIST': {
      return {
        ...state,
        itemList: action.payload,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
