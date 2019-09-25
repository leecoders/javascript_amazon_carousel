import manageUserPageTemplate from "./template.js";
import { $ } from "../../utils/util.js";

class ManageUserPage {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.render();
  }

  render() {
    this.parentElement.insertAdjacentHTML("beforeend", manageUserPageTemplate);
  }
}

export { ManageUserPage };
