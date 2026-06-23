# SAVOR - Menú de Hamburguesas

Proyecto React + Vite + Tailwind CSS, generado a partir del diseño de Stitch.

## Estructura

```
savor-menu/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── src/
    ├── main.jsx              # punto de entrada
    ├── App.jsx               # componente raíz, maneja estado (categoría activa, carrito)
    ├── index.css             # Tailwind + estilos custom (shadows, scrollbar, etc.)
    ├── data/
    │   └── burgers.js        # catálogo de hamburguesas y categorías
    └── components/
        ├── Header.jsx        # barra superior fija con logo y búsqueda
        ├── Hero.jsx          # título y descripción
        ├── CategoryChips.jsx # filtro de categorías (Todas, Clásicas, Premium...)
        ├── BurgerCard.jsx    # tarjeta individual de producto
        ├── BurgerGrid.jsx    # grid que filtra y renderiza las tarjetas
        ├── FloatingCart.jsx  # botón flotante "Ver Carrito"
        └── BottomNav.jsx     # navegación inferior (Home / Menu / Cart)
```

## Instalación y ejecución local

```bash
cd savor-menu
npm install
npm run dev
```

Esto levanta un servidor local (normalmente en `http://localhost:5173`).

## Build de producción

```bash
npm run build
npm run preview
```

## Notas

- El filtro de categorías ya funciona: al hacer clic en un chip, el grid se filtra usando el campo `category` de cada hamburguesa en `src/data/burgers.js`.
- El contador del carrito (`FloatingCart`) sube cada vez que haces clic en una tarjeta — es solo lógica de front, no hay persistencia ni backend.
- Todos los colores, tipografías y espaciados están definidos como tokens en `tailwind.config.js`, igual que en el diseño original de Stitch (mismos nombres: `primary`, `secondary-container`, `surface-container-low`, etc.), así que puedes seguir usando esas clases de Tailwind en nuevas pantallas y mantener consistencia visual.
- Para agregar más hamburguesas o categorías, solo edita `src/data/burgers.js` — no es necesario tocar los componentes.
- Los ícono usan Material Symbols (cargados vía Google Fonts en `index.html`).

## Siguientes pasos sugeridos

- Conectar `BurgerGrid`/`FloatingCart` a un estado global (Context o Zustand) si el carrito necesita persistir entre pantallas.
- Añadir una pantalla de detalle de producto y una de carrito completo, reutilizando los mismos tokens de Tailwind.
- Cuando quieras agregar el backend en Node, este front no necesita cambios estructurales: solo reemplaza el array estático de `burgers.js` por un `fetch`/`useEffect` (o React Query) hacia tu API.
