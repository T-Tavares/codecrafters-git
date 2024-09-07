console.log("Hello, world!");

const heading = document.querySelector("h1");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  heading.style.backgroundColor = "green";
});
