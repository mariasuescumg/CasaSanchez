import React from "react";
//importo las img del logo y las redes sociales
import LogoCS from "../../assets/image/logo-cs.png";
import FC from "../../assets/image/Facebook.png";
import IG from "../../assets/image/Instagram.png";
import WP from "../../assets/image/whatsapp.png";

export const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer-izq">
        <div className="footer-redes">
          <img onClick={() => {
                window.location = "https://es-la.facebook.com/";
              }} className="footer-redes__ico" src={FC} alt="Facebook" />
          <img onClick={() => {
                window.location = "https://instagram.com/casasanchez.cl?igshid=OGQ2MjdiOTE=";
              }} className="footer-redes__ico" src={IG} alt="Instagram" />
          <img onClick={() => {
                window.location = "https://wa.me/56937559270";
              }} className="footer-redes__ico" src={WP} alt="Whatsapp" />
        </div>
      </div>
      <div className="footer-logo">
        <img src={LogoCS} alt="Logo Casa Sanchez" />
      </div>
    </div>
  );
};
