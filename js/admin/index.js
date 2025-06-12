// js/admin/index.js
// Inicialización del router para el panel de administración

import { Router } from '../core/router.js';
import { rutas } from './routes.js';
import { vistas } from './views.js';

// Inicializar el router
new Router(rutas, vistas); 