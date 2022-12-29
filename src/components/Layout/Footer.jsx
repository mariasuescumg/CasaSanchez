import React from "react";
import LogoCS from "../../assets/image/logo-cs.png";
import FC from "../../assets/image/Facebook.png";
import IG from "../../assets/image/Instagram.png";
import WP from "../../assets/image/whatsapp.png";

export const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer-izq">
        <div className="footer-redes">
          <img className="footer-redes__ico" src={FC} alt="Facebook" />
          <img className="footer-redes__ico" src={IG} alt="Instagram" />
          <img className="footer-redes__ico" src={WP} alt="Whatsapp" />
        </div>
      </div>
      <div className="footer-logo">
        <img src={LogoCS} alt="Logo Casa Sanchez" />
      </div>
    </div>
  );
};
