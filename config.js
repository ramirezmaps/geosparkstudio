// Configuración de precios - Geo Spark Studio
// Actualiza estos valores cuando cambies los precios en el panel de administración

const PRICING_CONFIG = {
    // Plan Gratuito
    free: {
        name: "Plan Gratuito",
        price: "$0",
        period: "Para siempre",
        features: [
            "5 archivos por día",
            "ETL estandarización básica",
            "Exportación SHP, KML, KMZ",
            "Soporte comunidad"
        ]
    },

    // Plan Pro
    pro: {
        name: "Plan Pro",
        price: "$12.990",
        period: "por mes",
        trial: "3 días de prueba GRATIS",
        features: [
            "Archivos ILIMITADOS",
            "Todas las herramientas",
            "Transformación CRS avanzada",
            "Generador de buffers",
            "Procesamiento por lotes",
            "Soporte prioritario 24/7",
            "API access"
        ]
    }
};

// Función para actualizar precios en la página
function updatePricing() {
    // Actualizar precio Pro en la sección de precios
    const proPriceElements = document.querySelectorAll('.pro-price, [data-price="pro"]');
    proPriceElements.forEach(el => {
        el.textContent = PRICING_CONFIG.pro.price;
    });

    // Actualizar precio en el hero si existe
    const heroPriceElements = document.querySelectorAll('[data-hero-price]');
    heroPriceElements.forEach(el => {
        el.textContent = `Desde ${PRICING_CONFIG.pro.price}/mes`;
    });

    console.log('💰 Precios actualizados desde config.js');
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updatePricing);
} else {
    updatePricing();
}
