export function exercise7() {
    const div = document.createElement('div');
    div.className = 'form-container';
    div.innerHTML = `<h1>Ejercicio 7</h1>
  <form id="exercise-form1" class="exercise-form">
    <label for="numero">Numero 1:</label>
    <input type="text" id="numero1" name="numero1" placeholder="Ingresa el primer numero" required>
    <label for="numero">Numero 2:</label>
    <input type="text" id="numero2" name="numero2" placeholder="Ingresa el segundo numero" required>
    <label for="numero">Numero 3:</label>
    <input type="text" id="numero3" name="numero3" placeholder="Ingresa el tercer numero" required>
    <label for="numero">Numero 4:</label>
    <input type="text" id="numero4" name="numero4" placeholder="Ingresa el cuarto numero" required>
    <label for="numero">Numero 5:</label>
    <input type="text" id="numero5" name="numero5" placeholder="Ingresa el quinto numero" required>
    <label for="numero">Numero 6:</label>
    <input type="text" id="numero6" name="numero6" placeholder="Ingresa el sexto numero" required>
    <label for="numero">Numero 7:</label>
    <input type="text" id="numero7" name="numero7" placeholder="Ingresa el septimo numero" required>
    <label for="numero">Numero 8:</label>
    <input type="text" id="numero8" name="numero8" placeholder="Ingresa el octavo numero" required>
    <label for="numero">Numero 9:</label>
    <input type="text" id="numero9" name="numero9" placeholder="Ingresa el noveno numero" required>
    <label for="numero">Numero 10:</label>
    <input type="text" id="numero10" name="numero10" placeholder="Ingresa el decimo numero" required>
    <span><button type="submit" class="calcular">Calcular</button></span>
  </form>
  <div id="result" class="result"></div>`;
    document.querySelector('#app').appendChild(div);


    document.querySelector('#exercise-form1').addEventListener('submit', function (e) {
        e.preventDefault();
        let result = document.getElementById('result');
        let numeros = [];
        let hasNaN = false;

        for (let i = 1; i <= 10; i++) {
            let numero = parseInt(document.getElementById('numero' + i).value);

            if (isNaN(numero) || numero === '') {
                hasNaN = true;
            }
            numeros.push(numero);
        }

        if (hasNaN) {
            result.innerHTML = `<h2>Por favor ingrese numeros validos</h2>`;
            result.style.backgroundColor = 'red';
            result.style.color = 'white';
            result.style.display = 'block';
            return;
        } else {
           let numberNegative = 0;
           let numberPositive = 0;
           let mult15 = 0;
           let evenNumber = 0;
            numeros.map((numero) => {
                if (numero >= 0) {
                    numberPositive++
                }

                if (numero < 0) {
                    numberNegative++
                }

                if (numero % 15 == 0) {
                    mult15++;
                }

                if (numero % 2 == 0) {
                    evenNumber++;
                }
            });

            result.innerHTML = `Catidad de numeros positivos: ${numberPositive} <br>
                            Cantidad de numeros negativos: ${numberNegative} <br>
                            Cantidad de numeros multiplos de 15: ${mult15} <br>
                            Cantidad de numeros pares: ${evenNumber} <br>`;
            result.style.backgroundColor = '#4CAF50';
            result.style.color = 'white';
            result.style.display = 'block';
        }



    });


}