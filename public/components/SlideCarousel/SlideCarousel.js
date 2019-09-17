import { $ } from "../../util/util.js";

class SlideCarousel {
  constructor(
    parentElement,
    slideCarouselTemplate,
    slideImages,
    listCnt,
    leftEnd,
    transDist
  ) {
    this.parentElement = parentElement;
    this.slideCarouselTemplate = slideCarouselTemplate;
    this.slideImages = slideImages;
    this.listCnt = listCnt;
    this.leftEnd = leftEnd;
    this.transDist = transDist;
  }

  renderImages = () => {
    for (let i = 0; i < this.listCnt; ++i) {
      $(".img-deque").children[i].firstChild.src = this.slideImages[i].src;
    }
  };

  moveImagesToLeft = () => {
    this.leftEnd -= 20;
    this.transDist += 20;
    const cloneNode = $(".img-deque").children[this.listCnt - 1].cloneNode(
      true
    );
    $(".img-deque").insertAdjacentElement("afterbegin", cloneNode);
    $(".img-deque").style.left = this.leftEnd + "rem";
    $(".img-deque").style.transform = `translate(${this.transDist}rem)`;
    $(".img-deque").removeChild($(".img-deque").children[this.listCnt]);
  };

  moveImagesToRight = () => {
    this.leftEnd += 20;
    this.transDist -= 20;
    const cloneNode = $(".img-deque").children[0].cloneNode(true);
    $(".img-deque").insertAdjacentElement("beforeend", cloneNode);
    $(".img-deque").style.left = this.leftEnd + "rem";
    $(".img-deque").style.transform = `translate(${this.transDist}rem)`;
    $(".img-deque").removeChild($(".img-deque").children[0]);
  };

  render = () => {
    console.log(this.slideCarouselTemplate);
    this.parentElement.innerHTML = this.slideCarouselTemplate;
    this.renderImages();
  };
}

export { SlideCarousel };
