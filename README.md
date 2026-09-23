# Wilmar Pineda — Hoja de vida

Hoja de vida estática en español e inglés. HTML, CSS y JavaScript sin dependencias, compilación, servicios externos ni claves. Diseñado para GitHub Pages, con el dominio existente `wfpinedar.me`.

## Vista local

Desde esta carpeta, ejecutar `python -m http.server 4173 --bind 127.0.0.1` y abrir http://127.0.0.1:4173. También se puede abrir `index.html` directamente.

## Publicación

El sitio se publica desde la raíz de la rama configurada en GitHub Pages. Subir los archivos al repositorio y, en **Settings → Pages**, usar **Deploy from a branch**, seleccionar esa rama y **/ (root)**. No requiere GitHub Actions ni Node.js. `.nojekyll` permite servir los archivos directamente. Se conserva el `CNAME` original.

Los cambios locales requieren commit y push para publicarse. La configuración DNS y disponibilidad del dominio se administran fuera de este repositorio.

## Edición

- `index.html`: contenido en español, metadatos y estructura accesible. Disponible también sin JavaScript.
- `assets/main.js`: traducciones al inglés, idioma persistente, menú móvil y navegación activa.
- `assets/styles.css`: diseño adaptable, fuentes locales, impresión y movimiento reducido.
- `assets/images/wilmar-pineda.png`: fotografía suministrada (`hv/fercho_new.png`).
- `assets/docs/`: hojas de vida Full Stack en español e inglés.

Al cambiar textos, actualizar el HTML en español y el diccionario `english` en JavaScript. Los enlaces de CV cambian con el idioma.

## Fuentes del contenido

Información del portafolio anterior `js-portfolio`, complementada con `hv/en_cv_devops.tex` y las hojas de vida Full Stack en `hv/output/pdf`. La trayectoria, tecnologías y mentorías proceden de esos documentos. MinCIT se presenta como «2025» porque el CV Full Stack indica «Actualidad» y el documento DevOps indica diciembre de 2025 como finalización.
