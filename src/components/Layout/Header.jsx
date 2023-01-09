import React from "react";
import LogoCS from "../../assets/image/logo-cs.png";
import { Footer } from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faList,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = React.useState(false); //creacion de un useState de tipo Boolean para hacer que aparezca y desaparezca el menu mobile
  return (
    <>
      <header className="header">
        <button className="sidebar-open" type="button" onClick={() => setOpen(!isOpen)}>
          <FontAwesomeIcon icon={faList} />
        </button>
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
                window.location = "https://wa.me/56937559270";
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

      <div className={isOpen ? "sidebar-mobile opened" : "sidebar-mobile"}>
        <button className="sidebar-close" type="button" onClick={() => setOpen(!isOpen)}>
          <FontAwesomeIcon icon={faClose} />
        </button>
        <div>
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
                window.location = "https://wa.me/56937559270";
              }}
            >
              Contacto
            </li>
          </ul>
        </div>

        <Footer/>
        
      </div>
    </>
  );
};
