import { $ } from "../../util/util.js";

class SlideCarousel {
  constructor(
    parentElement,
    slideCarouselTemplate,
    slideImages,
    listCnt,
    leftEnd,
    transDist = 0,
    slideImageDequeSelector
  ) {
    this.parentElement = parentElement;
    this.slideCarouselTemplate = slideCarouselTemplate;
    this.slideImages = slideImages;
    this.listCnt = listCnt;
    this.leftEnd = leftEnd;
    this.transDist = transDist;
    this.slideImageDequeSelector = slideImageDequeSelector;
  }

  renderImages = () => {
    for (let i = 0; i < this.listCnt; ++i) {
      $(this.slideImageDequeSelector).children[
        i
      ].firstChild.src = this.slideImages[i].src;
    }
  };

  moveImagesToLeft = () => {
    this.leftEnd -= 20;
    this.transDist += 20;
    const cloneNode = $(this.slideImageDequeSelector).children[
      this.listCnt - 1
    ].cloneNode(true);
    $(this.slideImageDequeSelector).insertAdjacentElement(
      "afterbegin",
      cloneNode
    );
    $(this.slideImageDequeSelector).style.left = this.leftEnd + "rem";
    $(
      this.slideImageDequeSelector
    ).style.transform = `translate(${this.transDist}rem)`;
    $(this.slideImageDequeSelector).removeChild(
      $(this.slideImageDequeSelector).children[this.listCnt]
    );
  };

  moveImagesToRight = () => {
    this.leftEnd += 20;
    this.transDist -= 20;
    const cloneNode = $(this.slideImageDequeSelector).children[0].cloneNode(
      true
    );
    $(this.slideImageDequeSelector).insertAdjacentElement(
      "beforeend",
      cloneNode
    );
    $(this.slideImageDequeSelector).style.left = this.leftEnd + "rem";
    $(
      this.slideImageDequeSelector
    ).style.transform = `translate(${this.transDist}rem)`;
    $(this.slideImageDequeSelector).removeChild(
      $(this.slideImageDequeSelector).children[0]
    );
  };

  render = () => {
    this.parentElement.innerHTML = this.slideCarouselTemplate;
    this.renderImages();
  };
}

export { SlideCarousel };
