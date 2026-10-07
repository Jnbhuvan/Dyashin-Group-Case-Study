fetch("./sections/hero/hero.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("hero").innerHTML = data;
  })
  .catch((error) => {
    console.error("Error loading hero:", error);
  });
