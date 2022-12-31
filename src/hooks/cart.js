/**
 *
 * @returns {array} Cart
 */
export const cartLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  return JSON.parse(cart);
};

/**
 *
 * @param index : The index of the cart column to delete 1 quantity
 */
export const cartDeleteItem = (index) => {
  const cart = localStorage.getItem("cart");
  let arrayCart = JSON.parse(cart);
  const removed = arrayCart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(removed));
};

/**
 *
 * @param index : the index of the cart column to add 1 quantity
 */
export const cartAddItem = (index) => {
  const cart = localStorage.getItem("cart");
  let arrayCart = JSON.parse(cart);
  arrayCart[index].quant++;
  localStorage.setItem("cart", JSON.stringify(arrayCart));
};

/**
 *
 * @param index : thethe index of the cart column to remove it
 */
export const cartRemoveItem = (index) => {
  const cart = localStorage.getItem("cart");
  let arrayCart = JSON.parse(cart);
  arrayCart[index].quant--;
  localStorage.setItem("cart", JSON.stringify(arrayCart));
};

/**
 *
 * @param product_id
 * @param quant : quantity
 */
export const addToCartLocalStorage = (product_id, quant) => {
  const cart = localStorage.getItem("cart");
  const obj = { id: product_id, quant: quant };
  if (cart) {
    let arrayCart = JSON.parse(cart);
    arrayCart.push(obj);
    localStorage.setItem("cart", JSON.stringify(arrayCart));
  } else {
    let arrayCart = [obj];
    localStorage.setItem("cart", JSON.stringify(arrayCart));
  }
};
