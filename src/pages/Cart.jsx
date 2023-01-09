import { useState } from "react";
import { Header } from "../components/Layout/Header";
import { Footer } from "../components/Layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { products_array } from "../hooks/products_storage";
import {
  cartLocalStorage,
  cartDeleteItem,
  cartAddItem,
  cartRemoveItem,
} from "../hooks/cart";

export const Cart = () => {
  const [cartItems, setCartItem] = useState(cartLocalStorage());
  const reloadCart = () => {
    setCartItem(cartLocalStorage);
  };
 
  // funcion copiada de https://www.tutofox.com/javascript/como-convertir-valor-a-formato-moneda-en-javascript/
  const formatter = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  });

  

  return (
    <>
      <Header />

      <div className="card">
        {cartItems.map((item, index) => {
          // como en el localstorage solo se guarda el id del producto, debemos hacer un filtrado de los productos basado en el id en el que estoy actualmente
          const product = products_array.filter((p) => {
            return p.id === item.id;
          })[0];
          const product_price = ( product.price * item.quant);
          
          return (
            <div className="card-producto">
              <img src={product.image} alt="" />
              <div className="card-producto-descripcion">
                <h3 className="text-s">{product.title}</h3>
                <hr />
                <br />
                <h3 className="text-xs">Unidad : {formatter.format(product.price)}</h3>
                <h3 className="text-xs">Total : {formatter.format(product_price)}</h3>
              </div>
              <div className="card-producto-trash">
                <FontAwesomeIcon
                  onClick={() => {
                    cartDeleteItem(index);
                    reloadCart();
                  }}
                  icon={faTrash}
                />
                <div className="card-producto-trash-agg">
                  <button
                    onClick={() => {
                      cartRemoveItem(index);
                      reloadCart();
                    }}
                    className="resta"
                  >
                    -
                  </button>
                  <input value={item.quant} className="input" type="text" />
                  <button
                    onClick={() => {
                      cartAddItem(index);
                      reloadCart();
                    }}
                    className="suma"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
       
        <button
          onClick={() => {
            const es = "%20";
            const salto = "%0A";
            let precio_total = 0;
            let productosList = "";

            cartItems.forEach((item, index) => {
              const product = products_array.filter((p) => {
                return p.id === item.id;
              })[0];

              productosList += `- ${item.quant} ${
                product.title
              }  ${formatter.format(item.quant * product.price)}CLP ${salto}`;

              precio_total += (item.quant * product.price);
            });

            let text = `*Hola Casa Sanchez, quiero hacer un pedido de:*${salto}${productosList}${salto} *Total a pagar: ${formatter.format(precio_total) }*`;

            window.location = `https://wa.me/56937559270?text=${text}`;
          }}
          className="text-s text-bold-500 background-verde card-producto-buy"
        >
          Comprar
        </button>
      </div>

      <Footer />
    </>
  );
};
