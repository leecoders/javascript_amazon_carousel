const serverUrl = "http://localhost:3000/";

const fetchSignInResult = (id, password) => {
  return fetch(serverUrl + "signin/submit", {
    method: "POST",
    body: JSON.stringify({ id, password }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(response => response)
    .catch(error => "error");
};

const fetchAllUsers = () => {
  return fetch(serverUrl + "users/all", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(response => response)
    .catch(error => "error");
};

const fetchGradeChange = (id, destGrade) => {
  return fetch(serverUrl + "users/change-grade", {
    method: "POST",
    body: JSON.stringify({ id, destGrade }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(response => response)
    .catch(error => "error");
};

export { fetchSignInResult, fetchAllUsers, fetchGradeChange };
