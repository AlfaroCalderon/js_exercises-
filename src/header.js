export function header() { 
const nav = document.createElement('nav');
nav.innerHTML = `
<a href="/exercise1" class="item">Ejercicio1</a>
<a href="/exercise2" class="item">Ejercicio2</a>
<a href="/exercise3"class="item">Ejercicio3</a>
<a href="/exercise4" class="item">Ejercicio4</a>
<a href="/exercise5" class="item">Ejercicio5</a>
<a href="/exercise6" class="item">Ejercicio6</a>
<a href="/exercise7" class="item">Ejercicio7</a>
<a href="/exercise8" class="item">Ejercicio8</a>
<a href="/exercise9" class="item">Ejercicio9</a>
<a href="/exercise10" class="item">Ejercicio10</a>
`;
document.querySelector('#app').appendChild(nav);
} 