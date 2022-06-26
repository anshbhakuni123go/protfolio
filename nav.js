document.getElementById("toggleText").style.color = "white";

if (document.body.style.backgroundColor === "black") {
  document.getElementById("toggleText").innerHTML = "Dark Mode";
} else {
  document.getElementById("toggleText").innerHTML = "Light Mode";
  document.getElementById("navBar").classList.add("bg-light");
  document.getElementById("toggleText").style.color = "black";
}

function toggleMode() {
  if (document.body.style.backgroundColor === "black") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById("toggleText").innerHTML = "Light Mode";
    document
      .getElementById("navBar")
      .classList.remove("bg-dark", "navbar-dark");
    document.getElementById("navBar").classList.add("bg-light");
    document.getElementById("toggleText").style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementById("toggleText").innerHTML = "Dark Mode";
    document
      .getElementById("navBar")
      .classList.remove("bg-light", "navbar-light");
    document.getElementById("navBar").classList.add("bg-dark", "navbar-dark");
    document.getElementById("toggleText").style.color = "white";
  }
}