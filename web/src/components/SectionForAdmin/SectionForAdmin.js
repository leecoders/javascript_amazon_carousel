import sectionForAdminTemplate from "./template.js";
import { $ } from "../../utils/util.js";

class SectionForAdmin {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.render();
  }

  render() {
    this.parentElement.insertAdjacentHTML("beforeend", sectionForAdminTemplate);
    this.sectionForAdmin = $(".section-for-admin-container");
    this.sectionForAdmin.style.visibility = "hidden";
  }
}

export { SectionForAdmin };
