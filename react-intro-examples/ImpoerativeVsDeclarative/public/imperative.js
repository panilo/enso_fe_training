const container = document.getElementById("root");
const button = document.getElementById("btn");

const listenForClick = () => {
  button.style.backgroundColor = "#FF6600";
  button.innerText = "Are you sure?";
  button.removeEventListener("click", listenForClick);
  button.addEventListener("click", showRocket);
};

const showRocket = () => {
  container.innerHTML = "🚀";
};

button.addEventListener("click", listenForClick);
