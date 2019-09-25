import { $, toggleUserClickState } from "../../utils/util.js";

class ListUser {
  constructor(parentElement, userIdx) {
    this.parentElement = parentElement;
    this.userIdx = userIdx;
    this.render();
  }

  render = () => {
    console.log(this.parentElement);
    this.parentElement.innerHTML = /*html*/ `
    <div class="user-container" id="user-${this.userIdx}">
        <div class="user-image"></div>
        <div class="user-info">
            <div class="user-id" id="user-id-${this.userIdx}">아이디</div>
            <div class="user-name" id="user-name-${this.userIdx}">이름</div>
            <div class="user-grade" id="user-grade-${this.userIdx}">등급</div>
        </div>
        <div class="user-grade-button-container">
            <button class="user-grade-up-button" id="user-grade-up-${this.userIdx}">UP</button>
            <button class="user-grade-down-button" id="user-grade-down-${this.userIdx}">DOWN</button>
        </div>
    </div>
    `;
  };
}

export { ListUser };
