export function exercise9() {
    const div = document.createElement('div');
    div.className = 'form-container';
    div.innerHTML = `<h1>Ejercicio 9</h1>
  <form id="exercise-form1" class="exercise-form">
    <label for="numero">Temperatura °C:</label>
    <input type="text" id="temperatura" name="temperatura" placeholder="Ingresa la temperatura en celsius" required>
    <span><button type="submit" class="calcular">Calcular</button></span>
  </form>
  <div id="result" class="result"></div>`;
    document.querySelector('#app').appendChild(div);


    document.querySelector('#exercise-form1').addEventListener('submit', function (e) {
        e.preventDefault();
        let temperatura = parseFloat(document.getElementById('temperatura').value);
        let result = document.getElementById('result');
        result.innerHTML = `<h2>Temperatura en Fahrenheit</h2>`;

        if (!isNaN(temperatura)) {
            let fahrenheit = (temperatura * 1.8) + 32;

            if (fahrenheit >= 14 && fahrenheit <= 32) {
                result.innerHTML += `Temperatura baja <p>${fahrenheit.toFixed(2)} °F</p>`;
            } else if (fahrenheit  > 32 && fahrenheit <= 68) {
                result.innerHTML += `Temperatura adecuada <p>${fahrenheit.toFixed(2)} °F</p>`;
            }  else if (fahrenheit > 68 && fahrenheit <= 96) {
                result.innerHTML += `Temperatura alta <p>${fahrenheit.toFixed(2)} °F</p>`;
            } else{
                result.innerHTML += `Temperatura desconocida <p>${fahrenheit.toFixed(2)} °F</p>`;
            }

            result.style.backgroundColor = 'green';
            result.style.color = 'white';
            result.style.display = 'block';
        } else {
            result.innerHTML = `<h2>Temperatura no valida</h2>`;
            result.style.backgroundColor = 'red';
            result.style.color = 'white';
            result.style.display = 'block';
        }


    });


}