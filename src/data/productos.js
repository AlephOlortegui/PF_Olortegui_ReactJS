import {
  chompa1,
  chompa2,
  chompa3,
  chompa4,
  pant1,
  pant2,
  pant3,
  pant4,
  pant5,
  pijama1,
  pijama2,
  pijama3,
  polera1,
  polera2,
  polera3,
  polera4,
  polo1,
  polo2,
  polo3,
  polo4,
  polo5
} from "../assets"

/* function getRandomNumber(min, max) {
  const randomFloat = (Math.random() * (max - min) + min).toFixed(2);
  return parseFloat(randomFloat);
} */

  /* ***************** TAREA **********************8 */
// Agregar Stock de cada producto y obviamente cambiar los condicionales - TAREA
let inventario = [
  {
    id: 1,
    producto: "chompa1",
    desc: "Chompa gris tejido a lana con botones en el pecho y capucha",
    src: chompa1,
    //precio: getRandomNumber(80,120),
    precio: 91.97,
    categoria: "chompas",
    stock: 7
  },
  {
    id: 2,
    producto: "chompa2",
    desc: "Chompa marron formal a rayas",
    src: chompa2,
    // precio: getRandomNumber(80,120),
    precio: 81.25,
    categoria: "chompas"
  },
  {
    id: 3,
    producto: "chompa3",
    desc: "Chompa tricolor: negro, crema, marron slim fit, cuello redondo",
    src: chompa3,
    //precio: getRandomNumber(80,120),
    precio: 105.78,
    categoria: "chompas"
  },
  {
    id: 4,
    producto: "chompa4",
    src: chompa4,
    desc: "Chompa gradiente Bicolor: vino y blanco slim fit, tejido a lana",
    // precio: getRandomNumber(80,120),
    precio: 70.77,
    categoria: "chompas"
  },
  {
    id: 5,
    producto: "pant1",
    desc: "Jogger Verde militar, bolsillos en los muslos",
    src: pant1,
    // precio: getRandomNumber(90,140),
    precio: 93.95,
    categoria: "pantalones"
  },
  {
    id: 6,
    producto: "pant2",
    desc: "Pantalon azul marino extra large",
    src: pant2,
    // precio: getRandomNumber(90,140),
    precio: 82.31,
    categoria: "pantalones"
  },
  {
    id: 7,
    producto: "pant3",
    desc: "Jean clasico azul claro wide legs",
    src: pant3,
    // precio: getRandomNumber(90,140),
    precio: 113.54,
    categoria: "pantalones"
  },
  {
    id: 8,
    producto: "pant4",
    src: pant4,
    desc:"Pantalon de vestir verde militar suelto",
    // precio: getRandomNumber(90,140),
    precio: 97.54,
    categoria: "pantalones"
  },
  {
    id: 9,
    producto: "pant5",
    src: pant5,
    desc:"Pantalon de vestir formal color crema",
    // precio: getRandomNumber(90,140),
    precio: 87.74,
    categoria: "pantalones"
  },
  {
    id: 10,
    producto: "pijama1",
    src: pijama1,
    desc: "Conjunto Pijama con short oscuro",
    // precio: getRandomNumber(70,110),
    precio: 102.21,
    categoria: "pijamas"
  },
  {
    id: 11,
    producto: "pijama2",
    src: pijama2,
    desc:"Conjunto Pijama blanco/celeste",
    // precio: getRandomNumber(70,110),
    precio: 106.31,
    categoria: "pijamas"
  },
  {
    id: 12,
    producto: "pijama3",
    src: pijama3,
    desc:"Conjunto Pijama de verano camisa/short verde/azul",
    // precio: getRandomNumber(70,110),
    precio: 103.51,
    categoria: "pijamas"
  },
  {
    id: 13,
    producto: "polera1",
    desc:"Polera negra, marron interna con capucha y un bolsillo tipo canguro",
    src: polera1,
    // precio: getRandomNumber(70,110),
    precio: 87.43,
    categoria: "poleras"
  },
  {
    id: 14,
    producto: "polera2",
    desc: "Sobrecamisa con botones marrones, interior cobertor blanco con capucha",
    src: polera2,
    // precio: getRandomNumber(70,110),
    precio: 118.45,
    categoria: "poleras"
  },
  {
    id: 15,
    producto: "polera3",
    desc: "Polera Gris, con bordes negros y un bolsillo tipo canguro",
    src: polera3,
    // precio: getRandomNumber(70,110),
    precio: 90.42,
    categoria: "poleras"
  },
  {
    id: 16,
    producto: "polera4",
    desc:"Sobrecamisa gris a rayas marrones con capucha",
    src: polera4,
    // precio: getRandomNumber(70,110),
    precio: 59.89,
    categoria: "poleras"
  },
  {
    id: 17,
    producto: "polo1",
    desc: "Camiseta Deportiva con cuello en V, Chigago verde",
    src: polo1,
    // precio: getRandomNumber(40,60),
    precio: 43.19,
    categoria: "polos"
  },
  {
    id: 18,
    producto: "polo2",
    desc: "Polo rosado cuello redondo, marshmello logo",
    src: polo2,
    // precio: getRandomNumber(40,60),
    precio: 45.17,
    categoria: "polos"
  },
  {
    id: 19,
    producto: "polo3",
    desc: "Polo gris con cuello redondo y estampado de Dj Bl3nd",
    src: polo3,
    // precio: getRandomNumber(40,60),
    precio: 52.07,
    categoria: "polos"
  },
  {
    id: 20,
    producto: "polo4",
    desc:"Camiseta Deportiva con cuello en V, Wondertu azul",
    src: polo4,
    // precio: getRandomNumber(40,60),
    precio: 65.87,
    categoria: "polos"
  },
  {
    id: 21,
    producto: "polo5",
    desc:"Polo negro estampado alien verde",
    src: polo5,
    // precio: getRandomNumber(40,60),
    precio: 65.87,
    categoria: "polos"
  }
]

export default inventario