const form = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");
const fromInput = document.getElementById("from");
const toInput = document.getElementById("to");
const yearEl = document.getElementById("year");

yearEl.textContent = new Date().getFullYear();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fromDate = new Date(fromInput.value);
  const toDate = new Date(toInput.value);

  if (Number.isNaN(fromDate.getTime()) || Number.isNaN(toDate.getTime())) {
    formMessage.textContent = "Seleziona un intervallo di date valido.";
    return;
  }

  if (toDate < fromDate) {
    formMessage.textContent = "La data di fine deve essere successiva alla data di inizio.";
    return;
  }

  const days = Math.ceil((toDate - fromDate) / (1000 * 60 * 60 * 24)) + 1;
  formMessage.textContent = `Perfetto! Stiamo cercando i robot disponibili per ${days} giorno/i.`;
});
