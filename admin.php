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
    <title>Panel de Administración</title>
    <style>
        /* Estilos básicos */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f0f2f5;
        }
        #app {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        a[data-link] {
            color: #1a73e8;
            text-decoration: none;
        }
        a[data-link]:hover {
            text-decoration: underline;
        }
        .nav-menu {
            margin-bottom: 20px;
            padding: 15px;
            background: #1a73e8;
            border-radius: 4px;
            color: white;
        }
        .nav-menu a {
            margin-right: 20px;
            color: white;
        }
        .nav-menu a:hover {
            text-decoration: underline;
        }
        .content {
            margin-top: 20px;
        }
        .dashboard-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        .stat-card {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
        }
        .stat-number {
            font-size: 24px;
            font-weight: bold;
            color: #1a73e8;
            margin: 10px 0;
        }
        .user-profile {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
        }
        .user-actions {
            margin-top: 20px;
        }
        .user-actions button {
            padding: 8px 16px;
            margin-right: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        .user-actions button:first-child {
            background: #1a73e8;
            color: white;
        }
        .user-actions button:last-child {
            background: #dc3545;
            color: white;
        }
    </style>
</head>
<body>
    <div id="app">
        <div class="nav-menu">
            <a href="/admin.php/dashboard" data-link>Dashboard</a>
            <a href="/admin.php/usuarios/1" data-link>Usuario 1</a>
            <a href="/admin.php/usuarios/2" data-link>Usuario 2</a>
        </div>
        <!-- El contenido dinámico se cargará aquí -->
    </div>
    <script type="module" src="/js/admin/index.js"></script>
</body>
</html> 