import { SlideCarousel } from "../../SlideCarousel/SlideCarousel.js";
import lowerCarouselTemplate from "./template.js";
import { $ } from "../../../util/util.js";

class LowerCarousel {
  constructor(parentElement, lowerImages, listCnt, leftEnd, transDist = 0) {
    this.parentElement = parentElement;
    this.lowerCarouselTemplate = lowerCarouselTemplate;
    this.lowerImages = lowerImages;
    this.listCnt = listCnt;
    this.leftEnd = leftEnd;
    this.transDist = transDist;
  }
  render = () => {
    const slideCarousel = new SlideCarousel(
      this.parentElement,
      this.lowerCarouselTemplate,
      this.lowerImages,
      this.listCnt,
      this.leftEnd,
      this.transDist,
      "#lower-carousel-image-deque"
    );
    slideCarousel.render();
  };
}
