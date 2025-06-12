// js/admin/routes.js
// Rutas del panel de administración

import { vistas } from './views.js';

export const rutas = [
    {
        path: "/admin.php/dashboard",
        render: () => vistas.dashboard()
    },
    {
        path: "/admin.php/usuarios/:id",
        render: (params) => vistas.usuario(params)
    }
]; 