import "./carousel.scss";
import { FcNext, FcPrevious } from "../../../assets/icons";
import { useState } from "react";
import { dataProject as data } from "../../data/menu.data";
import clsx from "clsx";

function Carousel() {
  const [state, setState] = useState(1);
  const handleNext = () => {
    if (state >= data.length - 1) {
      return setState((state) => (state = data.length - 1));
    }
    return setState((state) => (state = state + 1));
  };
  const handlePrev = () => {
    if (state <= 0) {
      return setState((state) => (state = 0));
    }
    return setState((state) => (state = state - 1));
  };

  return (
    <div id="carouselComponent " className="carousel">
      <div id="#carousel-items" className="carousel-inner">
        <button
          className="next"
          onClick={handleNext}
          disabled={state === data.length - 1 ? true : false}
        >
          <FcNext />
        </button>
        <button
          className="prev"
          onClick={handlePrev}
          disabled={state === 0 ? true : false}
        >
          <FcPrevious />
        </button>
        {data.map((item, index) => {
          const {
            images: { sm },
            name,
          } = item;
          return (
            <div
              className={clsx(
                "carousel-item",
                state === index
                  ? "carousel-item--active"
                  : state < index
                  ? "carousel-item--prev"
                  : "carousel-item--next"
              )}
              key={index}
            >
              <img src={sm} alt={name} />
            </div>
          );
        })}
      </div>
      <div className="carousel-indicators">
        {data.map((item, index) => {
          return (
            <button
              type="button"
              data-target="#carouselComponent"
              data-slide-to={index}
              aria-current={clsx(state === index ? "true" : "false")}
              aria-label="Slide 1"
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
