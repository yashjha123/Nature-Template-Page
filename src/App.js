import { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./App.css";
import ContextBox from "./components/ContextBox";
import Footer from "./components/Footer";
import LeftSlider from "./components/LeftSlider";
import MyNavbar from "./components/MyNavbar";
import Section from "./components/Section";

function App({ ind, setInd }) {
  const [offset, setOffset] = useState(0);
  const index = useRef(ind);
  const nslides = 5;
  const setIndex = (val) => {
    index.current = val;
    setInd(val);
  };

  let isAnimating = false;

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    // const
    const onMouseScroll = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const Delta = Math.sign(e.deltaY / 300);

      if (isAnimating) {
        return false;
      }
      if (Delta == 1) {
        nextSlide()
      } else {
        prevSlide()
      }

      isAnimating = true;
      setTimeout(() => (isAnimating = false), 0.5 * 1000);
      return false;
    };

    window.removeEventListener("wheel", onMouseScroll);
    window.addEventListener("wheel", onMouseScroll, { passive: false });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onMouseScroll);
    };
  }, []);
  const config = {
    delta: 10, // min distance(px) before a swipe starts. *See Notes*
    preventScrollOnSwipe: false, // prevents scroll during swipe (*See Details*)
    trackTouch: true, // track touch input
    trackMouse: false, // track mouse input
    rotationAngle: 0, // set a rotation angle
    swipeDuration: Infinity, // allowable duration of a swipe (ms). *See Notes*
    touchEventOptions: { passive: true }, // options for touch listeners (*See Details*)
  };
  const nextSlide = ()=>{
    if (index.current >= nslides - 1) {
      setIndex(nslides - 1);
    } else {
      setIndex(index.current + 1);
    }
  }
  const prevSlide = ()=>{
    if (index.current < 1) {
      setIndex(0);
    } else {
      setIndex(index.current - 1);
    }
  }
  const handlers = useSwipeable({
    onSwipedUp: (eventData) => {
      nextSlide()
    },
    onSwipedDown: (eventData)=>{
      prevSlide()
    },
    ...config,
  });
  return (
    <div className="App" {...handlers}>
      <MyNavbar />
      <LeftSlider current={index.current} />
      <Section
        index={0}
        current={index.current}
        txtcolor="white"
        bgcolor="white"
        label={`Adopt the pace of nature.`}
        bgImage="images/image2.jpg"
      />
      <Section
        index={1}
        current={index.current}
        txtcolor="white"
        bgcolor="white"
        label="Harmonize with Nature's Flow: Unleash your Potential."
        bgImage="images/image6.jpg"
      />

      <Section
        index={2}
        current={index.current}
        txtcolor="white"
        label="Sometimes, nature is all you need."
        bgImage="images/image2.jpeg"
      />

      <Section
        index={3}
        current={index.current}
        txtcolor="white"
        label="Embrace Nature's Rhythm: Find Your Inner Balance."
        bgImage="images/img.jpg"
      />

      <Section
        index={4}
        current={index.current}
        txtcolor="white"
        label="Sync with Nature's Pulse: Awaken your True Essence."
        bgImage="images/image7.jpg"
      />
      <Footer />
      <ContextBox next={nextSlide} prev={prevSlide} />
    </div>
  );
}

export default App;
