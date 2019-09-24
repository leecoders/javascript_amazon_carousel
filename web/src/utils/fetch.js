const fetchSignInResult = (id, password) => {
  return fetch("http://localhost:3000/signin/submit", {
    method: "POST",
    body: JSON.stringify({ id, password }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(response => response) // true or false
    .catch(error => "error");
};

export { fetchSignInResult };
