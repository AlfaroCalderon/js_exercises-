export function exercise3() {
 const div = document.createElement('div');
    div.className = 'form-container';
    div.innerHTML = `<h1>Ejercicio 3</h1>
  <form id="exercise-form1" class="exercise-form">
    <label for="nombre">Nombre del empleado:</label>
    <input type="text" id="nombre" name="nombre" placeholder="Ingresa el nombre del empleado" required>
    <label for="salario">Salario:</label>
    <input type="text" id="salario" name="salario" placeholder="Ingresa el salario" required>
    <label for="categoria">Categoría:</label>
    <select id="categoria" name="categoria" required>
      <option value="A">A 15%</option>
      <option value="B">B 30%</option>
      <option value="C">C 10%</option>
      <option value="D">D 20%</option>
    </select>
    <span><button type="submit" class="calcular">Calcular</button></span>
  </form>
  <div id="result" class="result"></div>`;
    document.querySelector('#app').appendChild(div);

    document.querySelector('#exercise-form1').addEventListener('submit', function (e) {
        e.preventDefault();
        let nombre = document.getElementById('nombre').value;
        let salario = parseFloat(document.getElementById('salario').value);
        let categoria = document.getElementById('categoria').value;

        let result = document.getElementById('result');

        if (salario >= 0) {
            let aumento = 0;
            switch (categoria) {
                case 'A':
                    aumento = salario * 0.15;
                    break;
                case 'B':
                    aumento = salario * 0.30;
                    break;
                case 'C':
                    aumento = salario * 0.10;
                    break;
                case 'D':
                    aumento = salario * 0.20;
                    break;
            }
            let nuevoSalario = salario + aumento;
            result.innerHTML = `<h4>El nuevo salario de ${nombre} con categoría ${categoria} es: ${nuevoSalario.toFixed(2)}</h4>`;
            result.style.backgroundColor = '#4CAF50';
            result.style.display = 'block';
        } else {
            result.innerHTML = `<h2>Salario no válido</h2>`;
            result.style.backgroundColor = 'red';
            result.style.display = 'block';
        }

});
}