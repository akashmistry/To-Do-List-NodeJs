// SLICING OUT THE TIME AND TIME ZONE
const date = document.querySelectorAll("#date");
for (const i of date) {
  i.innerText = i.innerText.slice(4, 15);
}
