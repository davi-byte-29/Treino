const buttons = document.querySelectorAll(".day-btn");
const workouts = document.querySelectorAll(".workout");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const selected = button.dataset.day;

    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    workouts.forEach(workout => {
      workout.classList.toggle(
        "hidden",
        selected !== "all" && workout.dataset.day !== selected
      );
    });

    const firstVisible = [...workouts].find(w => !w.classList.contains("hidden"));
    if (selected !== "all" && firstVisible) {
      firstVisible.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
});

// Realça visualmente a linha ao passar o mouse/toque.
document.querySelectorAll(".exercise").forEach(row => {
  row.addEventListener("mouseenter", () => {
    row.style.background = "var(--accent-soft)";
  });
  row.addEventListener("mouseleave", () => {
    row.style.background = "";
  });
});
