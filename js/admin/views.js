// js/admin/views.js
// Vistas del panel de administración

export const vistas = {
    dashboard: () => `
        <h1>Dashboard de Administración</h1>
        <div class="content">
            <div class="dashboard-stats">
                <div class="stat-card">
                    <h3>Usuarios Totales</h3>
                    <p class="stat-number">1,234</p>
                </div>
                <div class="stat-card">
                    <h3>Productos Activos</h3>
                    <p class="stat-number">567</p>
                </div>
                <div class="stat-card">
                    <h3>Pedidos Pendientes</h3>
                    <p class="stat-number">89</p>
                </div>
            </div>
            <div class="recent-activity">
                <h2>Actividad Reciente</h2>
                <ul>
                    <li>Nuevo usuario registrado - hace 5 minutos</li>
                    <li>Pedido #1234 completado - hace 15 minutos</li>
                    <li>Producto actualizado - hace 30 minutos</li>
                </ul>
            </div>
        </div>
    `,
    usuario: (params) => `
        <h1>Detalles del Usuario ${params.id}</h1>
        <div class="content">
            <div class="user-profile">
                <h3>Información del Usuario</h3>
                <p><strong>ID:</strong> ${params.id}</p>
                <p><strong>Nombre:</strong> Usuario Ejemplo ${params.id}</p>
                <p><strong>Email:</strong> usuario${params.id}@ejemplo.com</p>
                <p><strong>Rol:</strong> ${params.id % 2 === 0 ? 'Administrador' : 'Editor'}</p>
                <p><strong>Último acceso:</strong> ${new Date().toLocaleString()}</p>
            </div>
            <div class="user-actions">
                <h3>Acciones</h3>
                <button onclick="alert('Editar usuario ' + ${params.id})">Editar</button>
                <button onclick="alert('Eliminar usuario ' + ${params.id})">Eliminar</button>
            </div>
        </div>
    `,
    notFound: () => `
        <h1>404 - Página no encontrada</h1>
        <div class="content">
            <p>Lo sentimos, la página de administración que buscas no existe.</p>
            <p>Por favor, verifica la URL o regresa al dashboard.</p>
        </div>
    `
}; 