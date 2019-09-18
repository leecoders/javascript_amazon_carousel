import { LowerCarousel } from "./LowerCarousel/LowerCarousel.js";
import mainCarouselTemplate from "./template.js";
import { $ } from "../../util/util.js";

class MainCarousel {
  constructor(parentElement, mainImagesObj) {
    this.parentElement = parentElement;
    this.mainImagesObj = mainImagesObj;
  }
  render = () => {
    this.parentElement.innerHTML = mainCarouselTemplate;
  };
}

export { MainCarousel };
