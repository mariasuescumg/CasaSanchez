import { useState } from "react";
import SALSA from "../assets/image/productimage/salsa1.jpeg";
import { Header } from "../components/Layout/Header";
import { Footer } from "../components/Layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const Products = () => {
  const [quant, setQuant] = useState(1);
  return (
    <>
      <Header />
      {quant}
      <div className="productos">
        <img className="productos-img" src={SALSA} alt="salsa chile de arbol" />
        <h2>CHILE DE ARBOL</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolores
          ab autem alias debitis explicabo illo voluptatem quibusdam cupiditate
          rem, iste dolorum nisi est! Numquam ipsam culpa impedit ad sed?
        </p>
        <h1>$6.500 PCL</h1>

        <div className="productos-agg">
          <button
            onClick={() => {
              if (quant > 1) {
                setQuant(quant - 1);
              }
            }}
            className="resta background-vino"
          >
            -
          </button>
          <input value={quant} className="input" type="text" />
          <button
            onClick={() => {
              setQuant(quant + 1);
            }}
            className="suma background-vino"
          >
            +
          </button>
        </div>

        <div>
          <button className="background-verde  productos-aggcard">
            <FontAwesomeIcon icon={faShoppingCart} />
            <p>Agregar al carro</p>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};
