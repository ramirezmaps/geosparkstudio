# 💰 Cómo Cambiar el Precio en la Landing Page

## 📍 Ubicación del Archivo

```
ETL_DATA_SEA_ANT/
└── landing_page/
    └── config.js  ← EDITAR ESTE ARCHIVO
```

---

## ⚡ Pasos Rápidos

### Paso 1: Abrir el archivo `config.js`

```
landing_page/config.js
```

### Paso 2: Cambiar el precio en la línea 8

```javascript
const PRECIO_PRO = "$10.990";  // ← CAMBIA ESTE VALOR
```

**Ejemplo:** Para cambiar a $14.990:
```javascript
const PRECIO_PRO = "$14.990";
```

### Paso 3: Guardar y subir a GitHub

Ejecuta en PowerShell desde la carpeta del proyecto:

```powershell
Copy-Item -Recurse -Force "landing_page\*" "C:\Users\Nacho\Desktop\Proyectos_AUTOMATIZACIONES_PYTHON\geospark-landing\"
cd "C:\Users\Nacho\Desktop\Proyectos_AUTOMATIZACIONES_PYTHON\geospark-landing"
git add .
git commit -m "Precio actualizado a $XX.XXX"
git push origin main
```

### Paso 4: Esperar 1-2 minutos

GitHub Pages actualiza automáticamente.

---

## 🔄 Comando Todo en Uno

Copia y pega este comando (reemplaza `$XX.XXX` con el nuevo precio):

```powershell
# Cambiar al directorio del proyecto
cd "C:\Users\Nacho\Desktop\Proyectos_AUTOMATIZACIONES_PYTHON\ETL_DATA_SEA_ANT"

# Copiar y subir a GitHub
Copy-Item -Recurse -Force "landing_page\*" "..\geospark-landing\"
cd "..\geospark-landing"
git add .
git commit -m "Precio actualizado"
git push origin main
```

---

## 🌐 Verificar

Después de hacer push, verifica en:

👉 https://ramirezmaps.github.io/geosparkstudio/

**Tip:** Si no ves el cambio, recarga con `Ctrl + Shift + R`

---

## ⚠️ Importante

El precio existe en **dos sistemas separados**:

| Sistema | Dónde cambiar |
|---------|---------------|
| **Landing Page** | `landing_page/config.js` |
| **App Streamlit** | Panel Admin → Gestión de Planes |

**Debes actualizar ambos manualmente cuando cambies precios.**

---

## 📝 Ejemplo Completo

Si quieres cambiar el precio de $12.990 a $19.990:

1. Abre `landing_page/config.js`
2. Encuentra: `const PRECIO_PRO = "$12.990";`
3. Cambia a: `const PRECIO_PRO = "$19.990";`
4. Guarda el archivo
5. Ejecuta:
```powershell
cd "C:\Users\Nacho\Desktop\Proyectos_AUTOMATIZACIONES_PYTHON\ETL_DATA_SEA_ANT"
Copy-Item -Recurse -Force "landing_page\*" "..\geospark-landing\"
cd "..\geospark-landing"
git add . && git commit -m "Precio Pro: $19.990" && git push
```

¡Listo! 🚀
