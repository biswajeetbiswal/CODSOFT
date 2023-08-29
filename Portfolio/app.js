//Dark mode
let dark = document.getElementById("dark");
function changeMode() {
  document.body.classList.toggle("dark-theme");
  //dark.src = "images/images.png";
  if (document.body.classList.contains("dark-theme")) {
    dark.src = "images/download1.png";
  } else {
    dark.src = "images/download.png";
  }
}
//call function
dark.addEventListener("click", changeMode);

//responsive navbar
const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");

hamburger.addEventListener("click", () => {
  links.classList.toggle("active");
});

document.querySelectorAll(".link").forEach((n) =>
  n.addEventListener("click", () => {
    links.classList.remove("active");
  })
);
