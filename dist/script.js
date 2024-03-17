const inputSearch = document.getElementById("inputSearch");
const btn = document.getElementById("btn");

const phoneContainer = document.getElementById("phoneContainer");

async function showResult(showMore) {
  console.log(inputSearch.value);
  let respons = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=" +
      inputSearch.value
  );
  let data = await respons.json();
  console.log(data);

  phoneContainer.innerHTML = "";
  for (let i = 0; i < data.data.length; i++) {
    let card = phones(data.data[i]);
  }

//   let button = document.createElement("button");
//   button.classList.add(
//     "bg-indigo-600",
//     "p-5",
//     "rounded-3xl",
//     "shadow-xl"
//   );
//   phoneContainer.appendChild(button);
}

function phones(data) {
  const phones = data;

  console.log(phones);
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
    <img src="${phones.image}">
    <h1 class="text-2xl font-bold">${phones.brand}</h1>
    <p class="text-center w-[360px] text-xl">There are many variations of passages of available, but the majority have suffered</p>
    <Button  class="bg-indigo-600 text-white p-5 rounded-lg text-xs font-bold">SHOW DETAILS</Button>
    
    `;

  phoneContainer.appendChild(div);
  // console.log(phoneContainer);
}

btn.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default form submission
  showResult(false);
});

