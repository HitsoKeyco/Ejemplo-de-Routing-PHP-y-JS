// js/app/views.js
// Vistas de la aplicación principal

export const vistas = {
    inicio: () => `
        <h1>Página de Inicio</h1>
        <p>Bienvenido a la aplicación principal.</p>
        <div class="content">
            <h2>Características principales:</h2>
            <ul>
                <li>Navegación SPA sin recargas</li>
                <li>Rutas dinámicas con parámetros</li>
                <li>Manejo de historial del navegador</li>
            </ul>
            <hr>
            <a href="/app.php/productos/1" data-link>Ir a Producto 1</a><br>
            <a href="/app.php/productos/2" data-link>Ir a Producto 2</a>
        </div>
    `,
    producto: (params) => `
        <h1>Producto ${params.id}</h1>
        <div class="content">
            <p>Detalles del producto con ID: ${params.id}</p>
            <div class="product-details">
                <h3>Información del producto</h3>
                <p>Este es un producto de ejemplo con ID ${params.id}.</p>
                <p>Precio: $${(Math.random() * 1000).toFixed(2)}</p>
                <p>Stock: ${Math.floor(Math.random() * 100)} unidades</p>
            </div>
            <br>
            <button id="btn-atras" type="button">Atrás</button>
        </div>
    `,
    notFound: () => `
        <h1>404 - Página no encontrada</h1>
        <div class="content">
            <p>Lo sentimos, la página que buscas no existe.</p>
            <p>Por favor, verifica la URL o regresa a la página de inicio.</p>
            <br>
            <button id="btn-atras" type="button">Atrás</button>
        </div>
    `
}; 