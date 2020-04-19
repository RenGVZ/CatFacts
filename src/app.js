import 'bootstrap';
import './scss/app.scss';

const facts = document.querySelector("#facts");
const listItem = document.querySelectorAll(".list-item");
const submit = document.querySelector("#submit");

submit.addEventListener('click', function() {

  function getFacts() {
    fetch("https://catfact.ninja/fact")
      .then(response => response.json())
      .then((data) => {
          listItem.forEach((item) => {
            const apiResponse = `<li>${data.fact}</li>`;
            item.insertAdjacentHTML("beforebegin", apiResponse);
      });
    });
  };
  getFacts();
});