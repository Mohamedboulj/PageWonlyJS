var body = document.querySelector(".body");

var navbar = document.createElement("nav");
var ul = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var main = document.createElement("div");
var footer = document.createElement("footer");
var link1 = document.createElement("a");
var link2 = document.createElement("a");
var link3 = document.createElement("a");
var link4 = document.createElement("a");
var icon = document.createElement("i");
var sideB = document.createElement("div");
var closeBtn = document.createElement("i");
var sbText = document.createElement("div");


navbar.appendChild(icon);
navbar.appendChild(ul);
ul.appendChild(li1);
li1.appendChild(link1);
ul.appendChild(li2);
li2.appendChild(link2);
ul.appendChild(li3);
li3.appendChild(link3);
ul.appendChild(li4);
li4.appendChild(link4);
footer.textContent="Tous droits réservés @ Mohamed Bouljihel ";

link1.textContent = "Home";
link2.textContent = "News";
link3.textContent = "Tech";
link4.textContent = "Contact";
sbText.textContent = "Sidebar pour naviguer le site";
icon.setAttribute("class", "bi bi-list btn");
icon.setAttribute("type", "button");
sideB.setAttribute("class", "sb");
sbText.setAttribute("class","sbnav")
link1.setAttribute("href", "#");
link2.setAttribute("href", "#");
link3.setAttribute("href", "#");
link4.setAttribute("href", "#");
closeBtn.setAttribute("class", "bi bi-x");

main.setAttribute("class", "container");

main.appendChild(sideB);
body.appendChild(navbar);
body.appendChild(main);
body.appendChild(footer);
sideB.appendChild(closeBtn);
sideB.appendChild(sbText);

console.log(sideB);
console.log(sideB.style.display.width);

icon.addEventListener("click", () => {
  if (!sideB.classList.contains("hide")) {
    sideB.classList.toggle("hide");
    
    anime({
      targets: ".sb  ",
      width: "26%",
      duration: 2000,
      easing: "easeInOutQuad",
    });
  } else {
    anime({
      targets: ".sb",
      width: "0%",
      duration: 2000,
      easing: "easeInOutQuad",
    }).finished.then(() => {
      console.log("ok");
      sideB.classList.toggle("hide");
    });
  }
});

closeBtn.addEventListener("click", () => {
  anime({
    targets: ".sb",
    width: "0%",
    duration: 2000,
    easing: "easeInOutQuad",
  }).finished.then(() => {
    console.log("ok");
    sideB.classList.toggle("hide");
  });
});
