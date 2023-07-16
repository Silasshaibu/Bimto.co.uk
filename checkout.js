const yearSelect = document.getElementById('yearSelect');
const currentYear = new Date().getFullYear();
const startYear = currentYear - 0; // Becasue most cards have 4years expiry date
const endYear = currentYear + 4;

for (let year = startYear; year <= endYear; year++) {
  const option = document.createElement('option');
  option.value = year;
  option.textContent = year;
  yearSelect.appendChild(option);
}

for (let month = 1; month <= 12; month++) {
    const option = document.createElement('option');
    option.value = month;
    option.textContent = month;
    monthSelect.appendChild(option);
    console.log('Show month');
  }
