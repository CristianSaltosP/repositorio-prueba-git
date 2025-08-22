const btn = document.getElementById("btn-oscuro");
btn?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  // Guarda preferencia simple
  const isDark = document.body.classList.contains("dark");
  try {
    localStorage.setItem("pref-dark", isDark ? "1" : "0");
  } catch (_) {}
});

// Carga preferencia al inicio
try {
  const pref = localStorage.getItem("pref-dark");
  if (pref === "1") document.body.classList.add("dark");
} catch (_) {}
