# 📱 Guía de Integración WhatsApp - Landing Page

## 🌐 Implementación Actual

El botón flotante de WhatsApp está integrado en la landing page con las siguientes características:

- ✅ Botón flotante en esquina inferior derecha
- ✅ Animación de pulso para llamar la atención
- ✅ Tooltip "¿Necesitas ayuda?" al hacer hover
- ✅ Diseño responsive (se adapta a móviles)
- ✅ Mensaje predefinido al abrir chat

---

## ⚙️ Configuración

### Paso 1: Cambiar el Número de WhatsApp

En todos los archivos HTML de la landing page, busca esta línea:

```html
<a href="https://wa.me/56912345678?text=Hola!%20Estoy%20interesado%20en%20Geo%20Spark%20Studio"
```

Cambia `56912345678` por tu número real:
- **Formato:** Código de país + número sin espacios ni guiones
- **Chile:** `569XXXXXXXX` (56 = código país, 9 = móvil)
- **Ejemplo:** `56987654321`

### Paso 2: Personalizar el Mensaje Inicial

El parámetro `text=` define el mensaje que aparece pre-escrito:

```
?text=Hola!%20Estoy%20interesado%20en%20Geo%20Spark%20Studio
```

- Los espacios se codifican como `%20`
- Para cambiar el mensaje, reemplaza el texto después de `text=`

**Ejemplos:**
```
?text=Hola!%20Quiero%20más%20información
?text=Necesito%20ayuda%20con%20mis%20datos%20GIS
?text=Consulta%20sobre%20planes%20Pro
```

---

## 📁 Archivos a Modificar

El botón de WhatsApp debe estar en todos los archivos HTML:

| Archivo | Estado |
|---------|--------|
| `index.html` | ✅ Implementado |
| `blog.html` | ⏳ Pendiente |
| `blog-sea-standards.html` | ⏳ Pendiente |
| `blog-coordinate-systems.html` | ⏳ Pendiente |
| `blog-etl-automation.html` | ⏳ Pendiente |
| `blog-topology-validation.html` | ⏳ Pendiente |
| `blog-streamlit-gis.html` | ⏳ Pendiente |
| `blog-buffers.html` | ⏳ Pendiente |
| `blog-spatial-join.html` | ⏳ Pendiente |

---

## 🎨 Código del Botón

Copia este código antes de `</body>` en cada archivo HTML:

```html
<!-- WhatsApp Floating Button -->
<a href="https://wa.me/TU_NUMERO?text=Hola!%20Estoy%20interesado%20en%20Geo%20Spark%20Studio" 
   class="whatsapp-float" 
   target="_blank" 
   rel="noopener noreferrer"
   aria-label="Contactar por WhatsApp">
    <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor">
        <path d="M16.004 0h-.01C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.96A15.91 15.91 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.584c-.39 1.098-1.924 2.012-3.172 2.278-.856.182-1.974.326-5.74-1.234-4.818-1.996-7.918-6.896-8.16-7.214-.232-.318-1.952-2.6-1.952-4.958s1.236-3.516 1.674-3.996c.39-.428.852-.536 1.136-.536.282 0 .564.002.812.016.26.014.608-.1.95.726.39.942 1.32 3.224 1.436 3.456.116.232.194.504.04.812-.156.31-.232.504-.464.776-.232.272-.488.608-.696.814-.232.232-.474.484-.204.948.27.464 1.2 1.98 2.578 3.208 1.77 1.578 3.264 2.068 3.726 2.3.464.232.734.194 1.004-.116.27-.31 1.156-1.35 1.464-1.814.31-.464.618-.388 1.042-.232.424.156 2.696 1.272 3.16 1.504.464.232.772.348.888.54.116.194.116 1.118-.274 2.216z"/>
    </svg>
    <span class="whatsapp-tooltip">¿Necesitas ayuda?</span>
</a>

<style>
    .whatsapp-float {
        position: fixed;
        width: 60px;
        height: 60px;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
        color: #fff;
        border-radius: 50%;
        text-align: center;
        font-size: 28px;
        box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        transition: all 0.3s ease;
        animation: whatsapp-pulse 2s infinite;
    }
    
    .whatsapp-float:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 30px rgba(37, 211, 102, 0.6);
        animation: none;
    }
    
    .whatsapp-float:hover .whatsapp-tooltip {
        opacity: 1;
        visibility: visible;
        transform: translateX(-10px);
    }
    
    .whatsapp-tooltip {
        position: absolute;
        right: 70px;
        background: #1e293b;
        color: #fff;
        padding: 8px 16px;
        border-radius: 8px;
        font-size: 14px;
        white-space: nowrap;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    }
    
    .whatsapp-tooltip::after {
        content: '';
        position: absolute;
        right: -8px;
        top: 50%;
        transform: translateY(-50%);
        border-width: 8px 0 8px 8px;
        border-style: solid;
        border-color: transparent transparent transparent #1e293b;
    }
    
    @keyframes whatsapp-pulse {
        0% { box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4); }
        50% { box-shadow: 0 4px 30px rgba(37, 211, 102, 0.7); }
        100% { box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4); }
    }
    
    @media (max-width: 768px) {
        .whatsapp-float {
            width: 55px;
            height: 55px;
            bottom: 20px;
            right: 20px;
        }
        .whatsapp-tooltip { display: none; }
    }
</style>
```

---

## 🔄 Comando Rápido para Actualizar Todos los Archivos

Si cambias tu número de WhatsApp, usa este comando PowerShell:

```powershell
$oldNumber = '56912345678'
$newNumber = 'TU_NUMERO_REAL'

$files = Get-ChildItem -Path "landing_page" -Filter "*.html"
foreach ($file in $files) {
    (Get-Content $file.FullName -Raw) -replace $oldNumber, $newNumber | Set-Content $file.FullName
}

Write-Host "Número actualizado en $($files.Count) archivos"
```

---

## 📊 Tracking (Opcional)

Para trackear clics en el botón con Google Analytics:

```html
<a href="https://wa.me/TU_NUMERO" 
   onclick="gtag('event', 'whatsapp_click', {'event_category': 'contact'});"
   ...>
```

---

## ✅ Checklist de Implementación

- [ ] Cambiar `56912345678` por tu número real
- [ ] Personalizar mensaje inicial si lo deseas
- [ ] Añadir botón a todos los archivos HTML del blog
- [ ] Sincronizar con repositorio público (geosparkstudio)
- [ ] Verificar que funcione en móvil y desktop

---

## 🆘 Solución de Problemas

| Problema | Solución |
|----------|----------|
| El botón no aparece | Verificar que el código esté antes de `</body>` |
| WhatsApp no abre | Verificar formato del número (sin + ni espacios) |
| Mensaje no aparece | Verificar encoding (%20 para espacios) |
| No funciona en iOS | Usar `https://wa.me/` no `https://api.whatsapp.com/` |
