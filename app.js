// small interactive helpers (no dependencies)
document.addEventListener('click', (e) => {
  // future: handle nav toggles / dynamic content
});

// a tiny helper to format a date string (used by data page if needed)
function formatDateISO(iso) {
  const d = new Date(iso);
  if (isNaN(d)) return iso;
  return d.toLocaleDateString();
}

window.utils = { formatDateISO };
