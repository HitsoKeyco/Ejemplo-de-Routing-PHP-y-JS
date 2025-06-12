// js/core/router.js
// Core del sistema de routing

export class Router {
    constructor(rutas, vistas) {
        this.rutas = rutas;
        this.vistas = vistas;
        this.init();
    }

    // Helper para extraer parámetros dinámicos de la ruta
    obtenerParams(path, routePath) {
        const paramNames = [];
        const regexPath = routePath.replace(/:([^\/]+)/g, (_, key) => {
            paramNames.push(key);
            return "([^/]+)";
        });
        const match = path.match(new RegExp("^" + regexPath + "$"));
        if (!match) return null;
        const params = {};
        paramNames.forEach((name, i) => {
            params[name] = match[i + 1];
        });
        return params;
    }

    // Encuentra la ruta coincidente
    encontrarRuta(path) {
        for (const ruta of this.rutas) {
            const params = this.obtenerParams(path, ruta.path);
            if (params !== null) {
                return { ruta, params };
            }
        }
        return null;
    }

    // Renderiza la vista correspondiente
    renderizar(path) {
        const resultado = this.encontrarRuta(path);
        const contenedor = document.getElementById("app");
        if (resultado) {
            contenedor.innerHTML = resultado.ruta.render(resultado.params);
        } else {
            contenedor.innerHTML = this.vistas.notFound();
        }
    }

    // Navegación SPA
    navegar(path) {
        history.pushState(null, null, path);
        this.renderizar(path);
    }

    // Inicializa el router
    init() {
        // Intercepta clics en enlaces con [data-link]
        document.addEventListener("click", (e) => {
            const enlace = e.target.closest("a[data-link]");
            if (enlace) {
                e.preventDefault();
                this.navegar(enlace.getAttribute("href"));
            }
        });

        // Maneja el evento popstate
        window.addEventListener("popstate", () => {
            this.renderizar(location.pathname);
        });

        // Inicializa en la ruta actual
        document.addEventListener("DOMContentLoaded", () => {
            this.renderizar(location.pathname);
        });
    }
} 