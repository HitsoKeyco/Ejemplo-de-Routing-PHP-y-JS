# Sistema de Routing SPA en PHP y JavaScript

Este proyecto implementa un sistema de Single Page Application (SPA) con dos entradas principales:
- `app.php`: Aplicación principal para usuarios
- `admin.php`: Panel de administración

## Características

- Routing SPA implementado en JavaScript puro (sin frameworks)
- Manejo de rutas dinámicas con parámetros (ej: `/productos/:id`)
- Navegación sin recargas usando `history.pushState`
- Soporte para rutas directas (F5 o pegar URL)
- Páginas 404 personalizadas
- Separación clara de vistas, rutas y lógica de navegación

## Estructura de Archivos

```
.
├── .htaccess           # Configuración de Apache para manejo de rutas
├── index.html          # Redirección inicial a app.php
├── app.php            # Entrada principal de la aplicación
├── admin.php          # Entrada del panel de administración
├── js/
│   ├── router-app.js   # Sistema de routing para app.php
│   └── router-admin.js # Sistema de routing para admin.php
└── README.md          # Este archivo
```

## Requisitos

- Servidor web Apache con mod_rewrite habilitado
- PHP 7.0 o superior
- Navegador moderno con soporte para History API

## Configuración

1. Asegúrate de que mod_rewrite está habilitado en Apache:
   ```bash
   sudo a2enmod rewrite
   sudo service apache2 restart
   ```

2. Coloca los archivos en el directorio raíz de tu servidor web

3. Verifica que el archivo `.htaccess` tiene los permisos correctos:
   ```bash
   chmod 644 .htaccess
   ```

## Uso

### Rutas de la Aplicación Principal (app.php)

- `/app.php/inicio` - Página de inicio
- `/app.php/productos/:id` - Detalles de producto (ej: `/app.php/productos/1`)

### Rutas del Panel de Administración (admin.php)

- `/admin.php/dashboard` - Dashboard principal
- `/admin.php/usuarios/:id` - Detalles de usuario (ej: `/admin.php/usuarios/1`)

## Desarrollo

### Añadir Nuevas Rutas

Para añadir una nueva ruta en `router-app.js` o `router-admin.js`:

1. Define la vista en el objeto `vistas`:
   ```javascript
   const vistas = {
       nuevaVista: () => `
           <h1>Título de la Vista</h1>
           <div class="content">
               <!-- Contenido HTML -->
           </div>
       `
   };
   ```

2. Añade la ruta en el array `rutas`:
   ```javascript
   const rutas = [
       {
           path: "/app.php/nueva-ruta",
           render: () => vistas.nuevaVista()
       }
   ];
   ```

### Parámetros Dinámicos

Para rutas con parámetros dinámicos:
```javascript
{
    path: "/app.php/productos/:id",
    render: (params) => vistas.producto(params)
}
```

Accede a los parámetros en la vista usando `params.id`.

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles. 