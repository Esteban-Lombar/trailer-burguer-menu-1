// Menú real de Trailer Burger.
// `image: null` significa que todavía no hay foto del producto — se añade después.
//
// Cada hamburguesa tiene 4 precios (edítalos directamente aquí):
//   sola          -> solo la hamburguesa
//   conPapas      -> hamburguesa + papas
//   conBebida     -> hamburguesa + bebida
//   comboCompleto -> hamburguesa + papas + bebida

export const menuSections = [
  {
    id: "hamburguesas",
    title: "Hamburguesas",
    items: [
      {
        id: "hamburguesa-clasica",
        name: "HAMBURGUESA CLÁSICA",
        description: "TOCINETA ASADA",
        details:
          "Carne 100% de res, Pan brioche asado a la parrilla, Queso americano, tocineta asada crocante, Lechuga, Tomate Cebolla.",
        image: "/productos/hamburguesa-asada-normal.png",
        prices: {
          sola: 20000,
          conPapas: 25000,
          conBebida: 24000,
          comboCompleto: 26000,
        },
      },
      {
        id: "hamburguesa-casa",
        name: "HAMBURGUESA DE LA CASA",
        description: "MERMELADA DE TOCINETA",
        details:
          "Carne 100% de res, Pan brioche asado a la parrilla, Queso americano, tocineta caramelizada, Lechuga, Tomate Cebolla.",
        image: "/productos/hamburguesa-caramelizada-normal.png",
        prices: {
          sola: 20000,
          conPapas: 25000,
          conBebida: 24000,
          comboCompleto: 26000,
        },
      },
      {
        id: "hamburgusa-doble",
        name: "HAMBURGUESA DOBLE CLASICA",
        description: "TOCINETA ASADA",
        details:
          "Doble carne 100% de res, Pan brioche asado a la parrilla, Queso americano, tocineta asada crocante, Lechuga, Tomate Cebolla.",
        image: "/productos/hamburguesa-doble-asada.png",
        prices: {
          sola: 25000,
          conPapas: 30000,
          conBebida: 29000,
          comboCompleto: 30000,
        },
      },
      {
        id: "hamburgusa-doble",
        name: "HAMBURGUESA DOBLE DE LA CASA",
        description: "MERMELADA DE TOCINETA",
        details:
          "Doble carne 100% de res, Pan brioche asado a la parrilla, Queso americano, Tocineta caramelizada, Lechuga, Tomate Cebolla.",
        image: "/productos/hamburguesa-doble-caramelizada.png",
        prices: {
          sola: 25000,
          conPapas: 30000,
          conBebida: 29000,
          comboCompleto: 30000,
        },
      },
    ],
  },
  {
    id: "papas",
    title: "Papas",
    items: [
      {
        id: "papas-raras",
        name: "PAPAS RARAS",
        description: "Porción de papas fritas a la francesa con queso chedar derretido y tocineta caramelizada",
        image: "/productos/papas-raras.png",
        price: 18000,
      },
      {
        id: "porcion-papas",
        name: "PORCION DE PAPAS FRITAS",
        description: "una porcion de nuestras delicioasas papas fritas a la francesa",
        image: "/productos/porcion-papas-normales.png",
        price: 5000,
      },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    items: [
      {
        id: "coca-cola-original",
        name: "COCA COLA ORIGINAL",
        description: "",
        image: "/productos/cocacola-oroginal-2-400ml.png",
        price: 4000,
      },
      {
        id: "coca-cola-zero",
        name: "COCA COLA ZERO",
        description: "",
        image: "/productos/cocacola-zero-400ml.png",
        price: 4000,
      },
      {
        id: "agua-con-gas",
        name: "AGUA CON GAS",
        description: "",
        image: "productos/agua-gas-brisa.png",
        price: 4000,
      },
      {
        id: "agua",
        name: "AGUA",
        description: "",
        image: "/productos/agua-normal-brisa.png",
        price: 4000,
      },
      {
        id: "uva",
        name: "UVA",
        description: "",
        image: "/productos/postobon-uva.png",
        price: 4000,
      },
      {
        id: "manzana",
        name: "MANZANA",
        description: "",
        image: "/productos/postobon-manzana.png",
        price: 4000,
      },
    ],
  },
  {
    id: "adiciones",
    title: "Adiciones",
    items: [
      {
        id: "adicion.-queso",
        name: "ADICION DE QUESO",
        description: "",
        image: "/productos/adicion-queso.png",
        price: 3000,
      },
      {
        id: "adicion-tocineta",
        name: "ADICION DE TOCINETA",
        description: "",
        image: "/productos/adicion-tocineta-asada.webp",
        price: 3000,
      },
      {
        id: "adicion-carne",
        name: "ADICION DE CARNE",
        description: "",
        image: "/productos/adicion-carne.png",
        price: 6000,
      },
    ],
  },
];