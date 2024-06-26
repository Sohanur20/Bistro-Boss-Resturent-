/* eslint-disable react/prop-types */

import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -70, max: 70 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
      >
        <div className="hero h-[600px]">
          <div className="hero-overlay  bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
              <p className="mb-5">Would you like to try a dish?</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
