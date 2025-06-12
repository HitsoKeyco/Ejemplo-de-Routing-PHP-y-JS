<?php
// Prevenir acceso directo a archivos
if (basename($_SERVER['PHP_SELF']) === basename(__FILE__)) {
    header('Content-Type: text/html; charset=utf-8');
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aplicación Principal</title>
    <style>
        /* Estilos básicos */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
        }
        #app {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        a[data-link] {
            color: #0066cc;
            text-decoration: none;
        }
        a[data-link]:hover {
            text-decoration: underline;
        }
        .nav-menu {
            margin-bottom: 20px;
            padding: 10px;
            background: #eee;
            border-radius: 4px;
        }
        .nav-menu a {
            margin-right: 15px;
        }
        .content {
            margin-top: 20px;
        }
        .product-details {
            background: #f9f9f9;
            padding: 15px;
            border-radius: 4px;
            margin-top: 15px;
        }
    </style>
</head>
<body>
    <div id="app">
        <div class="nav-menu">
            <a href="/app.php/inicio" data-link>Inicio</a>
            <a href="/app.php/productos/1" data-link>Producto 1</a>
            <a href="/app.php/productos/2" data-link>Producto 2</a>
        </div>
        <!-- El contenido dinámico se cargará aquí -->
    </div>
    <script type="module" src="/js/app/index.js"></script>
</body>
</html> 