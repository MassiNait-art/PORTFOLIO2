function toggleDetails(card) {
    const details = card.querySelector(".project-details");
    details.style.display = details.style.display === "block" ? "none" : "block";
  }
// script.js

function appendToDisplay(value) {
  const display = document.getElementById("display");
  display.value += value;
}

function clearDisplay() {
  const display = document.getElementById("display");
  display.value = "";
}

function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value); // Utilise eval pour évaluer l'expression mathématique
  } catch (error) {
    display.value = "Erreur"; // Affiche "Erreur" en cas de problème
  }
}  
