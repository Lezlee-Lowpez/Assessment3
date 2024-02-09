function favoriteColor(evt) {
  alert("My favorite color is Blue!");
}

function favoritePlace(evt) {
  alert("My favorite place is basically any National Park");
}

function favoriteRitual(evt) {
  alert("Sadly, i'm not a witch so I do not have a favorite ritual :(");
}

const colorB = document.querySelector("#color");
const placeB = document.querySelector("#place");
const ritualB = document.querySelector("#ritual");

colorB.addEventListener("click", favoriteColor);
placeB.addEventListener("click", favoritePlace);
ritualB.addEventListener("click", favoriteRitual);
