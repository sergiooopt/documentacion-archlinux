document.addEventListener("DOMContentLoaded", function () {
  const button = document.createElement("button");
  button.id = "back-to-top";
  button.innerHTML = "↑";

  button.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  document.body.appendChild(button);
});
