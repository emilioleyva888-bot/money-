const data = {
  train: 0,
  metro: 0,
  food: 0
};

function loadData() {
  const saved = localStorage.getItem("expenses");
  if (saved) Object.assign(data, JSON.parse(saved));
  updateUI();
}

function addExpense(type) {
  const input = document.getElementById(type + "Input");
  const value = parseFloat(input.value);

  if (!isNaN(value)) {
    data[type] += value;
    input.value = "";
    saveData();
    updateUI();
  }
}

function updateUI() {
  document.getElementById("trainTotal").textContent = data.train.toFixed(2);
  document.getElementById("metroTotal").textContent = data.metro.toFixed(2);
  document.getElementById("foodTotal").textContent = data.food.toFixed(2);

  const global = data.train + data.metro + data.food;
  document.getElementById("globalTotal").textContent = global.toFixed(2);
}

function saveData() {
  localStorage.setItem("expenses", JSON.stringify(data));
}

loadData();
