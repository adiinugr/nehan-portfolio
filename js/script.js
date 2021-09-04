const dropdown = document.getElementById("dropdown");
const toggleButton = document.getElementById("toggle-button");

let temp = true;

const toggleFunction = () => {
  temp = !temp;

  if (!temp) {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
};

toggleButton.addEventListener("click", toggleFunction);
