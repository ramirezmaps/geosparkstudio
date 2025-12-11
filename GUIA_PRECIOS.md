# 💰 Guía de Sincronización de Precios

## 📋 Resumen

Los precios existen en **dos lugares**:

| Sistema | Archivo | Uso |
|---------|---------|-----|
| **Streamlit App** | `modules/auth_system.py` → `PLANS` | Panel Admin, Registro |
| **Landing Page** | `landing_page/config.js` | Página web pública |

⚠️ **Al cambiar precios en el panel de administración, también debes actualizar `config.js`**

---

## 🔄 Cómo Sincronizar Precios

### Paso 1: Cambiar en Panel de Administración (Streamlit)
1. Inicia sesión como administrador
2. Ve a **Gestión de Planes**
3. Modifica el precio
4. Guarda los cambios

### Paso 2: Actualizar Landing Page

Edita el archivo `landing_page/config.js`:

```javascript
const PRICING_CONFIG = {
    free: {
        price: "$0",
        // ...
    },
    pro: {
        price: "$XX.XXX",  // ← Cambia este valor
        // ...
    }
};
```

### Paso 3: Subir Cambios a GitHub
```powershell
# Desde la carpeta del proyecto
Copy-Item -Recurse -Force "landing_page\*" "C:\Users\Nacho\Desktop\Proyectos_AUTOMATIZACIONES_PYTHON\geospark-landing\"

cd "C:\Users\Nacho\Desktop\Proyectos_AUTOMATIZACIONES_PYTHON\geospark-landing"
git add .
git commit -m "Actualizar precio a $XX.XXX"
git push origin main
```

---

## ⚡ Script Rápido de Actualización

Guarda este script como `actualizar_precio.ps1`:

```powershell
param(
    [Parameter(Mandatory=$true)]
    [string]$NuevoPrecio  # Ej: "$14.990"
)

# 1. Actualizar config.js
$configPath = "landing_page\config.js"
$content = Get-Content $configPath -Raw
$content = $content -replace 'price: "\$[\d.,]+"', "price: `"$NuevoPrecio`""
Set-Content $configPath $content
Write-Host "✅ config.js actualizado a $NuevoPrecio"

# 2. Sincronizar con repo público
Copy-Item -Recurse -Force "landing_page\*" "..\geospark-landing\"
Set-Location "..\geospark-landing"
git add .
git commit -m "Precio actualizado a $NuevoPrecio"
git push origin main

Write-Host "🚀 Landing page actualizada!"
```

**Uso:**
```powershell
.\actualizar_precio.ps1 -NuevoPrecio "$14.990"
```

---

## 📁 Ubicación del Archivo de Precios

```
ETL_DATA_SEA_ANT/
└── landing_page/
    └── config.js  ← EDITAR AQUÍ
```

---

## 🔍 Verificación

Después de hacer push, verifica en:
- https://ramirezmaps.github.io/geosparkstudio/

El precio debería aparecer actualizado en la sección de "Planes".

---

## 💡 Por qué no es automático

La landing page está en **GitHub Pages** (HTML estático) y el panel de admin está en **Streamlit Cloud**. Son sistemas separados sin conexión directa.

**Alternativas futuras:**
1. API en Supabase que la landing lea con JavaScript
2. GitHub Actions que sincronice automáticamente
3. Usar un CMS headless

Por ahora, la sincronización manual es la opción más simple y confiable.
