# 🚀 Guía de Deployment - Geo Spark Studio

## 📋 **Resumen**

Esta guía te ayudará a conectar la landing page con la aplicación Streamlit.

---

## 🎯 **Arquitectura Final**

```
Landing Page (HTML/CSS)          App Streamlit (Python)
https://geospark.com        →    https://app.geospark.com
     (Marketing)                      (Herramientas)
```

---

## 📦 **Paso 1: Deployar Streamlit App**

### **Streamlit Community Cloud (Recomendado)**

#### 1. Preparar Repositorio GitHub

```bash
# Si aún no tienes repo:
cd c:\Users\Nacho\Desktop\Proyectos_AUTOMATIZACIONES_PYTHON\ETL_DATA_SEA_ANT

git init
git add .
git commit -m "Initial commit - Geo Spark Studio"
git branch -M main

# Crear repo en GitHub:
# Ve a github.com → New repository → "geo-spark-studio"

git remote add origin https://github.com/TU-USUARIO/geo-spark-studio.git
git push -u origin main
```

#### 2. Deploy en Streamlit Cloud

1. **Ve a:** https://share.streamlit.io/
2. **Sign in** con GitHub
3. **New app** → Selecciona tu repo
4. **Main file path:** `app.py`
5. **Python version:** 3.11
6. **Deploy!**

**URL resultante:**
```
https://TU-USUARIO-geo-spark-studio.streamlit.app
```

#### 3. Configurar Secretos (si es necesario)

En Streamlit Cloud:
- Settings → Secrets
- Agrega variables de entorno si las usas

---

## 🌐 **Paso 2: Deployar Landing Page**

### **Opción A: Netlify (MÁS FÁCIL)**

#### Método 1: Drag & Drop

1. **Ve a:** https://app.netlify.com/drop
2. **Arrastra** la carpeta `landing_page`
3. **¡Listo!** URL instantánea

#### Método 2: Con Git (Mejor para actualizaciones)

```bash
# En la carpeta landing_page
cd landing_page

git init
git add .
git commit -m "Landing page Geo Spark Studio"

# Crear repo en GitHub
git remote add origin https://github.com/TU-USUARIO/geo-spark-landing.git
git push -u origin main
```

Luego en Netlify:
1. **New site from Git**
2. Conecta GitHub → Selecciona repo
3. Build settings: (dejar vacío, es HTML estático)
4. **Deploy site**

**Personalizar URL:**
- Site settings → Change site name
- `geospark-studio.netlify.app`

---

### **Opción B: GitHub Pages**

```bash
cd landing_page

git init
git add .
git commit -m "Landing page"
git branch -M gh-pages  # Importante: rama gh-pages
git remote add origin https://github.com/TU-USUARIO/geo-spark-landing.git
git push -u origin gh-pages
```

En GitHub:
- Settings → Pages
- Source: `gh-pages` branch
- Save

**URL:** `https://TU-USUARIO.github.io/geo-spark-landing/`

---

### **Opción C: Vercel**

```bash
# Instalar Vercel CLI
npm install -g vercel

cd landing_page
vercel

# Sigue las instrucciones interactivas
```

---

## 🔗 **Paso 3: Conectar Links**

Una vez tengas ambas URLs, actualiza los links en `index.html`:

### URLs a Actualizar:

```html
<!-- EJEMPLO: Si tu app está en https://geospark.streamlit.app -->

<!-- 1. Navbar - Botón "Comenzar Gratis" -->
<a href="https://geospark.streamlit.app" class="btn btn-primary">Comenzar Gratis</a>

<!-- 2. Navbar - Botón "Ingresar" -->
<a href="https://geospark.streamlit.app" class="btn-link">Ingresar</a>

<!-- 3. Hero - CTA Principal -->
<a href="https://geospark.streamlit.app" class="btn btn-primary btn-large">
    🚀 Comenzar Gratis →
</a>

<!-- 4. Hero - Demo Button -->
<a href="https://geospark.streamlit.app" class="btn btn-secondary btn-large">
    ▶ Ver Demo
</a>

<!-- 5. Features - Links "Explorar" -->
<a href="https://geospark.streamlit.app" class="feature-link">Explorar →</a>

<!-- 6. Pricing - Botones de planes -->
<a href="https://geospark.streamlit.app" class="btn btn-primary btn-block">
    Prueba Gratis 14 días
</a>
```

### Script para Actualizar Automáticamente:

Crea `update_links.ps1`:

```powershell
# update_links.ps1
$appUrl = "https://TU-APP-URL.streamlit.app"
$landingFile = ".\index.html"

(Get-Content $landingFile) -replace 'href="#"', "href='$appUrl'" | Set-Content $landingFile

Write-Host "✅ Links actualizados a: $appUrl"
```

