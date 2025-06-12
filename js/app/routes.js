// js/app/routes.js
// Rutas de la aplicación principal

import { vistas } from './views.js';

export const rutas = [
    {
        path: "/app.php/inicio",
        render: () => vistas.inicio()
    },
    {
        path: "/app.php/productos/:id",
        render: (params) => vistas.producto(params)
    }
]; 