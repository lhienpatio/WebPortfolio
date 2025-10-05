// Simple interactive feature
const intro = document.getElementById("intro");
const btn = document.createElement("button");

btn.textContent = "Change Theme";
btn.style.padding = "10px 20px";
btn.style.marginTop = "20px";
btn.style.cursor = "pointer";

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

intro.appendChild(btn);
