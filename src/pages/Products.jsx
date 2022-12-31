import { useState, useEffect } from "react";
import { Header } from "../components/Layout/Header";
import { Footer } from "../components/Layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { products_array } from "../hooks/products_storage";

export const Products = () => {
  const [quant, setQuant] = useState(1);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const product_filtro = products_array.filter((item) => {
      return item.id == id;
    })[0];
    setProduct(product_filtro);
  }, []);

  return (
    <>
      <Header />
      {id}
      <div className="productos">
        <img className="productos-img" src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolores
          ab autem alias debitis explicabo illo voluptatem quibusdam cupiditate
          rem, iste dolorum nisi est! Numquam ipsam culpa impedit ad sed?
        </p>
        <h1>$ {product.price} CLP</h1>

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
