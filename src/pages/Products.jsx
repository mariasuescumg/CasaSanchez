import { useState, useEffect } from "react";
import { Header } from "../components/Layout/Header";
import { Footer } from "../components/Layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { products_array } from "../hooks/products_storage";
import { addToCartLocalStorage } from "../hooks/cart";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

export const Products = () => {
  const MySwal = withReactContent(Swal);// instancia para el uso del sweetalert
  const [quant, setQuant] = useState(1);// state de la cantidad de seleccion para agg al carrito
  const [product, setProduct] = useState({});// state donde se almacenan la info del producto basado en el id 
  const { id } = useParams();// se trae un parametro de la url en este caso el id del producto
  const navigate = useNavigate();// nos ayuda a navegar en otras rutas 

  // filtra el producto que este idetificado con el id que este en el parametro de la url
  useEffect(() => {
    const product_filtro = products_array.filter((item) => {
      return item.id === id;
    })[0];
    setProduct(product_filtro);
  }, [id]);

// constate para formatear y ponerle punto al price esta funcion  funcion copiada de https://www.tutofox.com/javascript/como-convertir-valor-a-formato-moneda-en-javascript/
  const formatter = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  });

  return (
    <>
      <Header />
      {/** informacion traida del archivo json creador products_storage.js */}
      <div className="productos">
        <img className="productos-img" src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        {/** Descripcion del producto pendiente por el enviar el cliente */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolores
          ab autem alias debitis explicabo illo voluptatem quibusdam cupiditate
          rem, iste dolorum nisi est! Numquam ipsam culpa impedit ad sed?
        </p>
        <h1>{formatter.format(product.price)}CLP</h1>

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
          <button onClick={() =>{
            addToCartLocalStorage(product.id, quant)
            MySwal.fire({
              title: "Producto agregado al carrito",
              text: "desea ir al carrito",
              showCancelButton: true,
              confirmButtonColor: "#1D7B7A",
              cancelButtonColor: "#D73E5C",
              confirmButtonText: "Si",
              cancelButtonText: "Seguir comprando",
            }).then((result) => {
              if (result.isConfirmed) {
                navigate(`/cart`)
              }
            });
          }} className="background-verde  productos-aggcard">
            <FontAwesomeIcon icon={faShoppingCart} />
            <p>Agregar al carro</p>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};
