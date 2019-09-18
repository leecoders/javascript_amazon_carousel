import { LowerCarousel } from "./LowerCarousel/LowerCarousel.js";
import mainCarouselTemplate from "./template.js";
import { $, getImages } from "../../util/util.js";

class MainCarousel {
  constructor(parentElement, mainImagesObj) {
    this.parentElement = parentElement;
    this.mainImagesObj = mainImagesObj;
  }

  setTitle = () => {
    for (let i = 0; i < this.ulElement.children.length; ++i) {
      const li = this.ulElement.children[i];
      const title = li.children[1].children[0];
      // title.innerText = this.lowerImages;
    }
    $(".lower-text-title");
  };
  setHead = () => {
    $(".lower-text-head");
  };
  setBody = () => {
    $(".lower-text-body");
  };
  setTail = () => {
    $(".lower-text-tail");
  };
  setLink = () => {};
  setText = () => {
    this.ulElement = $("#lower-carousel-image-deque");
    this.setTitle();
    this.setHead();
    this.setBody();
    this.setTail();
    this.setLink();
  };

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
