function convertTemperature() {
      const temp = parseFloat(document.querySelector('#temperature').value);
      const unit = document.querySelector("#unit").value;
      const resultDiv = document.querySelector("#result");

      let celsius, fahrenheit, kelvin;

      // Check if value is entered
      if (isNaN(temp)) {
        alert('please enter a valid number');
        return;
      }

      if(unit=="select") {
        alert('please select valid type of degree');
      }
      // Conversion logic
      if (unit === "celsius") {
        celsius = temp;
        fahrenheit = (temp * 9/5) + 32;
        kelvin = temp + 273.15;
      } else if (unit === "fahrenheit") {
        celsius = (temp - 32) * 5/9;
        fahrenheit = temp;
        kelvin = (temp - 32) * 5/9 + 273.15;
      } else if (unit === "kelvin") {
        celsius = temp - 273.15;
        fahrenheit = (temp - 273.15) * 9/5 + 32;
        kelvin = temp;
      }

      // Display results
      resultDiv.innerHTML = `
        <p><strong>Celsius (°C):</strong> ${celsius.toFixed(2)}</p>
        <p><strong>Fahrenheit (°F):</strong> ${fahrenheit.toFixed(2)}</p>
        <p><strong>Kelvin (K):</strong> ${kelvin.toFixed(2)}</p>
      `;
    }