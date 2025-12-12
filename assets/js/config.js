// =====================================================
// CONFIGURACIÓN DE PRECIOS - GEO SPARK STUDIO
// =====================================================
// Actualiza estos valores cuando cambies los precios 
// en el panel de administración de Streamlit
// =====================================================

const PRECIO_PRO = "$10.990";  // ← CAMBIA ESTE VALOR

// =====================================================
// NO MODIFICAR DEBAJO DE ESTA LÍNEA
// =====================================================

(function () {
    function actualizarPrecios() {
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

        console.log('💰 Precio Pro actualizado a: ' + PRECIO_PRO);
    }

    // Ejecutar inmediatamente y también al cargar
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', actualizarPrecios);
    } else {
        actualizarPrecios();
    }

    // Respaldo: ejecutar después de 100ms por si acaso
    setTimeout(actualizarPrecios, 100);
})();
