import { useState, useEffect } from "react";
import { Header } from "../components/Layout/Header";
import { Footer } from "../components/Layout/Footer";
import { useParams } from "react-router-dom";
import { products_array } from "../hooks/products_storage";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { addToCartLocalStorage } from "../hooks/cart";

export const ProductGrid = () => {
  const MySwal = withReactContent(Swal);
  const { categoryName } = useParams();
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const category_filtro = products_array.filter((item) => {
      return item.category == categoryName;
    });
    setCategory(category_filtro);
    console.log(category_filtro);
  }, [categoryName]);

  const navigate = useNavigate();

  const formatter = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  });

  return (
    <>
      <Header />
      <div className=" category-tittle background-rosado ">{categoryName.toUpperCase()}</div>
      <div className="category-grid">
        {/** se le pone .map para recorrer los elementos del array */}
        {category.map((item) => (
          <div className="category-card">
            <img className="category-card-img" src={item.image} alt="" />
            <button
              onClick={() => {
                {/**se llama a la funcion addToCartLocalStorage  que pertenece al hook cart para agregar un elemento al carrito  pasandole el id del producto de uno en uno*/}
                addToCartLocalStorage(
                  item.id,1
                )

                {/** se usa el alert para que el cliente decida si sigue en la grid para escojer mas productos  o lo lleva a la page del carrito con los productos seleccionados */}
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
              }}
              className="category-agg"
            >
              +
            </button>
            <span
              className="category-link"
              onClick={() => {
                navigate(`/product/${item.id}`);
              }}
            >
              {/** se usa el .toUpperCase para que la categoria se muestre en mayuscula */}
              <h5 className="category-nombre">{categoryName.toUpperCase()}</h5>
              {/** se renderiza el titulo del producto y el precio utilizando la funcion para darle format*/}
              <h4 className="text-product">{item.title}</h4>
              <h3>{formatter.format(item.price)} CLP</h3>
            </span>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};
