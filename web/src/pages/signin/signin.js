import { $ } from "../../utils/util.js";
import { fetchSignInResult } from "../../utils/fetch.js";

const loginButton = $("#sign-in-button");
loginButton.addEventListener("click", async () => {
  const id = $("#sign-in-id").value;
  const password = $("#sign-in-password").value;
  const loginResult = await fetchSignInResult(id, password);
  console.log(loginResult);
});
