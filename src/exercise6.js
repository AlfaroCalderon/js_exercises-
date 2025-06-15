export function exercise6() {
  const div = document.createElement('div');
    div.className = 'form-container';
    div.innerHTML = `<h1>Ejercicio 6</h1>
    <form id="exercise-form1" class="exercise-form">
        <label for="origen">Origen:</label>
        <select id="origen" name="origen" required>
        <option value="1">Ciudad de palma</option>
        <option value="2">San salvador</option>
        <option value="3">Sonsonate</option>
        </select>
        <label for="destino">Destino:</label>
        <select id="destino" name="destino" required>
        <option value="1">La costa del sol</option>
        <option value="2">Panchimalco</option>
        <option value="3">Puerto el triunfo</option>
        </select>
         <label for="valorviaje">Precio viaje turistico:</label>
        <input type="text" id="valorviaje" name="valorviaje" placeholder="Ingresa el precio del viaje" required>
        <span><button type="submit" class="calcular">Calcular</button></span>
    </form>
    <div id="result" class="result"></div>`;
    document.querySelector('#app').appendChild(div);

    document.querySelector('#exercise-form1').addEventListener('submit', function (e) {
        e.preventDefault();
        let origen = document.getElementById('origen').value;
        let destino = document.getElementById('destino').value;
        let precio = parseFloat(document.getElementById('valorviaje').value);

        let result = document.getElementById('result');


        if(!isNaN(precio) && precio >= 0) {
        
            let descuento = 0;
            let destext = '';
            if (origen == 1 && destino == 1) {
               descuento = precio * 0.05;
               destext = '5%';
            } else if(destino == 2){
                descuento = precio * 0.10;
                destext = '10%';
            } else if(destino == 3){
                descuento = precio * 0.15;
                destext = '15%';
            }else{
                destext = '0%';
            }

            precio = precio - descuento;
            result.innerHTML = `<h4>El costo del viaje es: $${precio} con descuento del ${destext}</h4>`;
            result.style.backgroundColor = '#4CAF50';
            result.style.display = 'block';
           
        }else{
            result.innerHTML = `<h2>Valor no válido</h2>`;
            result.style.backgroundColor = 'red';
            result.style.display = 'block';
            return;
        }


        

            

    });



}