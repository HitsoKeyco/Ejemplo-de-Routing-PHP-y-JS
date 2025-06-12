// js/app/index.js
// Inicialización del router para la aplicación principal

import { Router } from '../core/router.js';
import { rutas } from './routes.js';
import { vistas } from './views.js';

// Inicializar el router
new Router(rutas, vistas);

// Lógica para el botón 'Atrás'
document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'btn-atras') {
        e.preventDefault();
        history.back();
    }
}); 