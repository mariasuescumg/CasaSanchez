import { Header } from "../components/Layout/Header";
import { Footer } from "../components/Layout/Footer";
import SALSA1 from "../assets/image/productimage/salsa1.jpeg";

export const ProductGrid = () => {
  return (
    <>
      <Header />
      <div className=" category-tittle background-rosado ">Salsa</div>
      <div className="category-grid">
        <div className="category-card">
          <img className="category-card-img" src={SALSA1} alt="" />
          <button
            onClick={() => {
              alert("coma toche");
            }}
            className="category-agg"
          >
            +
          </button>
          <h5>SALSA</h5>
          <h4>CHILE DE ARBOL</h4>
          <h3>$6.500 PCL</h3>
        </div>
        <div className="category-card">
          <img className="category-card-img" src={SALSA1} alt="" />
          <button
            onClick={() => {
              alert("coma toche");
            }}
            className="category-agg"
          >
            +
          </button>
          <h5>SALSA</h5>
          <h4>CHILE DE ARBOL</h4>
          <h3>$6.500 PCL</h3>
        </div>
        <div className="category-card">
          <img className="category-card-img" src={SALSA1} alt="" />
          <button
            onClick={() => {
              alert("coma toche");
            }}
            className="category-agg"
          >
            +
          </button>
          <h5>SALSA</h5>
          <h4>CHILE DE ARBOL</h4>
          <h3>$6.500 PCL</h3>
        </div>
        <div className="category-card">
          <img className="category-card-img" src={SALSA1} alt="" />
          <button
            onClick={() => {
              alert("coma toche");
            }}
            className="category-agg"
          >
            +
          </button>
          <h5>SALSA</h5>
          <h4>CHILE DE ARBOL</h4>
          <h3>$6.500 PCL</h3>
        </div>
      </div>
      <Footer />
    </>
  );
};
