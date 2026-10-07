fetch("./sections/services/services.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("services").innerHTML = data;
  })
  .catch((error) => {
    console.error("Error loading services:", error);
  });
