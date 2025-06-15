export function exercise4() {
    let div = document.createElement('div');
    div.className = 'form-container';
    div.innerHTML = `<h1>Ejercicio 4</h1>
        <form id="exercise-form1" class="exercise-form">
            <label for="numero1">Numero 1:</label>
            <input type="text" id="numero1" name="numero1" placeholder="Ingresa el primer numero" required>
            <label for="numero2">Numero 2:</label>
            <input type="text" id="numero2" name="numero2" placeholder="Ingresa el segundo numero" required>
            <span><button type="submit" class="calcular">Calcular</button></span>
        </form>
        <div id="result" class="result"></div>`;
    document.querySelector('#app').appendChild(div);

    document.querySelector('#exercise-form1').addEventListener('submit', function (e) {
        e.preventDefault();
        let numero1 = parseInt(document.getElementById('numero1').value);
        let numero2 = parseInt(document.getElementById('numero2').value);
        let result = document.getElementById('result');

        if (!isNaN(numero1) && !isNaN(numero2)) {
            
            if(numero1 > numero2){
                result.innerHTML = `<h2>El numero mayor es: ${numero1}</h2>`;
                result.style.backgroundColor = '#4CAF50';
                result.style.display = 'block';
            }else if(numero2 > numero1){
                result.innerHTML = `<h2>El numero mayor es: ${numero2}</h2>`;
                result.style.backgroundColor = '#4CAF50';
                result.style.display = 'block';
            }else{
                result.innerHTML = `<h2>Los numeros son iguales</h2>`;
                result.style.backgroundColor = '#4CAF50';
                result.style.display = 'block';
            }     

        }else{
            result.innerHTML = `<h2>Por favor, ingresa números válidos.</h2>`;
            result.style.backgroundColor = 'red';
            result.style.display = 'block';
        }

        
    });
}