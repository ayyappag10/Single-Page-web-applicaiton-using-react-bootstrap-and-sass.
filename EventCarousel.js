import React from "react";
import { Carousel } from "react-bootstrap";

const EventCarousel = () => {
  return (
    <div className="event-carousel-container" id="event-carousel-id">
      <Carousel className="event-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/screen-shot-2019-02-18-at-11-00-25-am.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/screen-shot-2019-02-18-at-11-00-25-am.png"
            alt="second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/screen-shot-2019-02-18-at-11-00-25-am.png"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/screen-shot-2019-02-18-at-11-00-25-am.png"
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/screen-shot-2019-02-18-at-11-00-25-am.png"
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
      <img id="mute-icon" src="assets/group-45.png" alt="img"></img>
      <img id="play-icon" src="assets/group-48.png" alt="img"></img>
    </div>
  );
};
export default EventCarousel;
