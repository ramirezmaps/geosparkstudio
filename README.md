# 🚀 Geo Spark Studio - Landing Page

Landing page profesional para Geo Spark Studio - Suite de herramientas GIS en la nube.

## 📂 Estructura del Proyecto

```
geospark-landing/
├── 📄 index.html              # Página principal
├── 📄 robots.txt              # Configuración SEO para bots
├── 📄 sitemap.xml             # Mapa del sitio para SEO
├── 📄 README.md               # Este archivo
│
├── 📁 assets/                 # Recursos estáticos
│   ├── 📁 css/
│   │   └── styles.css         # Estilos principales
│   ├── 📁 js/
│   │   └── config.js          # Configuración JavaScript
│   └── 📁 images/             # Todas las imágenes
│       ├── blog_*.png         # Imágenes de artículos
│       ├── feature_*.png      # Imágenes de características
│       └── hero_dashboard.png # Imagen principal
│
├── 📁 pages/                  # Páginas secundarias
│   ├── documentacion.html     # Documentación de la app
│   ├── privacidad.html        # Política de privacidad
│   ├── terminos.html          # Términos de servicio
│   ├── sobre-nosotros.html    # Página sobre nosotros
│   └── proximamente.html      # Página de próximamente
│
├── 📁 blog/                   # Artículos del blog
│   ├── index.html             # Índice del blog
│   ├── blog-buffers.html
│   ├── blog-coordinate-systems.html
│   ├── blog-etl-automation.html
│   ├── blog-sea-standards.html
│   ├── blog-spatial-join.html
│   ├── blog-streamlit-gis.html
│   └── blog-topology-validation.html
│
├── 📁 docs/                   # Documentación técnica
│   ├── DEPLOYMENT_GUIDE.md    # Guía de despliegue
│   ├── GUIA_PRECIOS.md        # Guía de precios
│   ├── GUIA_WHATSAPP.md       # Guía de integración WhatsApp
│   └── 📁 seo-audit/          # Auditoría SEO
│       ├── AUDITORIA_SEO_OFFPAGE.md
│       ├── seo_dashboard.html
│       ├── disavow.txt
│       └── *.csv              # Archivos de análisis
│
└── 📁 scripts/                # Scripts de utilidad
    └── update_links.ps1       # Script para actualizar enlaces
```

## 📋 Características

✅ **Diseño Premium** con gradientes morado-rosa  
✅ **Fondo gris claro** (#F7F9FC) profesional  
✅ **Completamente responsive** (Desktop, Tablet, Mobile)  
✅ **Animaciones suaves** CSS  
✅ **8 secciones completas**:
- Hero con CTAs
- Barra de estadísticas
- 6 características principales
- "Cómo funciona" (3 pasos)
- Pricing (2 planes)
- Testimonios
- CTA final
- Footer completo

✅ **Blog con 7 artículos SEO optimizados**  
✅ **Botón WhatsApp flotante**

## 🎨 Paleta de Colores

```css
Fondo principal: #F7F9FC (Gris muy claro)
Fondo blanco: #FFFFFF
Gradiente primario: #667eea → #fa709a
Gradiente secundario: #764ba2 → #ee9ca7
Acento dorado: #feca57
```

## 🚀 Cómo Usar

### Opción 1: Abrir Localmente

1. Navega a la carpeta del proyecto
2. Abre `index.html` en tu navegador

### Opción 2: Servidor Local

```bash
# Con Python 3
cd geospark-landing
python -m http.server 8000

# Luego abre: http://localhost:8000
```

### Opción 3: GitHub Pages (Actual)

El sitio está desplegado en:
🔗 https://ramirezmaps.github.io/geosparkstudio/

## 📝 Personalización

### Cambiar Textos

Edita `index.html` y busca el texto que quieras modificar.

### Cambiar Colores

Edita `assets/css/styles.css` en la sección `:root`:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #TU-COLOR-1, #TU-COLOR-2);
    --bg-main: #F7F9FC;  /* Fondo general */
    /* ... más variables */
}
```

### Cambiar Precios

En `index.html`, busca la sección `<!-- Pricing Section -->` y modifica:

```html
<span class="price-amount">$TU-PRECIO</span>
```

## 🔧 Optimizaciones Incluidas

✅ **SEO Ready**
- Meta tags completos
- Open Graph tags
- Estructura semántica HTML5
- Sitemap XML
- Robots.txt

✅ **Performance**
- CSS optimizado
- No dependencies externas (excepto Google Fonts)
- Imágenes optimizadas

✅ **Responsive**
- Mobile-first approach
- Breakpoints en 768px y 1024px
- Grid y Flexbox

✅ **Accesibilidad**
- Estructura semántica
- Contraste de colores WCAG
- Links descriptivos

## 📱 Responsividad

- **Desktop** (>1024px): Layout completo
- **Tablet** (768px-1024px): Grid adaptado
- **Mobile** (<768px): Stack vertical

## 📊 Conversión Optimizada

✅ **CTAs Claros**: Múltiples puntos de conversión  
✅ **Trust Signals**: Badges, stats, testimonios  
✅ **Social Proof**: Números impresionantes  
✅ **Value Proposition**: Clara en hero  
✅ **Urgency**: Badges "Popular" y "Nuevo"

## 📄 Licencia

Este diseño es exclusivo para Geo Spark Studio.

© 2025 Geo Spark Studio - Todos los derechos reservados.
