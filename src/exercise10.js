export function exercise10() {
    const div = document.createElement('div');
    div.className = 'form-container';
    div.innerHTML = `<h1>Ejercicio 10</h1>
  <button id="showprompt" class="showprompt">Ingresar edad estudiantes</button>
  <div id="result" class="result"></div>`;
    document.querySelector('#app').appendChild(div);

    document.querySelector('#showprompt').addEventListener('click', function () {

        let result = document.getElementById('result');
        result.innerHTML = '';
        let edadesTurnoMañanaSuma = 0;
        let edadesTurnoTardeSuma = 0;
        let edadesTurnoNocheSuma = 0;

        for (let i = 1; i <= 5 ; i++) {
          let edad =  prompt(`Ingrese la edad del estudiante ${i} del turno mañana:`);
                if (edad !== null && !isNaN(edad)) {
                    edadesTurnoMañanaSuma += parseInt(edad);
                }else {
                    alert('Edad no válida. Por favor, ingrese un número.');
                    i--;
                }
        }

            for (let j = 1; j <= 6 ; j++) {
             let edad = prompt(`Ingrese la edad del estudiante ${j} del turno tarde:`);
                
                    if (edad !== null && !isNaN(edad)) {
                        edadesTurnoTardeSuma += parseInt(edad);
                    }else {
                        alert('Edad no válida. Por favor, ingrese un número.');
                        j--;
                    }
            }

            for (let k = 1; k <= 11 ; k++) {
                let edad = prompt(`Ingrese la edad del estudiante ${k} del turno noche:`);
                if (edad !== null && !isNaN(edad)) {
                    edadesTurnoNocheSuma += parseInt(edad);
                }else {
                    alert('Edad no válida. Por favor, ingrese un número.');
                    k--;
                }
            }

            let promedioMañana = edadesTurnoMañanaSuma / 5;
            let  promedioTarde = edadesTurnoTardeSuma / 6;
            let promedioNoche = edadesTurnoNocheSuma / 11;

            let mayorPromedio = Math.max(promedioMañana, promedioTarde, promedioNoche);
            let turnoMayor;
            if (mayorPromedio === promedioMañana) {
                turnoMayor = "mañana";
            } else if (mayorPromedio === promedioTarde) {
                turnoMayor = "tarde";
            } else {
                turnoMayor = "noche";
            }

            result.innerHTML = `<h2>Resultados</h2>
            <p>Promedio de edad del turno mañana: ${promedioMañana.toFixed(0)}</p>
            <p>Promedio de edad del turno tarde: ${promedioTarde.toFixed(0)}</p>
            <p>Promedio de edad del turno noche: ${promedioNoche.toFixed(0)}</p>
            <p>El turno con mayor promedio de edad es: <strong>${turnoMayor}</strong> (${mayorPromedio.toFixed(0)})</p>`;
            result.style.color = 'white';
            result.style.backgroundColor = '#4CAF50';
            result.style.display = 'block';



    });

}