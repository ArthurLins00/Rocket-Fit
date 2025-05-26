import type { Product } from "../types";
import camisaPreta from '../assets/camisa_preta.png';
import shortsFeminino from '../assets/shorts_feminino.png';
import kitMeias from '../assets/kit_meias.jpg';
import tenisBranco from '../assets/tenis_branco.jpg';
import wheyProtein from '../assets/whey_protein.jpg'
import garrafaTermica from '../assets/garrafa_termica.jpg'
import straps from '../assets/straps.jpg'
import creatina from '../assets/creatina.jpg'

export const products: Product[] = [
  {
    id: 1,
    category: "Vestuário",
    name: "Camisa Preta Masculina",
    image: camisaPreta,
    price: 79.90,
    description: "Camisa preta masculina esportiva 100% algodão e com poliamida.",
    comments: [
      { id: 1, user: "João", comment: "Linda camisa, muito confortável.", rating: 5 },
      { id: 2, user: "Carlos", comment: "Tecido bom, tamanho serviu bem.", rating: 5 },
      { id: 3, user: "Rafael", comment: "Muito boa, não esquenta.", rating: 5},
    ]
  },
  {
    id: 2,
    category: "Calçados",
    name: "Tênis Branco",
    image: tenisBranco,
    price: 199.90,
    description: "Tênis esportivo branco com molas. Excelentes para caminhadas.",
    comments: [
      { id: 1, user: "Pedro", comment: "Muito leve, ótimo para correr.", rating: 5 },
      { id: 2, user: "Saulo", comment: "Confortável, mas suja fácil.", rating: 4 },
    ]
  },
  {
    id: 3,
    category: "Calçados",
    name: "Kit 3 Pares de Meias",
    image: kitMeias,
    price: 49.90,
    description: "Kit de meias cano alto esportivas. Contém 3 pares, 100% algodão. Cores: Branco, cinza e preto.",
    comments: [
      { id: 1, user: "Matheus", comment: "Muito confortáveis.", rating: 5 },
      { id: 2, user: "Souza", comment: "Excelente, não deixa chulé.", rating: 5 },
      { id: 3, user: "Marcelo", comment: "O meu par branco veio manchado.", rating: 3 },
    ]
  },
  {
    id: 4,
    category: "Vestuário",
    name: "Shorts Feminino",
    image: shortsFeminino,
    price: 69.90,
    description: "Shorts feminino preto com short interno azul. Super confortável, 100% algodão e com poliamida.",
    comments: [
      { id: 1, user: "Sandra", comment: "Conforto e estilo na academia!", rating: 5 },
      { id: 2, user: "Ana", comment: "Poderia ter bolsos...", rating: 4 },
      { id: 3, user: "Vânia", comment: "O suor vai embora fácil fácil.", rating: 5 },
    ]
  },
  {
    id: 5,
    category: "Suplementos",
    name: "Whey Protein 1kg",
    image: wheyProtein,
    price: 109.90,
    description: "Whey Protein concentrado 1kg. Sabores: Natural, chocolate, morango, baunilha, banana.",
    comments: [
      { id: 1, user: "Sabrina", comment: "Veio certinho, agora começo meu projeto verão!", rating: 5 },
      { id: 2, user: "Fábio", comment: "Poderia ter mais sabores.", rating: 4 },
    ]
  },
  {
    id: 6,
    category: "Acessórios",
    name: "Garrafa Térmica 1,5L",
    image: garrafaTermica,
    price: 59.90,
    description: "Garrafa térmica que suporta até 1,5 litros. Disponível nas cores: Branco e preto.",
    comments: [
      { id: 1, user: "Bruno", comment: "Agora eu consigo bater minha meta de água!", rating: 5 },
      { id: 2, user: "Beatriz", comment: "Queria uma na cor rosa...", rating: 4 },
    ]
  },
  {
    id: 7,
    category: "Acessórios",
    name: "Straps",
    image: straps,
    price: 29.90,
    description: "Straps super resistentes para auxílio no levantamento de peso.",
    comments: [
      { id: 1, user: "Jorge", comment: "Ajuda muito no treino de costas, principalmente nas puxadas!", rating: 5 },
      { id: 2, user: "Carla", comment: "Meu companheiro no stiff e levantamento terra!", rating: 5 },
    ]
  },
  {
    id: 8,
    category: "Suplementos",
    name: "Creatina Monohidrata 250g",
    image: creatina,
    price: 89.90,
    description: "Creatina Monohidrata 250g",
    comments: [
      { id: 1, user: "Sabrina", comment: "Junto com o whey, ninguém me para, produto ótimo!", rating: 5 },
      { id: 2, user: "André", comment: "Produto muito bom, mas veio sem o medidor...", rating: 4 },
    ]
  },
];