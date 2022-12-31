import { useState, useEffect } from "react";
import { Header } from "../components/Layout/Header";
import { Footer } from "../components/Layout/Footer";
import { useParams } from "react-router-dom";
import { products_array } from "../hooks/products_storage";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { cartAddItem, addToCartLocalStorage } from "../hooks/cart";

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

  return (
    <>
      <Header />
      <div className=" category-tittle background-rosado ">Salsa</div>
      <div className="category-grid">
        {category.map((item) => (
          <div className="category-card">
            <img className="category-card-img" src={item.image} alt="" />
            <button
              onClick={() => {
                addToCartLocalStorage(
                  item.id,1
                )
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
              <h5>SALSA</h5>
              <h4>{item.title}</h4>
              <h3>$ {item.price} CLP</h3>
            </span>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};
