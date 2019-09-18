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
      title.innerText = this.lowerImages[i].title;
      title.style.background = this.lowerImages[i].color;
    }
  };
  setHead = () => {
    for (let i = 0; i < this.ulElement.children.length; ++i) {
      const li = this.ulElement.children[i];
      const head = li.children[1].children[1];
      head.innerText = this.lowerImages[i].head;
    }
  };
  setBody = () => {
    for (let i = 0; i < this.ulElement.children.length; ++i) {
      const li = this.ulElement.children[i];
      const body = li.children[1].children[2];
      body.innerText = this.lowerImages[i].body;
    }
  };
  setTailAndLink = () => {
    for (let i = 0; i < this.ulElement.children.length; ++i) {
      const li = this.ulElement.children[i];
      const tail = li.children[1].children[3];
      const aTemplate = `
        <a href="${this.lowerImages[i].link}">${this.lowerImages[i].tail}</a>
        <button type="button" class="lower-carousel-triangle"></button>`;
      tail.innerHTML = aTemplate;
    }
  };
  setText = () => {
    this.ulElement = $("#lower-carousel-image-deque");
    this.setTitle();
    this.setHead();
    this.setBody();
    this.setTailAndLink();
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
