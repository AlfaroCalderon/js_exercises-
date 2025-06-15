import './style.css'
import javascriptLogo from './javascript.svg'
import { header } from './header.js'
import { exercise1 } from './exercise1.js'
import { exercise2 } from './exercise2.js'
import { exercise3 } from './exercise3.js'
import { exercise4 } from './exercise4.js'
import { exercise5 } from './exercise5.js'
import { exercise6 } from './exercise6.js'
import { exercise7 } from './exercise7.js'
import { exercise8 } from './exercise8.js'
import { exercise9 } from './exercise9.js'
import { exercise10 } from './exercise10.js'

const path = window.location.pathname;
header();

switch (path) {
  case '/':
    const div = document.createElement('div');
    div.className = 'form-container';
    div.innerHTML = `<h2>Ejercicio de JavaScript Rodrigo Alfaro</h2>
    <p>Selecciona un ejercicio del menú para comenzar.</p>
    <img src="${javascriptLogo}" class="logo" alt="JavaScript logo">`;
    document.querySelector('#app').appendChild(div); 
  break;
  case '/exercise1':
    exercise1();
  break;
  case '/exercise2':
    exercise2();
  break;
  case '/exercise3':
    exercise3();
  break;
  case '/exercise4':
    exercise4();
  break;
  case '/exercise5':
    exercise5();
  break;
  case '/exercise6':
    exercise6();
  break;
  case '/exercise7':
    exercise7();
  break;
  case '/exercise8':
    exercise8();
  break;
  case '/exercise9':
    exercise9();
  break;
  case '/exercise10':
    exercise10();
  break;
}

