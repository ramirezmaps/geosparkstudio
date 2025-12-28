// =====================================================
// CONFIGURACIÓN DE GEO SPARK STUDIO
// =====================================================
// Centraliza precios y URLs de la aplicación
// =====================================================

// =====================================================
// CONFIGURACIÓN DE LA APLICACIÓN
// =====================================================

// URL del Dashboard (cambiar en producción)
const APP_URL = "https://app.geosparkstudio.cl";  // ← CAMBIA ESTE VALOR EN PRODUCCIÓN

// URL alternativa para desarrollo local
// const APP_URL = "http://localhost:3000";

// Precios (CLP)
const PRECIO_PRO = "$10,990";
const PRECIO_PRO_ANUAL = "$109,900";
const PRECIO_ENTERPRISE = "$49,990";
const PRECIO_ENTERPRISE_ANUAL = "$499,900";

// =====================================================
// NO MODIFICAR DEBAJO DE ESTA LÍNEA
// =====================================================

(function () {
    function actualizarContenido() {
        // =============== ACTUALIZAR PRECIOS ===============

        // Actualizar por ID
        const precioPro = document.getElementById('price-pro');
        if (precioPro) {
            precioPro.textContent = PRECIO_PRO;
        }

        // Actualizar por data-attribute
        document.querySelectorAll('[data-price="pro"]').forEach(function (el) {
            el.textContent = PRECIO_PRO;
        });

        // Actualizar cualquier elemento con clase pro-price
        document.querySelectorAll('.pro-price').forEach(function (el) {
            el.textContent = PRECIO_PRO;
        });

        console.log('💰 Precios actualizados');

        // =============== ACTUALIZAR ENLACES ===============

        // Actualizar todos los enlaces que apuntan a la app
        const enlacesApp = document.querySelectorAll('a[href*="streamlit.app"], a[href*="geosparkstudio.streamlit"]');
        enlacesApp.forEach(function (enlace) {
            const urlOriginal = enlace.getAttribute('href');

            // Determinar la página de destino
            if (urlOriginal.includes('streamlit.app')) {
                enlace.setAttribute('href', APP_URL);
                console.log('🔗 Enlace actualizado: ' + urlOriginal + ' → ' + APP_URL);
            }
        });

        // También actualizar enlaces específicos por clase
        document.querySelectorAll('.btn-primary[href*="streamlit"], .btn-link[href*="streamlit"], .feature-link[href*="streamlit"]').forEach(function (enlace) {
            enlace.setAttribute('href', APP_URL);
        });

        console.log('🔗 Enlaces de la app actualizados a: ' + APP_URL);
    }

    // Ejecutar inmediatamente y también al cargar
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', actualizarContenido);
    } else {
        actualizarContenido();
    }

    // Respaldo: ejecutar después de 100ms por si acaso
    setTimeout(actualizarContenido, 100);

    // Exponer la URL para uso en otros scripts
    window.APP_URL = APP_URL;
    window.PRECIOS = {
        pro: PRECIO_PRO,
        proAnual: PRECIO_PRO_ANUAL,
        enterprise: PRECIO_ENTERPRISE,
        enterpriseAnual: PRECIO_ENTERPRISE_ANUAL
    };
})();
