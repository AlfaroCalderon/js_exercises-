export function exercise5(){
    const div = document.createElement('div');
    div.className = 'form-container';
    div.innerHTML = `<h1>Ejercicio 5</h1>
    <form id="exercise-form1" class="exercise-form">
        <label for="valor">Valor coche:</label>
        <input type="text" id="valor" name="valor" placeholder="Ingresa el valor del coche" required>
        <label for="tipoCoche">Tipo de coche:</label>
        <select id="tipoCoche" name="tipoCoche" required>
        <option value="1">FORD FIESTA 5%</option>
        <option value="2">FORD FOCUS  10%</option>
        <option value="3">FORD ESCAPE 20%</option>
        </select>
        <span><button type="submit" class="calcular">Calcular</button></span>
    </form>
    <div id="result" class="result"></div>`;
    document.querySelector('#app').appendChild(div);

    document.querySelector('#exercise-form1').addEventListener('submit', function (e) {
        e.preventDefault();
        let valor = parseFloat(document.getElementById('valor').value);
        let tipoCoche = document.getElementById('tipoCoche').value;

        let result = document.getElementById('result');

        if (valor >= 0) {
            let descuento = 0;
            switch (tipoCoche) {
                case '1':
                    descuento = valor * 0.05;
                    break;
                case '2':
                    descuento = valor * 0.10;
                    break;
                case '3':
                    descuento = valor * 0.20;
                    break;
            }
            let precioFinal = valor - descuento;
            result.innerHTML = `<h4>El precio final del coche es: $${precioFinal.toFixed(2)}</h4>`;
            result.style.backgroundColor = '#4CAF50';
            result.style.display = 'block';
        } else {
            result.innerHTML = `<h2>Valor no válido</h2>`;
            result.style.backgroundColor = 'red';
            result.style.display = 'block';
        }
    });
}