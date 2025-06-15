export function exercise1() {

const div = document.createElement('div');
div.className = 'form-container';
div.innerHTML = `<h1>Ejercicio 1</h1>
  <form id="exercise-form1" class="exercise-form">
    <label for="edad">Edad:</label>
    <input type="text" id="edad" name="edad" placeholder="Ingresa tu Edad" required>
    <span><button type="submit" class="calcular">Calcular</button></span>
  </form>
  <div id="result" class="result"></div>`;
document.querySelector('#app').appendChild(div);


document.querySelector('#exercise-form1').addEventListener('submit', function(e) {
    e.preventDefault();
    let edad = document.getElementById('edad').value;
    let result = document.getElementById('result');
    if(edad >= 18){
        result.innerHTML = `<h2>Usted es mayor de edad</h2>`;
        result.style.backgroundColor = 'green';
        result.style.display = 'block';
    }else if(edad < 18 && edad >= 0){
        result.innerHTML = `<h2>Usted es menor de edad</h2>`;
        result.style.backgroundColor = 'orange';
        result.style.display = 'block';
    }else{
        result.innerHTML = `<h2>Edad no valida</h2>`;
        result.style.backgroundColor = 'red';
        result.style.display = 'block';
    }
});


}



