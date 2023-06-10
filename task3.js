function convertTemperature() {
  var temperature = document.getElementById("temperature").value;
  var unit = document.getElementById("unit").value;
  var result = document.getElementById("result");

  // Validate input as a number
  if (isNaN(temperature)) {
    result.innerText = "Please enter a valid number";
    return;
  }

  // Convert temperature
  var convertedTemperature;
  var convertedUnit;
  if (unit === "celsius") {
    convertedTemperature = (temperature * 9) / 5 + 32;
    convertedUnit = "Fahrenheit";
  } else {
    convertedTemperature = ((temperature - 32) * 5) / 9;
    convertedUnit = "Celsius";
  }

  // Display result
  result.innerText =
    "Converted Temperature: " +
    convertedTemperature.toFixed(2) +
    " " +
    convertedUnit;
}
