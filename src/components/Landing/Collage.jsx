import React from "react";
import Collage1 from "../../assets/image/collage1.jpg";
import Collage2 from "../../assets/image/collage2.jpg";
import Collage3 from "../../assets/image/collage3.jpg";
// se importan los elementos necesarios para la creacion del collage 
export default function Collage() {
  return (
    <div className="collage container">
      <div className="collage-item">
        <div className="collage-img">
          <img src={Collage1} alt="" />
        </div>
        <div className="collage-text background-rosado ">
          <h3> Arte</h3>
          <p className="text-s">
          Compuesto por creencias, supersticiones y tradiciones, fabricadas manualmente con la produccion artesanal caracaterizados por temas esteticos y comunicativos.
          </p>
        </div>
      </div>

      <div className="collage-item">
        
        <div className="collage-text background-verde ">
          <h3> Gastronomia</h3>
          <p className="text-s">
          Técnicas culinarias de México que forman parte de las tradiciones y vida común de sus habitantes, enriquecida por las aportaciones de las distintas regiones del país.
          </p>
        </div>
        <div className="collage-img">
          <img src={Collage2} alt="" />
        </div>
      </div>

      <div className="collage-item">
        <div className="collage-img">
          <img src={Collage3} alt="" />
        </div>
        <div className="collage-text background-rosado ">
          <h3>Cultura</h3>
          <p className="text-s">
          Es una combinación de varias culturas, desde la española que llegó con la Conquista, las diversas culturas del México prehispánico e incluso algunos elementos de las culturas africanas que llegaron a ciertas regiones al ser traídas como esclavos.
          </p>
        </div>
      </div>
    </div>
  );
}
