import manageItemPageTemplate from "./template.js";
import { $ } from "../../utils/util.js";

class ManageItemPage {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.render();
  }

  render() {
    this.parentElement.insertAdjacentHTML("beforeend", manageItemPageTemplate);
  }
}

export { ManageItemPage };
