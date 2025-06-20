# SPA Routing en PHP y JavaScript (Multi-Entry)

Este proyecto implementa un sistema **Single Page Application (SPA)** con dos entradas independientes:
- `app.php`: Aplicación principal para usuarios
- `admin.php`: Panel de administración

Ambas entradas funcionan como SPAs separadas, cada una con su propio sistema de rutas, vistas y lógica, pero compartiendo un núcleo de router en JavaScript puro (sin frameworks).

---

## 🚀 Características

- **Routing SPA** en JavaScript puro (ES6 Modules)
- **Entradas independientes**: cada archivo PHP sirve su propia SPA
- **Rutas dinámicas** con parámetros (`/productos/:id`, `/usuarios/:id`)
- **Navegación sin recarga** (`history.pushState` y `popstate`)
- **Intercepta enlaces** con `[data-link]` para navegación SPA
- **Soporte para F5 y URLs directas** (el servidor siempre entrega el PHP correcto)
- **Página 404 personalizada** para rutas no existentes
- **Separación modular**: core, rutas y vistas en archivos distintos

---

## 📁 Estructura de Archivos

```text
.
├── .htaccess                # Reescritura de URLs para SPA en Apache
├── index.html               # Redirección inicial a app.php/inicio
├── app.php                  # Entrada principal de la aplicación
├── admin.php                # Entrada del panel de administración
├── js/
│   ├── core/
│   │   └── router.js        # Núcleo del sistema de routing SPA
│   ├── app/
│   │   ├── index.js         # Inicialización del router de la app
│   │   ├── routes.js        # Definición de rutas de la app
│   │   └── views.js         # Vistas de la app
│   └── admin/
│       ├── index.js         # Inicialización del router del admin
│       ├── routes.js        # Definición de rutas del admin
│       └── views.js         # Vistas del admin
└── README.md
```

---

## ⚙️ Requisitos

- Servidor web Apache con `mod_rewrite` habilitado
- PHP 7.0 o superior
- Navegador moderno con soporte para ES6 Modules y History API

---

## 🛠️ Instalación y Configuración

1. **Habilita mod_rewrite en Apache:**
   ```bash
   sudo a2enmod rewrite
   sudo service apache2 restart
   ```
2. **Coloca los archivos** en el directorio raíz de tu servidor web (por ejemplo, `htdocs/routing` en XAMPP).
3. **Verifica permisos** del archivo `.htaccess`:
   ```bash
   chmod 644 .htaccess
   ```
4. **Accede a la app:**
   - Aplicación principal: [http://localhost/routing/app.php/inicio](http://localhost/routing/app.php/inicio)
   - Panel de administración: [http://localhost/routing/admin.php/dashboard](http://localhost/routing/admin.php/dashboard)

---

## 🧭 Funcionamiento y Navegación

- **Cada entrada PHP** (`app.php` y `admin.php`) sirve un HTML con un `<div id="app"></div>` y carga su propio JS de rutas.
- **El router SPA** intercepta los enlaces con `[data-link]` y navega sin recargar la página.
- **Las rutas válidas** para cada SPA están definidas en sus respectivos archivos `routes.js`.
- **Si accedes a una ruta inexistente**, se muestra una página 404 personalizada.
- **Si recargas o pegas una URL directa**, el servidor entrega el PHP correcto y el router JS muestra la vista adecuada.

### Ejemplo de rutas válidas

- **App principal:**
  - `/app.php/inicio`
  - `/app.php/productos/1`
- **Admin:**
  - `/admin.php/dashboard`
  - `/admin.php/usuarios/2`

### Ejemplo de rutas inválidas (404)

- `/app.php/dashboard` (no existe en app)
- `/admin.php/inicio` (no existe en admin)
- `/admin.php/usuarios/abc/extra` (no definida)

---

## 🔄 Redirección de rutas base

Si accedes directamente a `/app.php` o `/admin.php`, verás una página 404 porque esas rutas no están definidas en el router SPA. 
Para una mejor experiencia, **agrega una redirección automática** en los archivos PHP:

```php
// En app.php
if ($_SERVER['REQUEST_URI'] === '/app.php' || $_SERVER['REQUEST_URI'] === '/app.php/') {
    header('Location: /app.php/inicio');
    exit;
}
// En admin.php
if ($_SERVER['REQUEST_URI'] === '/admin.php' || $_SERVER['REQUEST_URI'] === '/admin.php/') {
    header('Location: /admin.php/dashboard');
    exit;
}
```

Esto hará que los usuarios sean llevados automáticamente a la página principal de cada sección.

---

## 👨‍💻 Desarrollo y Extensión

### Añadir nuevas rutas

1. **Define la vista** en el archivo `views.js` correspondiente:
   ```js
   export const vistas = {
     nuevaVista: () => `
       <h1>Título de la Vista</h1>
       <div class="content">Contenido aquí</div>
     `
   };
   ```
2. **Agrega la ruta** en el archivo `routes.js`:
   ```js
   import { vistas } from './views.js';
   export const rutas = [
     {
       path: "/app.php/nueva-ruta",
       render: () => vistas.nuevaVista()
     }
   ];
   ```
3. **Para rutas dinámicas** usa `:param` y accede a los parámetros en la vista:
   ```js
   {
     path: "/app.php/productos/:id",
     render: (params) => vistas.producto(params)
   }
   // En la vista: params.id
   ```

---

## 🧪 Pruebas y ejemplos

- Haz clic en los enlaces del menú o en los botones de navegación para moverte entre rutas sin recargar.
- Prueba rutas inválidas para ver la página 404.
- Usa el botón "Atrás" en las vistas de detalle o error para volver fácilmente.

---

## 📢 Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras un bug o quieres mejorar el sistema, abre un issue o un pull request.

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles. 