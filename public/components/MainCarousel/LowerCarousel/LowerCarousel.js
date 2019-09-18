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
    this.ulElement = undefined;
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
    $("#lower-carousel-left-button").addEventListener("click", () => {
      slideCarousel.moveImagesToLeft();
    });
    $("#lower-carousel-right-button").addEventListener("click", () => {
      slideCarousel.moveImagesToRight();
    });
    this.setText();
  };
}

export { LowerCarousel };
