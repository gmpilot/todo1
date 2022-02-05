const divBox = document.querySelector("#div-box");
const name1 = document.querySelector("#name");
const time = document.querySelector("#time");
const budget = document.querySelector("#budget");
const review = document.querySelector("#review");
const submit = document.querySelector("#submit");

const divTbody = document.querySelector("#div-table-body");

const darkMood = document.querySelector("#moon1");
const normalMood = document.querySelector("#sun1");

// dark mood
darkMood.addEventListener("click", function (e) {
  e.preventDefault();
  divBox.classList.add("div-box");
  divBox.classList.remove("div-box2");
  console.log("Welcome Dark Mood");
});
normalMood.addEventListener("click", function (e) {
  e.preventDefault();
  divBox.classList.add("div-box2");
  divBox.classList.remove("div-box");
  console.log("Welcome Normal Mood");
});

// dark mood end

submit.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    name1.value == "" &&
    time.value == "" &&
    budget.value == "" &&
    review.value == ""
  ) {
    alert(" দয়াকরে নাম এবং সময় দেন");
  } else {
    const newRow = document.createElement("tr");

    const newName = document.createElement("th");
    newName.innerHTML = name1.value;
    newRow.appendChild(newName);

    const newTime = document.createElement("th");
    newTime.innerHTML = time.value;
    newRow.appendChild(newTime);

    const newBudget = document.createElement("th");
    newBudget.innerHTML = budget.value;
    newRow.appendChild(newBudget);

    const newReview = document.createElement("th");
    newReview.innerHTML = review.value;
    newRow.appendChild(newReview);

    divTbody.appendChild(newRow);
    console.log(newTime);
  }
});
