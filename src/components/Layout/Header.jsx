import React from "react";
import LogoCS from "../../assets/image/logo-cs.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="header">
        <img className="header-logo" src={LogoCS} alt="Logo Casa Sanchez Cl" />
        <div className="header-nav">
          <ul className="header-nav-list">
            <li
              className="header-nav-items text-m"
              onClick={() => {
                navigate("/");
              }}
            >
              Inicio
            </li>
            <li
              className="header-nav-items text-m"
              onClick={() => {
                navigate("/category/gastronomia");
              }}
            >
              Gastronomia
            </li>
            <li
              className="header-nav-items text-m"
              onClick={() => {
                navigate("/category/arte");
              }}
            >
              Arte
            </li>
            <li
              className="header-nav-items text-m"
              onClick={() => {
                navigate("/category/cultura");
              }}
            >
              Cultura
            </li>
            <li
              className="header-nav-items text-m"
              onClick={() => {
                window.location = "https://wa.me/56932382987";
              }}
            >
              Contacto
            </li>
          </ul>
        </div>
        <div
          onClick={() => {
            navigate("/cart");
          }}
          className="header-cart"
        >
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
      </header>

      {/*<sidebar>
        <div className="logomobile">
          <img src={LogoCS} alt="" />
        </div>
        <div className="cardmobile">
        <FontAwesomeIcon icon={faShoppingCart} />
        </div>
      </sidebar>*/}
    </>
  );
};
