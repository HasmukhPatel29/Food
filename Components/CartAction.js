export const addToCart=(item)=>{
    return {
      type: 'ADDTOCART',
      payload: item,
    };
  };
  export const removeFromCart=(itemId)=>{
    return{
      type:'REMOVEFROMCART',
      payload: itemId,
    }
  }
  export const decreaseQuantity = (item) => {
    return {
      type: 'DECREASEQUANTITY',
      payload: item
    };
  };
  export const  increaseQuantity=(item)=>{
    return{
      type:'INCREASEQUANTITY',
      payload: item,
    }
  }
  export const updateItemList = (updatedItemList) => ({
    type: 'UPDATELIST',
    payload: updatedItemList,
  });