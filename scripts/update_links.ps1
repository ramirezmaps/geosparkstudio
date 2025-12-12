# Script para actualizar links de la landing page
# Ejecutar después de deployar la app Streamlit

param(
    [Parameter(Mandatory=$true)]
    [string]$AppUrl
)

Write-Host "`n🔗 Actualizando links en la landing page..." -ForegroundColor Cyan
Write-Host "App URL: $AppUrl`n" -ForegroundColor Yellow

$landingFile = "index.html"

if (-not (Test-Path $landingFile)) {
    Write-Host "❌ Error: index.html no encontrado" -ForegroundColor Red
    Write-Host "   Ejecuta este script desde la carpeta landing_page" -ForegroundColor Yellow
    exit 1
}

# Crear backup
$backupFile = "index.html.backup"
Copy-Item $landingFile $backupFile -Force
Write-Host "✅ Backup creado: $backupFile" -ForegroundColor Green

# Leer contenido
$content = Get-Content $landingFile -Raw

# Reemplazar todos los href="#"
$updatedContent = $content -replace 'href="#"', "href=`"$AppUrl`""

# Guardar cambios
$updatedContent | Set-Content $landingFile -NoNewline

Write-Host "✅ Links actualizados exitosamente`n" -ForegroundColor Green

# Contar cuántos links se actualizaron
$linkCount = ([regex]::Matches($content, 'href="#"')).Count
Write-Host "📊 Total de links actualizados: $linkCount" -ForegroundColor Cyan

Write-Host "`n🎯 Acciones siguientes:" -ForegroundColor Magenta
Write-Host "   1. Verifica los cambios en index.html" -ForegroundColor White
Write-Host "   2. Abre la landing en http://localhost:8080" -ForegroundColor White
Write-Host "   3. Prueba que los links funcionen" -ForegroundColor White
Write-Host "   4. Haz commit y push de los cambios`n" -ForegroundColor White

Write-Host "✨ ¡Listo! Tu landing page está conectada a la app." -ForegroundColor Green
