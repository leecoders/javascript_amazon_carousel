import { $ } from "../../util/util.js";

class SlideCarousel {
  constructor(
    parentElement,
    slideCarouselTemplate,
    slideImages,
    listCnt,
    leftEnd,
    transDist = 0,
    slideImagesDequeSelector
  ) {
    this.parentElement = parentElement;
    this.slideCarouselTemplate = slideCarouselTemplate;
    this.slideImages = slideImages;
    this.listCnt = listCnt;
    this.leftEnd = leftEnd;
    this.listWidth = -leftEnd;
    this.transDist = transDist;
    this.slideImagesDequeSelector = slideImagesDequeSelector;
  }

  renderImages = () => {
    for (let i = 0; i < this.listCnt; ++i) {
      $(this.slideImagesDequeSelector).children[
        i
      ].firstChild.src = this.slideImages[i].src;
    }
  };

  moveImagesToLeft = () => {
    this.leftEnd -= this.listWidth;
    this.transDist += this.listWidth;
    const cloneNode = $(this.slideImagesDequeSelector).children[
      this.listCnt - 1
    ].cloneNode(true);
    $(this.slideImagesDequeSelector).insertAdjacentElement(
      "afterbegin",
      cloneNode
    );
    $(this.slideImagesDequeSelector).style.left = this.leftEnd + "rem";
    $(
      this.slideImagesDequeSelector
    ).style.transform = `translate(${this.transDist}rem)`;
    $(this.slideImagesDequeSelector).removeChild(
      $(this.slideImagesDequeSelector).children[this.listCnt]
    );
  };

  moveImagesToRight = () => {
    this.leftEnd += this.listWidth;
    this.transDist -= this.listWidth;
    const cloneNode = $(this.slideImagesDequeSelector).children[0].cloneNode(
      true
    );
    $(this.slideImagesDequeSelector).insertAdjacentElement(
      "beforeend",
      cloneNode
    );
    $(this.slideImagesDequeSelector).style.left = this.leftEnd + "rem";
    $(
      this.slideImagesDequeSelector
    ).style.transform = `translate(${this.transDist}rem)`;
    $(this.slideImagesDequeSelector).removeChild(
      $(this.slideImagesDequeSelector).children[0]
    );
  };

  render = () => {
    this.parentElement.innerHTML = this.slideCarouselTemplate;
    this.renderImages();
  };
}

export { SlideCarousel };
