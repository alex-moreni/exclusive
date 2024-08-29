const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function seedDatabase() {
  try {
    const products = [
      {
        name: "iPhone 15 Pro Max",
        price: 9999,
        description:
          "O mais poderoso iPhone já criado, com câmera profissional e bateria de longa duração.",
        size: ["6.7 polegadas"],
        color: "Prata",
        image: "https://via.placeholder.com/150?text=iPhone+15+Pro+Max",
        category: "celulares",
      },
      {
        name: "Google Pixel 7a",
        price: 4999,
        description:
          "Celular intermediário premium com excelente custo-benefício e câmera de alta qualidade.",
        size: ["6.1 polegadas"],
        color: "Verde Lemongrass",
        image: "https://via.placeholder.com/150?text=Google+Pixel+7a",
        category: "celulares",
      },
      {
        name: "Samsung Galaxy A54",
        price: 3999,
        description:
          "Celular intermediário com design elegante, tela Super AMOLED e bateria de longa duração.",
        size: ["6.4 polegadas"],
        color: "Violeta",
        image: "https://via.placeholder.com/150?text=Samsung+Galaxy+A54",
        category: "celulares",
      },
      {
        name: "Motorola Moto G73",
        price: 2999,
        description:
          "Celular com ótimo custo-benefício, tela AMOLED e câmera de 50MP.",
        size: ["6.5 polegadas"],
        color: "Azul Celeste",
        image: "https://via.placeholder.com/150?text=Motorola+Moto+G73",
        category: "celulares",
      },
      {
        name: "Xiaomi Redmi Note 12 Pro+",
        price: 3499,
        description:
          "Celular com carregamento rápido de 120W e câmera profissional.",
        size: ["6.67 polegadas"],
        color: "Preto Carbono",
        image: "https://via.placeholder.com/150?text=Xiaomi+Redmi+Note+12+Pro+",
        category: "celulares",
      },
      {
        name: "OPPO Reno8 T",
        price: 3299,
        description:
          "Celular com design elegante, câmera frontal de 32MP e tela AMOLED.",
        size: ["6.43 polegadas"],
        color: "Dourado",
        image: "https://via.placeholder.com/150?text=OPPO+Reno8+T",
        category: "celulares",
      },
      {
        name: "Vivo V27",
        price: 3999,
        description: "Celular com câmera frontal de 50MP e design fino e leve.",
        size: ["6.78 polegadas"],
        color: "Azul Celestial",
        image: "https://via.placeholder.com/150?text=Vivo+V27",
        category: "celulares",
      },
      {
        name: "Realme 11 Pro",
        price: 3699,
        description:
          "Celular com tela AMOLED de 120Hz e carregamento rápido de 100W.",
        size: ["6.7 polegadas"],
        color: "Vermelho Solar",
        image: "https://via.placeholder.com/150?text=Realme+11+Pro",
        category: "celulares",
      },
      {
        name: "Dell XPS 13",
        price: 7499,
        description:
          "Laptop ultrafino com tela InfinityEdge e desempenho potente para trabalho e entretenimento.",
        size: ["13.4 polegadas"],
        color: "Prata",
        image: "https://via.placeholder.com/150?text=Dell+XPS+13",
        category: "computadores",
      },
      {
        name: "Apple MacBook Pro 16",
        price: 14999,
        description:
          "Laptop profissional com tela Retina de 16 polegadas e processador M1 Pro para desempenho máximo.",
        size: ["16 polegadas"],
        color: "Espaço Cinza",
        image: "https://via.placeholder.com/150?text=Apple+MacBook+Pro+16",
        category: "computadores",
      },
      {
        name: "HP Pavilion Gaming Desktop",
        price: 4999,
        description:
          "Desktop de gaming com processador Intel Core i7 e placa de vídeo NVIDIA GeForce GTX 1660 Ti.",
        size: ["Torre"],
        color: "Preto com LED verde",
        image:
          "https://via.placeholder.com/150?text=HP+Pavilion+Gaming+Desktop",
        category: "computadores",
      },
      {
        name: "ASUS ROG Strix GTX 3080",
        price: 3499,
        description:
          "Placa de vídeo de alto desempenho com 10 GB de memória GDDR6X para jogos e aplicações profissionais.",
        size: ["Padrão PCIe"],
        color: "Preto com iluminação RGB",
        image: "https://via.placeholder.com/150?text=ASUS+ROG+Strix+GTX+3080",
        category: "computadores",
      },
      {
        name: "Samsung Odyssey G7",
        price: 2999,
        description:
          "Monitor curvo de 27 polegadas com taxa de atualização de 240Hz e resolução QHD para uma experiência imersiva.",
        size: ["27 polegadas"],
        color: "Preto",
        image: "https://via.placeholder.com/150?text=Samsung+Odyssey+G7",
        category: "computadores",
      },
      {
        name: "Logitech MX Master 3",
        price: 599,
        description:
          "Mouse ergonômico com rolagem precisa e botões personalizáveis para produtividade e conforto.",
        size: ["Tamanho padrão"],
        color: "Cinza escuro",
        image: "https://via.placeholder.com/150?text=Logitech+MX+Master+3",
        category: "computadores",
      },
      {
        name: "Corsair Vengeance LPX 16GB",
        price: 399,
        description:
          "Memória RAM DDR4 de 16 GB com alta velocidade e baixa latência para desempenho aprimorado.",
        size: ["16 GB"],
        color: "Preto",
        image:
          "https://via.placeholder.com/150?text=Corsair+Vengeance+LPX+16GB",
        category: "computadores",
      },
      {
        name: "Western Digital WD Blue 1TB",
        price: 349,
        description:
          "Disco rígido de 1 TB com alta confiabilidade e desempenho para armazenamento adicional.",
        size: ["3.5 polegadas"],
        color: "Azul",
        image:
          "https://via.placeholder.com/150?text=Western+Digital+WD+Blue+1TB",
        category: "computadores",
      },
      {
        name: "Razer BlackWidow V3",
        price: 699,
        description:
          "Teclado mecânico com switches Green para uma resposta tátil e retroiluminação RGB personalizável.",
        size: ["Tamanho completo"],
        color: "Preto com iluminação RGB",
        image: "https://via.placeholder.com/150?text=Razer+BlackWidow+V3",
        category: "computadores",
      },
      {
        name: "Bose Companion 2 Series III",
        price: 1299,
        description:
          "Sistema de alto-falantes de desktop com som estéreo de alta qualidade e controle de volume fácil de usar.",
        size: ["Compacto"],
        color: "Preto",
        image:
          "https://via.placeholder.com/150?text=Bose+Companion+2+Series+III",
        category: "computadores",
      },
      {
        name: "Apple Watch Series 9",
        price: 3999,
        description:
          "Smartwatch avançado com display Always-On Retina, rastreamento de saúde e desempenho poderoso.",
        size: ["41 mm"],
        color: "Prata",
        image: "https://via.placeholder.com/150?text=Apple+Watch+Series+9",
        category: "smartwatch",
      },
      {
        name: "Samsung Galaxy Watch 6",
        price: 3499,
        description:
          "Smartwatch com tela Super AMOLED, monitoramento de saúde e integração com dispositivos Galaxy.",
        size: ["44 mm"],
        color: "Preto",
        image: "https://via.placeholder.com/150?text=Samsung+Galaxy+Watch+6",
        category: "smartwatch",
      },
      {
        name: "Garmin Forerunner 965",
        price: 4999,
        description:
          "Smartwatch focado em performance esportiva com GPS avançado e monitoramento de métricas de treino.",
        size: ["47 mm"],
        color: "Azul",
        image: "https://via.placeholder.com/150?text=Garmin+Forerunner+965",
        category: "smartwatch",
      },
      {
        name: "Fitbit Versa 4",
        price: 2299,
        description:
          "Smartwatch com recursos de rastreamento de fitness, monitoramento de sono e notificações inteligentes.",
        size: ["40 mm"],
        color: "Rosa",
        image: "https://via.placeholder.com/150?text=Fitbit+Versa+4",
        category: "smartwatch",
      },
      {
        name: "Huawei Watch GT 3",
        price: 2799,
        description:
          "Smartwatch com display AMOLED, longa duração de bateria e recursos avançados de monitoramento de saúde.",
        size: ["46 mm"],
        color: "Preto",
        image: "https://via.placeholder.com/150?text=Huawei+Watch+GT+3",
        category: "smartwatch",
      },
      {
        name: "Amazfit GTR 4",
        price: 1799,
        description:
          "Smartwatch com tela AMOLED, monitoramento de saúde e atividades esportivas e design elegante.",
        size: ["43 mm"],
        color: "Cinzento",
        image: "https://via.placeholder.com/150?text=Amazfit+GTR+4",
        category: "smartwatch",
      },
      {
        name: "Withings ScanWatch",
        price: 3499,
        description:
          "Smartwatch híbrido com monitoramento de ECG, SpO2 e rastreamento de atividade física em um design clássico.",
        size: ["42 mm"],
        color: "Dourado",
        image: "https://via.placeholder.com/150?text=Withings+ScanWatch",
        category: "smartwatch",
      },
      {
        name: "TicWatch Pro 5",
        price: 2999,
        description:
          "Smartwatch com tela AMOLED e LCD dual, bateria de longa duração e recursos de saúde e fitness.",
        size: ["48 mm"],
        color: "Preto",
        image: "https://via.placeholder.com/150?text=TicWatch+Pro+5",
        category: "smartwatch",
      },
      {
        name: "Suunto 9 Peak",
        price: 3799,
        description:
          "Smartwatch robusto com GPS preciso, monitoramento de atividades e durabilidade em condições extremas.",
        size: ["43 mm"],
        color: "Prata",
        image: "https://via.placeholder.com/150?text=Suunto+9+Peak",
        category: "smartwatch",
      },
      {
        name: "Mobvoi TicWatch E4",
        price: 1499,
        description:
          "Smartwatch acessível com tela AMOLED, monitoramento de saúde e funcionalidades básicas para o dia a dia.",
        size: ["44 mm"],
        color: "Preto",
        image: "https://via.placeholder.com/150?text=Mobvoi+TicWatch+E4",
        category: "smartwatch",
      },
      {
        name: "Canon EOS R5",
        price: 13999,
        description:
          "Câmera mirrorless full-frame com 45 MP, gravação 8K e sistema de foco automático avançado.",
        size: ["152 x 114 x 71 mm"],
        color: "Preto",
        image: "https://via.placeholder.com/150?text=Canon+EOS+R5",
        category: "cameras",
      },
      {
        name: "Nikon Z7 II",
        price: 11999,
        description:
          "Câmera mirrorless full-frame com 45.7 MP, duplo processador e estabilização de imagem.",
        size: ["134 x 101 x 70 mm"],
        color: "Preto",
        image: "https://via.placeholder.com/150?text=Nikon+Z7+II",
        category: "cameras",
      },
      {
        name: "Sony A7 IV",
        price: 12999,
        description:
          "Câmera mirrorless full-frame com 33 MP, 4K 60p e sistema de foco automático híbrido.",
        size: ["131 x 97 x 80 mm"],
        color: "Preto",
        image: "https://via.placeholder.com/150?text=Sony+A7+IV",
        category: "cameras",
      },
      {
        name: "Fujifilm X-T5",
        price: 9999,
        description:
          "Câmera mirrorless APS-C com 40 MP, estabilização de imagem e simulação de filme exclusiva da Fujifilm.",
        size: ["130 x 91 x 63 mm"],
        color: "Prata",
        image: "https://via.placeholder.com/150?text=Fujifilm+X-T5",
        category: "cameras",
      },
      {
        name: "Olympus OM-D E-M1 Mark III",
        price: 7999,
        description:
          "Câmera mirrorless Micro Four Thirds com 20 MP, estabilização de imagem de 5 eixos e vídeo 4K.",
        size: ["134 x 90 x 70 mm"],
        color: "Preto",
        image:
          "https://via.placeholder.com/150?text=Olympus+OM-D+E-M1+Mark+III",
        category: "cameras",
      },
      {
        name: "Panasonic Lumix GH6",
        price: 10999,
        description:
          "Câmera mirrorless Micro Four Thirds com 25 MP, vídeo 4K 60p e excelente desempenho em vídeo.",
        size: ["138 x 102 x 91 mm"],
        color: "Preto",
        image: "https://via.placeholder.com/150?text=Panasonic+Lumix+GH6",
        category: "cameras",
      },
      {
        name: "Leica Q2",
        price: 18999,
        description:
          "Câmera compacta full-frame com 47 MP, lente fixa de 28 mm f/1.7 e design premium.",
        size: ["130 x 80 x 91 mm"],
        color: "Preto",
        image: "https://via.placeholder.com/150?text=Leica+Q2",
        category: "cameras",
      },
      {
        name: "Ricoh GR III",
        price: 4999,
        description:
          "Câmera compacta com sensor APS-C de 24 MP e lente fixa de 28 mm f/2.8, ideal para fotografia de rua.",
        size: ["117 x 61 x 35 mm"],
        color: "Preto",
        image: "https://via.placeholder.com/150?text=Ricoh+GR+III",
        category: "cameras",
      },
      {
        name: "GoPro HERO11 Black",
        price: 3499,
        description:
          "Câmera de ação com 27 MP, gravação 5.3K e estabilização de imagem HyperSmooth para vídeos em movimento.",
        size: ["71 x 55 x 33 mm"],
        color: "Preto",
        image: "https://via.placeholder.com/150?text=GoPro+HERO11+Black",
        category: "cameras",
      },
      {
        name: "Sony ZV-E10",
        price: 7499,
        description:
          "Câmera mirrorless APS-C projetada para vlogging com 24 MP, tela flip e microfone direcional.",
        size: ["115 x 64 x 45 mm"],
        color: "Preto",
        image: "https://via.placeholder.com/150?text=Sony+ZV-E10",
        category: "cameras",
      },
      {
        name: "Sony WH-1000XM5",
        price: 2299,
        description:
          "Fones de ouvido over-ear com cancelamento de ruído ativo, som de alta resolução e conforto superior.",
        size: ["Padrão"],
        color: "Preto",
        image: "https://via.placeholder.com/150?text=Sony+WH-1000XM5",
        category: "fones",
      },
      {
        name: "Bose QuietComfort 45",
        price: 1999,
        description:
          "Fones de ouvido over-ear com cancelamento de ruído líder na categoria e áudio claro e balanceado.",
        size: ["Padrão"],
        color: "Cinza",
        image: "https://via.placeholder.com/150?text=Bose+QuietComfort+45",
        category: "fones",
      },
      {
        name: "Apple AirPods Max",
        price: 3299,
        description:
          "Fones de ouvido over-ear com cancelamento de ruído ativo, áudio espacial e integração perfeita com dispositivos Apple.",
        size: ["Padrão"],
        color: "Prata",
        image: "https://via.placeholder.com/150?text=Apple+AirPods+Max",
        category: "fones",
      },
      {
        name: "Sennheiser Momentum 4",
        price: 2199,
        description:
          "Fones de ouvido over-ear com excelente qualidade de som, cancelamento de ruído ativo e design ergonômico.",
        size: ["Padrão"],
        color: "Preto",
        image: "https://via.placeholder.com/150?text=Sennheiser+Momentum+4",
        category: "fones",
      },
      {
        name: "Jabra Elite 85h",
        price: 1599,
        description:
          "Fones de ouvido over-ear com cancelamento de ruído inteligente, duração de bateria de 36 horas e qualidade de som premium.",
        size: ["Padrão"],
        color: "Preto",
        image: "https://via.placeholder.com/150?text=Jabra+Elite+85h",
        category: "fones",
      },
      {
        name: "Bose SoundLink Flex",
        price: 899,
        description:
          "Fone de ouvido Bluetooth compacto com som de alta qualidade, resistência à água e design portátil.",
        size: ["Compacto"],
        color: "Azul",
        image: "https://via.placeholder.com/150?text=Bose+SoundLink+Flex",
        category: "fones",
      },
      {
        name: "Anker Soundcore Liberty 4",
        price: 699,
        description:
          "Fones de ouvido in-ear com som Hi-Res, cancelamento de ruído ativo e encaixe confortável.",
        size: ["Compacto"],
        color: "Preto",
        image: "https://via.placeholder.com/150?text=Anker+Soundcore+Liberty+4",
        category: "fones",
      },
      {
        name: "Samsung Galaxy Buds 2 Pro",
        price: 1299,
        description:
          "Fones de ouvido in-ear com cancelamento de ruído ativo, som de alta qualidade e ajuste ergonômico.",
        size: ["Compacto"],
        color: "Branco",
        image: "https://via.placeholder.com/150?text=Samsung+Galaxy+Buds+2+Pro",
        category: "fones",
      },
      {
        name: "Beats Fit Pro",
        price: 1399,
        description:
          "Fones de ouvido in-ear com ajuste seguro, cancelamento de ruído ativo e integração com o ecossistema Apple.",
        size: ["Compacto"],
        color: "Preto",
        image: "https://via.placeholder.com/150?text=Beats+Fit+Pro",
        category: "fones",
      },
      {
        name: "JBL Tune 125TWS",
        price: 499,
        description:
          "Fones de ouvido true wireless com som potente, bateria de longa duração e ajuste confortável.",
        size: ["Compacto"],
        color: "Azul",
        image: "https://via.placeholder.com/150?text=JBL+Tune+125TWS",
        category: "fones",
      },
    ]

    products.map(async (product) => {
      await prisma.product.create({ data: product })
    })

    // Fechar a conexão com o banco de dados
    await prisma.$disconnect()
  } catch (error) {
    console.error("Erro ao criar os produtos:", error)
  }
}

seedDatabase()
