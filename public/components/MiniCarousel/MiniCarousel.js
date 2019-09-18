import { SlideCarousel } from "../SlideCarousel/SlideCarousel.js";
import miniCarouselTemplate from "./template.js";
import { $ } from "../../util/util.js";

class MiniCarousel {
  constructor(parentElement, miniImages, listCnt, leftEnd, transDist = 0) {
    this.parentElement = parentElement;
    this.miniCarouselTemplate = miniCarouselTemplate;
    this.miniImages = miniImages;
    this.listCnt = listCnt;
    this.leftEnd = leftEnd;
    this.transDist = transDist;
    this.intervalId = undefined;
  }

  startInterval = slideCarousel => {
    this.intervalId = setInterval(slideCarousel.moveImagesToRight, 3000);
  };

  stopInterval = () => {
    clearInterval(this.intervalId);
  };

  restartInterval = slideCarousel => {
    this.stopInterval();
    this.startInterval(slideCarousel);
  };

  render = () => {
    const slideCarousel = new SlideCarousel(
      this.parentElement,
      this.miniCarouselTemplate,
      this.miniImages,
      this.listCnt,
      this.leftEnd,
      this.transDist,
      "#mini-carousel-image-deque"
    );
    slideCarousel.render();
    this.startInterval(slideCarousel);
    $("#mini-carousel-left-button").addEventListener("click", () => {
      slideCarousel.moveImagesToLeft();
      this.restartInterval(slideCarousel);
    });
    $("#mini-carousel-right-button").addEventListener("click", () => {
      slideCarousel.moveImagesToRight();
      this.restartInterval(slideCarousel);
    });
  };
}

export { MiniCarousel };
