import Image from "next/image";
import { useState } from "react";
import { Carousel } from "react-bootstrap";

const Hero = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      indicators={false}
      interval={null}
    >
      <Carousel.Item>
        <div className="row hero-bg-color ">
          <div className="col-lg-6">
            <img src="/fashion.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div
              className="text-white hero-text"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0)",
              }}
            >
              <h1 className="display-4">
                <strong>Say "Hello, world!"</strong>
              </h1>
              <p className="lead">
                Custom Developer Shirts, Hoodies, & more...{" "}
              </p>

              <p className="lead mt-2">
                <a
                  className="btn btn-primary btn-lg btn-custom"
                  href="#"
                  role="button"
                >
                  Shop Now
                </a>
              </p>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="row hero-bg-color-2">
          <div className="col-lg-6">
            <img src="/climber.png" className="d-block w-100" alt="..." />
          </div>
          <div className="col-lg-6  order-lg-first">
            <div
              className="text-white hero-text"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0)",
              }}
            >
              <h1 className="display-4">
                <strong>Made with love</strong>
              </h1>
              <p className="lead">
                Using NextJS, React, Bootstrap, and Stripe...
              </p>
              <p className="lead mt-2">
                <a
                  className="btn btn-primary btn-lg btn-custom"
                  href="https://www.chriswarren.tech"
                  role="button"
                >
                  Portfolio
                </a>
              </p>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
