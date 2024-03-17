const inputSearch = document.getElementById("inputSearch");
const btn = document.getElementById("btn");
const phoneContainer = document.getElementById("phoneContainer");
const phoneDetails = document.getElementById("phoneDetails");
// const body = document.querySelector("body");

async function showResult(showMore) {
  console.log(inputSearch.value);
  let response = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=" +
      inputSearch.value
  );
  let data = await response.json();
  console.log(data);

  phoneContainer.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    let card = phones(data.data[i]);
  }
}

function phones(data) {
  const phone = data;
  console.log(phone);

  let div = document.createElement("div");
  div.classList.add(
    "bg-white",
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "gap-5",
    "p-5",
    "rounded-3xl",
    "shadow-xl"
  );
  div.innerHTML = `
    <img src="${phone.image}">
    <h1 class="text-2xl font-bold">${phone.phone_name}</h1>
    <p class="text-center w-[360px] text-xl">There are many variations of passages of available, but the majority have suffered</p>
    <button class="show-details-button bg-indigo-600 text-white p-5 rounded-lg text-xs font-bold">SHOW DETAILS</button>
    `;
  phoneContainer.appendChild(div);

  // Attach event listener for the "SHOW DETAILS" button
  div
   
}

btn.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default form submission
  showResult(false);
});

