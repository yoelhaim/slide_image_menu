const toggleSetting = document.querySelector(".toggle_setting ");
toggleSetting.onclick = () => {
  document.querySelector(".setting_box").classList.toggle("open");
};
let chechCol = localStorage.getItem("set-color");
if (chechCol !== null) {
  console.log(" local storage is not empty");
  document.documentElement.style.setProperty("--main-color", chechCol);
  document.querySelectorAll(".colors li").forEach((el) => {
    el.classList.remove("active");
    if (el.dataset.color === chechCol) {
      if (el.dataset.color !== "rgba(0, 0, 0, 0.507)") {
        el.classList.add("active");
      }
    }
  });
}
let getColor = document.querySelectorAll(".colors li");

getColor.forEach((el) => {
  el.addEventListener("click", (e) => {
    console.log(1);
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    localStorage.setItem("set-color", e.target.dataset.color);
    e.target.parentElement.querySelectorAll(".active").forEach((elem) => {
      elem.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

let lanPage = document.querySelector(".landing_page");
let arrayImage = ["01.jpeg", "02.jpeg", "03.jpeg", "04.jpeg", "05.jpeg"];

setInterval(() => {
  let random = Math.floor(Math.random() * arrayImage.length);
  lanPage.style.backgroundImage = `url("img/${arrayImage[random]}")`;
}, 3000);
