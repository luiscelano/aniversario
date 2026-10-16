# Nuestra historia — React + Vite

Prototipo de aniversario en React con estética de álbum romántico / scrapbook.

## Requisitos
- Node.js 18 o superior
- npm

## Ejecutar en local
```bash
npm install
npm run dev
```
Vite mostrará una dirección local (normalmente http://localhost:5173).

## Comprobar compilación de producción
```bash
npm run build
npm run preview
```

## Dónde personalizar
- `src/data/content.js`: fecha de inicio, eventos de la línea del tiempo, fotos, cartas y sueños.
- `src/App.jsx`: portada y estructura general.
- `src/styles/theme.css`: colores, tipografías, espaciado y responsive.
- `public/assets/photos/`: coloca aquí tus fotografías personales.
- `public/assets/music/cancion.mp3`: agrega la canción que quieras usar.

Para usar fotos locales, por ejemplo, guarda `primera-cita.jpg` en `public/assets/photos/` y usa `/assets/photos/primera-cita.jpg` como valor de `image`.

## Secciones incluidas
1. Inicio con contador
2. Línea del tiempo
3. Álbum Polaroid con modal
4. Cartas interactivas
5. Sorpresa final
6. Nuestro futuro

No incluye «Nuestros lugares» ni «Juegos y diversión», según lo solicitado.

## Notas
- Las fotos actuales son imágenes de demostración enlazadas desde Unsplash; cámbialas por fotos propias antes de publicar.
- La música no se reproduce hasta que exista el archivo `public/assets/music/cancion.mp3` y la persona pulse el botón.
- Es una web estática: no hay backend, inicio de sesión ni protección privada de fotos.
# aniversario
