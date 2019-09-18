import { LowerCarousel } from "./LowerCarousel/LowerCarousel.js";
import mainCarouselTemplate from "./template.js";
import { $, getImages } from "../../util/util.js";

class MainCarousel {
  constructor(parentElement, mainImagesObj) {
    this.parentElement = parentElement;
    this.mainImagesObj = mainImagesObj;
  }

  render = () => {
    this.parentElement.innerHTML = mainCarouselTemplate;
    const mainImages = getImages(this.mainImagesObj);
    const lowerCarousel = new LowerCarousel(
      $(".main-carousel-second-container"),
      mainImages,
      mainImages.length,
      -60
    );
    lowerCarousel.render();
  };
}

export { MainCarousel };
