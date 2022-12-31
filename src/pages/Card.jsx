import { useState } from "react";
import { Header } from "../components/Layout/Header";
import { Footer } from "../components/Layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { products_array } from "../hooks/products_storage";
import { cartLocalStorage, cartDeleteItem,cartAddItem,cartRemoveItem } from "../hooks/cart";

export const Card = () => {
  const [cartItems, setCartItem] = useState(cartLocalStorage())
  return (
    <>
      <Header />
      {JSON.stringify(cartItems)}

      <div className="card">
        <div className="card-producto ">
          <img src={""} alt="" />
          <div className="card-producto-descripcion">
            <h3 className="text-xs">nombre del producto</h3>
            <h3 className="text-xs">$6.500clp</h3>
          </div>
          <div className="card-producto-trash">
            <FontAwesomeIcon icon={faTrash} />
            <div className="card-producto-trash-agg">
              <button className="resta">-</button>
              <input className="input" type="text" />
              <button className="suma">+</button>
            </div>
          </div>
        </div>
        <div className="card-producto ">
          <img src={""} alt="" />
          <div className="card-producto-descripcion">
            <h3 className="text-xs">nombre del producto</h3>
            <h3 className="text-xs">$6.500clp</h3>
          </div>
          <div className="card-producto-trash">
            <FontAwesomeIcon icon={faTrash} />
            <div className="card-producto-trash-agg">
              <button className="resta">-</button>
              <input className="input" type="text" />
              <button className="suma">+</button>
            </div>
          </div>
          
        </div>
        <div className="card-producto ">
          <img src={""} alt="" />
          <div className="card-producto-descripcion">
            <h3 className="text-xs">nombre del producto</h3>
            <h3 className="text-xs">$6.500clp</h3>
          </div>
          <div className="card-producto-trash">
            <FontAwesomeIcon icon={faTrash} />
            <div className="card-producto-trash-agg">
              <button className="resta">-</button>
              <input className="input" type="text" />
              <button className="suma">+</button>
            </div>
          </div>
        </div>
        <div className="card-producto ">
          <img src={""} alt="" />
          <div className="card-producto-descripcion">
            <h3 className="text-xs">nombre del producto</h3>
            <h3 className="text-xs">$6.500clp</h3>
          </div>
          <div className="card-producto-trash">
            <FontAwesomeIcon icon={faTrash} />
            <div className="card-producto-trash-agg">
              <button className="resta">-</button>
              <input className="input" type="text" />
              <button className="suma">+</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
