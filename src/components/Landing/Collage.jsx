import React from "react";
import Collage1 from "../../assets/image/collage1.jpg";
import Collage2 from "../../assets/image/collage2.jpg";
import Collage3 from "../../assets/image/collage3.jpg";

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad saepe
            commodi voluptatem cupiditate repudiandae, laboriosam nisi,
            blanditiis aliquid iusto ratione nulla minus, id provident laborum.
            Quaerat id optio tenetur porro.
          </p>
        </div>
      </div>

      <div className="collage-item">
        
        <div className="collage-text background-verde ">
          <h3> Gastronomia</h3>
          <p className="text-s">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad saepe
            commodi voluptatem cupiditate repudiandae, laboriosam nisi,
            blanditiis aliquid iusto ratione nulla minus, id provident laborum.
            Quaerat id optio tenetur porro.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad saepe
            commodi voluptatem cupiditate repudiandae, laboriosam nisi,
            blanditiis aliquid iusto ratione nulla minus, id provident laborum.
            Quaerat id optio tenetur porro.
          </p>
        </div>
      </div>
    </div>
  );
}
