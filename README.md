<div>
  <p style="text-align:center">
    <img align="center" src="./public/Tesla/programador.png" alt="JuveYell" width="300px">
  </p>
</div>
<h2 align="center" style="color:#CD5C5C">JLG'777'
  <img src="https://github.com/blackcater/blackcater/raw/main/images/Hi.gif" height="22" />
</h2>
<p align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=4000&pause=1000&multiline=true&random=false&width=435&lines=Un+proyecto+creado+por+J0RG1T0" alt="Typing SVG" />
  </a>
</p>
<hr>

## 📧 Conéctate conmigo:

[![GMAIL](https://img.shields.io/badge/Gmail-Gmail?style=white&logo=Gmail&logoColor=white&color=%23EA4335)](proyectojlg777@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-LinkedIn?style=white&logo=LinkedIn&logoColor=white&color=%230A66C2)](https://linkedin.com/in/)
[![Discord](https://img.shields.io/badge/Discord-Discord?style=white&logo=Discord&logoColor=white&color=%235865F2)](jorgeg777#9720)

# Landing Page Tesla (Astro)

Proyecto de landing page inspirado en Tesla, construido con Astro + Tailwind CSS (v4, via plugin Vite).

## Stack actual

- `astro@^5.17.2`
- `tailwindcss@^4.1.5`
- `@tailwindcss/vite@^4.1.5`

## Scripts disponibles

- `npm run dev`: inicia servidor local en desarrollo.
- `npm run build`: genera build de produccion.
- `npm run preview`: levanta preview del build.
- `npm run astro`: ejecuta CLI de Astro.

## Estructura actual del proyecto

```text
LandinPage-Tesla-Astro/
|- .astro/                               # Archivos generados por Astro (tipos, metadata y estado interno)
|  |- content-assets.mjs
|  |- content-modules.mjs
|  |- content.d.ts
|  |- data-store.json
|  |- settings.json
|  |- types.d.ts
|  `- collections/
|- .git/                                 # Historial y metadatos de Git
|- .vscode/                              # Configuracion de VS Code
|  |- extensions.json
|  `- launch.json
|- node_modules/                         # Dependencias instaladas por npm
|- public/
|  `- Tesla/                             # Assets estaticos (imagenes, video, favicon)
|     |- favicon1.ico
|     |- Homepage-Demo-Drive-Desktop-NA.webm
|     |- Homepage-Demo-Drive-Desktop-Poster-NA.avif
|     |- Homepage-Model-3-Desktop-US.avif
|     |- Homepage-Model-S-Desktop-US.avif
|     |- Homepage-Model-X-Desktop-US.avif
|     |- Homepage-Model-Y-2-Hero-Desktop-APAC-LHD.avif
|     |- Homepage-Solar-Panels-Desktop-v2.avif
|     |- Homepage-We-Are-Tesla-Desktop-Poster.avif
|     |- Homepage-We-Are-Tesla-Tablet-Poster.avif
|     |- Homepage-We-Are-Tesla-Tablet.webm
|     |- Mega-Menu-Charging-Charging-Global.avif
|     |- Mega-Menu-Charging-Home-Charging.avif
|     |- Mega-Menu-Charging-Supercharging-NA.avif
|     |- Mega-Menu-Energy-Megapack.avif
|     |- Mega-Menu-Energy-Powerwall-Global.avif
|     |- Mega-Menu-Vehicles-Cybertruck-1x.avif
|     |- Mega-Menu-Vehicles-Model-3-Performance-LHD.avif
|     |- Mega-Menu-Vehicles-Model-S.avif
|     |- Mega-Menu-Vehicles-Model-X.avif
|     `- Mega-Menu-Vehicles-Model-Y-2-v2.avif
|- src/
|  |- components/
|  |  |- FooterButtons.astro             # Botoneras configurables (izq/der/unico)
|  |  |- HeroSection.astro               # Seccion hero reusable (fondo imagen o video)
|  |  |- LandingHeader.astro             # Header principal con navegacion + logica de scroll/hover
|  |  `- Logo.astro                      # SVG del logo Tesla
|  |- layouts/
|  |  `- Mylayout.astro                  # Estructura HTML base (head, body, favicon, fuente)
|  |- pages/
|  |  `- index.astro                     # Home principal que compone todas las secciones
|  `- styles/
|     `- global.css                      # Entrada de estilos globales (`@import "tailwindcss"`)
|- .gitignore
|- astro.config.mjs                      # Config Astro + plugin de Tailwind en Vite
|- package-lock.json
|- package.json
`- README.md
```

## Como corre hoy la app

1. `src/pages/index.astro` arma la landing con `LandingHeader`, varias `HeroSection` y `FooterButtons`.
2. `src/layouts/Mylayout.astro` envuelve el contenido y define metadatos globales.
3. `src/styles/global.css` carga Tailwind CSS para todos los componentes.
4. Los recursos multimedia se sirven desde `public/Tesla` con rutas absolutas (`/Tesla/...`).

## Notas

- `.astro/` y `node_modules/` son carpetas generadas/instaladas localmente.
- El proyecto no tiene por ahora carpeta `src/content/`, tests ni rutas adicionales aparte de `/`.

---

## ✒️ Autores

**Jorge Grandía** - _Trabajo Inicial_ - [JLG777](https://github.com/jlg777)

**Jorge Grandía** - _Documentación_ - [JLG777](#jlg777)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver [LICENCE](./LICENCE) para más información.

## 🎁 Expresiones de Gratitud

- Comenta a otros sobre este proyecto.
- Invita una cerveza o un café a alguien del equipo.
- Da las gracias públicamente.
- Dona con cripto a esta dirección:
  - (btc) 16ApGFxMXfF8ktysSkmLBzLEJPHubtwKjp
  - (btc-SegWit) bc1q0v8fvv3gvga02h9xspcg7npghjfyny20lavc37
  - (Ethereum) 0x1ee2842c194c95bc54473c6b27d602fc0bfc81a9

---

⌨️ con ❤️ por JLG777

_Copyright (c) [2025] [jlg777]_
