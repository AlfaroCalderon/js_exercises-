export function exercise8() {
const div = document.createElement('div');
div.className = 'form-container';
div.innerHTML = `<h1>Ejercicio 8</h1>
  <form id="exercise-form1" class="exercise-form">
    <label for="numero">Numero:</label>
    <input type="text" id="numero" name="numero" placeholder="Ingresa numero" required>
    <span><button type="submit" class="calcular">Calcular</button></span>
  </form>
  <div id="result" class="result"></div>`;
document.querySelector('#app').appendChild(div);


document.querySelector('#exercise-form1').addEventListener('submit', function(e){
    e.preventDefault();
    let numero = parseInt(document.getElementById('numero').value);
    let result = document.getElementById('result');
    result.innerHTML = `<h2>Tabla de multiplicar del ${numero}</h2>`;

    if(!isNaN(numero) && numero >= 0){
        for(let i = 1; i <= 10; i++) {
            result.innerHTML += `<p>${numero} x ${i} = ${numero * i}</p>`;
            result.style.display = 'block';
            result.style.color = 'black';
            result.style.backgroundColor = 'lightgray';
        }
    }else {
        result.innerHTML = `<h2>Numero no valido</h2>`;
        result.style.backgroundColor = 'red';
        result.style.color = 'white';
        result.style.display = 'block';
    }
    
});




}