Ejecuta:
```bash
.\update_links.ps1
```

---

## 🌐 **Paso 4: Dominio Personalizado (Opcional)**

### **Comprar Dominio**

Opciones en Chile:
- **NIC Chile:** https://www.nic.cl/ (dominios .cl)
- **GoDaddy:** dominios .com, .net, etc
- **Namecheap:** económico y confiable

**Precio:** ~$10-20 USD/año

### **Configurar DNS**

#### Para Landing Page (Netlify):

En Netlify:
1. Domain settings → Add custom domain
2. Sigue instrucciones DNS

En tu proveedor DNS:
```
Tipo: CNAME
Nombre: www
Valor: tu-sitio.netlify.app

Tipo: A
Nombre: @
Valor: 75.2.60.5 (IP de Netlify)
```

#### Para App (Streamlit):

En Streamlit Cloud:
1. Settings → Custom domains
2. Agrega: `app.tudominio.com`

En tu proveedor DNS:
```
Tipo: CNAME
Nombre: app
Valor: tu-app.streamlit.app
```

**Resultado Final:**
```
Landing:  https://geospark.cl
App:      https://app.geospark.cl
```

---

## 🔐 **Paso 5: SSL/HTTPS (Automático)**

✅ **Netlify:** SSL automático y gratis
✅ **Streamlit:** SSL automático
✅ **GitHub Pages:** SSL automático

¡No necesitas hacer nada!

---

## 📊 **Paso 6: Analytics (Opcional)**

### **Google Analytics**

1. Crea cuenta en https://analytics.google.com
2. Crea propiedad
3. Obtén tracking ID: `G-XXXXXXXXXX`

En `index.html`, antes de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🎯 **Checklist de Deployment**

### Pre-Deploy:
- [ ] App funciona localmente
- [ ] Landing funciona localmente
- [ ] Requirements.txt está actualizado
- [ ] .gitignore configurado

### Deploy App:
- [ ] Repo en GitHub
- [ ] Deployed en Streamlit Cloud
- [ ] App carga correctamente
- [ ] URL funcional

### Deploy Landing:
- [ ] Repo en GitHub (o Netlify Drop)
- [ ] Deployed (Netlify/Pages/Vercel)
- [ ] Landing carga correctamente
- [ ] URL funcional

### Conexión:
- [ ] Links actualizados en landing
- [ ] Navegación funciona
- [ ] CTAs llevan a la app

### Opcional:
- [ ] Dominio personalizado configurado
- [ ] SSL activo
- [ ] Analytics instalado
- [ ] Email profesional (@tudominio.com)

---

## 🚀 **URLs de Ejemplo Finales**

### **Sin Dominio Propio:**
```
Landing: https://geospark-studio.netlify.app
App:     https://geospark-studio.streamlit.app
```

### **Con Dominio Propio:**
```
Landing: https://geospark.cl
App:     https://app.geospark.cl
```

---

## 🆘 **Troubleshooting**

### App no despliega en Streamlit:
- ✅ Verifica `requirements.txt`
- ✅ Verifica Python version (3.11 recomendado)
- ✅ Revisa logs en Streamlit Cloud

### Landing no se ve correctamente:
- ✅ Verifica que `styles.css` esté en la misma carpeta
- ✅ Verifica rutas relativas
- ✅ Hard refresh (Ctrl + Shift + R)

### Links no funcionan:
- ✅ Verifica que usaste URLs completas con `https://`
- ✅ Verifica que la app esté deployada y funcionando

---

## 💰 **Costos**

| Servicio | Costo | Recomendado |
|----------|-------|-------------|
| Streamlit Cloud | GRATIS | ✅ Sí |
| Netlify | GRATIS | ✅ Sí |
| GitHub Pages | GRATIS | ⚠️ Alternativa |
| Dominio .cl | ~$15 USD/año | ⭐ Opcional |
| Dominio .com | ~$12 USD/año | ⭐ Opcional |
| Google Workspace (email) | $6/mes | ⭐ Opcional |

**Total mínimo:** $0/mes (todo gratis)
**Total con dominio:** ~$15/año

---

## 📞 **Próximos Pasos**

1. **Deploy App** en Streamlit Cloud
2. **Deploy Landing** en Netlify
3. **Actualizar links** en landing
4. **Probar navegación** completa
5. **(Opcional) Comprar dominio**
6. **(Opcional) Configurar analytics**

---

¿Necesitas ayuda con algún paso específico? ¡Estoy aquí para guiarte! 🚀
