export function exercise2() {
    const div = document.createElement('div');
    div.className = 'form-container';
    div.innerHTML = `<h1>Ejercicio 2</h1>
  <form id="exercise-form1" class="exercise-form">
    <label for="nombre">Nombre del alumno:</label>
    <input type="text" id="nombre" name="nombre" placeholder="Ingresa el nombre del alumno" required>
    <label for="carnet">Carnet:</label>
    <input type="text" id="carnet" name="carnet" placeholder="Ingresa el carnet" required>
    <label for="examen">examen 20%:</label>
    <input type="text" id="examen" name="examen" placeholder="Ingresa nota de examen" required>
    <label for="tarea">tarea 40%:</label>
    <input type="text" id="tarea" name="tarea" placeholder="Ingresa nota de tarea" required>
    <label for="asistencia">asistencia 10%:</label>
    <input type="text" id="asistencia" name="asistencia" placeholder="Ingresa nota de asistencia" required>
    <label for="investigacion">investigacion 30%:</label>
    <input type="text" id="investigacion" name="investigacion" placeholder="Ingresa nota de investigacion" required>
    <span><button type="submit" class="calcular">Calcular</button></span>
  </form>
  <div id="result" class="result"></div>`;
    document.querySelector('#app').appendChild(div);

    document.querySelector('#exercise-form1').addEventListener('submit', function (e) {
        e.preventDefault();
        let nombre = document.getElementById('nombre').value;
        let carnet = document.getElementById('carnet').value;
        let examen = parseFloat(document.getElementById('examen').value);
        let tarea = parseFloat(document.getElementById('tarea').value);
        let asistencia = parseFloat(document.getElementById('asistencia').value);
        let investigacion = parseFloat(document.getElementById('investigacion').value);

        let result = document.getElementById('result');
        if (examen >= 0 && examen <= 10 && tarea >= 0 && tarea <= 10 && asistencia >= 0 && asistencia <= 10 && investigacion >= 0 && investigacion <= 10) {
            examen = examen * 0.2;
            tarea = tarea * 0.4;
            asistencia = asistencia * 0.1;
            investigacion = investigacion * 0.3;

            let promedio = examen + tarea + asistencia + investigacion;
            result.innerHTML = `<h4>La nota final de ${nombre} con carnet ${carnet} es: ${promedio.toFixed(2)}</h4>`;
            result.style.backgroundColor = '#4CAF50';
            result.style.display = 'block';
        } else {
            result.innerHTML = `<h2>Notas no validas</h2>`;
            result.style.backgroundColor = 'red';
            result.style.display = 'block';
        }

    });

}