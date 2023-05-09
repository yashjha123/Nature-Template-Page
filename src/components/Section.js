import { forwardRef, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";

const Section = ({
  refs,
  current,
  index,
  label,
  bgcolor,
  txtcolor,
  bgImage,
}) => {
  return (
    <div
      className={`slide ${index < current ? "cover" : ""} ${
        index == current ? "active" : ""
      }`}
      style={{
        transform: `translateY(${100}vh) scale(0.95)`,
        color: txtcolor,
        backgroundColor: bgcolor,
        // backgroundImage: `url(${require(bgImage)})`
        backgroundImage: `url(${bgImage})`,
      }}
    >
        <div className={`backgroundFilter ${index < current ? "transCover" : ""} ${
        index == current ? "transActive" : ""
      }`}>
      <Container>
          <div className="hero-content">
            <b><h2><l>{`${index+1}`}</l><sup>/5</sup></h2></b>
            <div className="hero-base">
            <h1 className="hero-title">{label}</h1>
            Nature always wear the colour of spirit.
            </div>
          </div>
      </Container>
        </div>
    </div>
  );
};

export default Section;
