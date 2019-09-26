import { $, toggleUserClickState } from "../../utils/util.js";

class ListItem {
  constructor(parentElement, name, category, summary, idx) {
    this.parentElement = parentElement;
    this.name = name;
    this.category = category;
    this.summary = summary;
    this.idx = idx;
    this.render();
  }

  render = () => {
    this.parentElement.innerHTML = /*html*/ `
    <div class="item-container" id="item-${this.idx}">
        <div class="item-image"></div>
        <div class="item-info">
            <div class="item-name">
                <span class="item-info-title">상품명</span>
                <span class="item-info-content">${this.name}</span>
            </div>
            <div class="item-category">
                <span class="item-info-title">분류</span>
                <span class="item-info-content">${this.category}</span>
            </div>
            <div class="item-summary">
                <span class="item-info-title">요약</span>
                <span class="item-info-content">
                  ${
                    this.summary.length > 50
                      ? this.summary.substring(0, 50) + "..."
                      : this.summary
                  } 
                </span>
            </div>
        </div>
        <div class="item-delete-button-container">
            <button type="button" class="item-delete-button" id="item-delete-button-${
              this.idx
            }"></button>
        </div>
    </div>
    `;
  };
}

export { ListItem };
