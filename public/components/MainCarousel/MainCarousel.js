import { LowerCarousel } from "./LowerCarousel/LowerCarousel.js";
import { UpperCarousel } from "./UpperCarousel/UpperCarousel.js";
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
    const upperCarousel = new UpperCarousel(
      $(".main-carousel-first-container"),
      this.mainImagesObj
    );
    lowerCarousel.render();
    upperCarousel.render();
  };
}

export { MainCarousel };
