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
        image:
          "https://cdn.awsli.com.br/2500x2500/2510/2510599/produto/232975500/iphone-15-pro-max-1tb-titanio-azul-a71cadfb-ooec06hgd8.png",
        category: "smartphones",
      },
      {
        name: "Google Pixel 7a",
        price: 4999,
        description:
          "Celular intermediário premium com excelente custo-benefício e câmera de alta qualidade.",
        size: ["6.1 polegadas"],
        color: "Verde Lemongrass",
        image:
          "https://www.att.com/scmsassets/global/devices/phones/google/google-pixel-7a/carousel/charcoal/charcoal-1.png",
        category: "smartphones",
      },
      {
        name: "Samsung Galaxy A54",
        price: 3999,
        description:
          "Celular intermediário com design elegante, tela Super AMOLED e bateria de longa duração.",
        size: ["6.4 polegadas"],
        color: "Violeta",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvus6bv0zTdMTDYRiBWF600q3kQ97w0ILYkQ&s",
        category: "smartphones",
      },
      {
        name: "Motorola Moto G73",
        price: 2999,
        description:
          "Celular com ótimo custo-benefício, tela AMOLED e câmera de 50MP.",
        size: ["6.5 polegadas"],
        color: "Azul Celeste",
        image:
          "https://images.tcdn.com.br/img/img_prod/458206/celular_motorola_moto_g73_5g_128gb_8gb_ram_camera_50mp_selfie_16mp_e_tela_6_5_polegadas_azul_23675_1_aac3b17450ed19ead964834e56fe39cc.png",
        category: "smartphones",
      },
      {
        name: "Xiaomi Redmi Note 12 Pro+",
        price: 3499,
        description:
          "Celular com carregamento rápido de 120W e câmera profissional.",
        size: ["6.67 polegadas"],
        color: "Preto Carbono",
        image:
          "https://t.ctcdn.com.br/Ek4-3feVpxf-aYT9eGsM7lWyN6g=/fit-in/600x600/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i644475.png",
        category: "smartphones",
      },
      {
        name: "OPPO Reno8 T",
        price: 3299,
        description:
          "Celular com design elegante, câmera frontal de 32MP e tela AMOLED.",
        size: ["6.43 polegadas"],
        color: "Dourado",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvDxRxGGLpnzFmnZhR9GhD23bEUZuLLwco3Q&s",
        category: "smartphones",
      },
      {
        name: "Vivo V27",
        price: 3999,
        description: "Celular com câmera frontal de 50MP e design fino e leve.",
        size: ["6.78 polegadas"],
        color: "Azul Celestial",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo2u1kGb3VYk_ADJd-md6UJELZ3ASO-nL_jg&s",
        category: "smartphones",
      },
      {
        name: "Realme 11 Pro",
        price: 3699,
        description:
          "Celular com tela AMOLED de 120Hz e carregamento rápido de 100W.",
        size: ["6.7 polegadas"],
        color: "Vermelho Solar",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbokkoT2960dyXEY_Aih_QnLACBeInT5sJA&s",
        category: "smartphones",
      },
      {
        name: "Dell XPS 13",
        price: 7499,
        description:
          "Laptop ultrafino com tela InfinityEdge e desempenho potente para trabalho e entretenimento.",
        size: ["13.4 polegadas"],
        color: "Prata",
        image:
          "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/13-9340/media-gallery/silver/touch/notebook-xps-13-9340-t-sl-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=679&qlt=100,1&resMode=sharp2&size=679,402&chrss=full",
        category: "computers",
      },
      {
        name: "Apple MacBook Pro 16",
        price: 14999,
        description:
          "Laptop profissional com tela Retina de 16 polegadas e processador M1 Pro para desempenho máximo.",
        size: ["16 polegadas"],
        color: "Espaço Cinza",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeSNnBAx75VNsBGWoUR3DbMipePeTdlcb9JA&s",
        category: "computers",
      },
      {
        name: "HP Pavilion Gaming Desktop",
        price: 4999,
        description:
          "Desktop de gaming com processador Intel Core i7 e placa de vídeo NVIDIA GeForce GTX 1660 Ti.",
        size: ["Torre"],
        color: "Preto com LED verde",
        image:
          "https://agtplaza.com/cdn/shop/products/HP-Pavilion-Gaming-Desktop-TG01-PC-1-1_2381eba5-6f75-4b26-98ba-9ab2f473fe9c.webp?v=1706956689",
        category: "computers",
      },
      {
        name: "ASUS ROG Strix GTX 3080",
        price: 3499,
        description:
          "Placa de vídeo de alto desempenho com 10 GB de memória GDDR6X para jogos e aplicações profissionais.",
        size: ["Padrão PCIe"],
        color: "Preto com iluminação RGB",
        image: "https://img.terabyteshop.com.br/archive/1955854346/22.png",
        category: "computers",
      },
      {
        name: "Samsung Odyssey G7",
        price: 2999,
        description:
          "Monitor curvo de 27 polegadas com taxa de atualização de 240Hz e resolução QHD para uma experiência imersiva.",
        size: ["27 polegadas"],
        color: "Preto",
        image:
          "https://images.samsung.com/is/image/samsung/p6pim/pt/ls28bg700epxen/gallery/pt-odyssey-g7-g70b-442764-ls28bg700epxen-536465778?$650_519_PNG$",
        category: "computers",
      },
      {
        name: "Logitech MX Master 3",
        price: 599,
        description:
          "Mouse ergonômico com rolagem precisa e botões personalizáveis para produtividade e conforto.",
        size: ["Tamanho padrão"],
        color: "Cinza escuro",
        image:
          "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-mouse-top-view-graphite.png?v=1",
        category: "computers",
      },
      {
        name: "Corsair Vengeance LPX 16GB",
        price: 399,
        description:
          "Memória RAM DDR4 de 16 GB com alta velocidade e baixa latência para desempenho aprimorado.",
        size: ["16 GB"],
        color: "Preto",
        image:
          "https://img.terabyteshop.com.br/archive/780260673/12422-memoria-corsair-lpx-16gb-CMK16GX4M2D3600C18-02.png",
        category: "computers",
      },
      {
        name: "Western Digital WD Blue 1TB",
        price: 349,
        description:
          "Disco rígido de 1 TB com alta confiabilidade e desempenho para armazenamento adicional.",
        size: ["3.5 polegadas"],
        color: "Azul",
        image:
          "https://www.atacadogames.com/imagem/hd/hd-western-digital-wd-blue-1tb-3-5-sata-3-7200prm-wd10ezex/2/123354.jpg?pfdrid_c=true",
        category: "computers",
      },
      {
        name: "Razer BlackWidow V3",
        price: 699,
        description:
          "Teclado mecânico com switches Green para uma resposta tátil e retroiluminação RGB personalizável.",
        size: ["Tamanho completo"],
        color: "Preto com iluminação RGB",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1i23AU7Mj76B3ZEL-6HQDWBgnivpnhP7hPw&s",
        category: "computers",
      },
      {
        name: "Bose Companion 2 Series III",
        price: 1299,
        description:
          "Sistema de alto-falantes de desktop com som estéreo de alta qualidade e controle de volume fácil de usar.",
        size: ["Compacto"],
        color: "Preto",
        image:
          "https://assets.bosecreative.com/transform/03e01bf9-11d0-4f6d-a5fd-a7e2d528ddb1/companion_2_series_iii_multimedia_speaker_system_silo_5_1000_1000",
        category: "computers",
      },
      {
        name: "Apple Watch Series 9",
        price: 3999,
        description:
          "Smartwatch avançado com display Always-On Retina, rastreamento de saúde e desempenho poderoso.",
        size: ["41 mm"],
        color: "Prata",
        image:
          "https://cdn.awsli.com.br/2500x2500/2510/2510599/produto/232975504/apple-watch-series-9-45mm-gps-case-aluminio-midnight-pulseira-midnight-sport-ban-y2ab39noj6.png",
        category: "watches",
      },
      {
        name: "Samsung Galaxy Watch 6",
        price: 3499,
        description:
          "Smartwatch com tela Super AMOLED, monitoramento de saúde e integração com dispositivos Galaxy.",
        size: ["44 mm"],
        color: "Preto",
        image:
          "https://images.samsung.com/is/image/samsung/p6pim/br/2307/gallery/br-galaxy-watch6-r945-sm-r940nzkpzto-537403101?$650_519_PNG$",
        category: "watches",
      },
      {
        name: "Garmin Forerunner 965",
        price: 4999,
        description:
          "Smartwatch focado em performance esportiva com GPS avançado e monitoramento de métricas de treino.",
        size: ["47 mm"],
        color: "Azul",
        image:
          "https://i0.wp.com/helmersports.com.br/wp-content/uploads/2023/07/1-FR965.png?fit=800%2C800&ssl=1",
        category: "watches",
      },
      {
        name: "Fitbit Versa 4",
        price: 2299,
        description:
          "Smartwatch com recursos de rastreamento de fitness, monitoramento de sono e notificações inteligentes.",
        size: ["40 mm"],
        color: "Rosa",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBtXCrJ8LGuOWvGm8nQv2AethuTo8Xa6xNig&s",
        category: "watches",
      },
      {
        name: "Huawei Watch GT 3",
        price: 2799,
        description:
          "Smartwatch com display AMOLED, longa duração de bateria e recursos avançados de monitoramento de saúde.",
        size: ["46 mm"],
        color: "Preto",
        image:
          "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/wearables/watch-gt3/specs/watch-gt3-46-active-edition.png",
        category: "watches",
      },
      {
        name: "Amazfit GTR 4",
        price: 1799,
        description:
          "Smartwatch com tela AMOLED, monitoramento de saúde e atividades esportivas e design elegante.",
        size: ["43 mm"],
        color: "Cinzento",
        image:
          "https://www.atacadogames.com/imagem/smartwatch/smartwatch-xiaomi-smartwatch-amazfit-gtr-4-a2166-preto/2/148767.jpg?pfdrid_c=true",
        category: "watches",
      },
      {
        name: "Withings ScanWatch",
        price: 3499,
        description:
          "Smartwatch híbrido com monitoramento de ECG, SpO2 e rastreamento de atividade física em um design clássico.",
        size: ["42 mm"],
        color: "Dourado",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNDuEbBPAbnyqoyAFW7zaIzF_9FmLtNbLHuA&s",
        category: "watches",
      },
      {
        name: "TicWatch Pro 5",
        price: 2999,
        description:
          "Smartwatch com tela AMOLED e LCD dual, bateria de longa duração e recursos de saúde e fitness.",
        size: ["48 mm"],
        color: "Preto",
        image:
          "https://t.ctcdn.com.br/laNuySPwCCC6OFE7tCqQjt-R05k=/fit-in/400x400/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i839957.png",
        category: "watches",
      },
      {
        name: "Suunto 9 Peak",
        price: 3799,
        description:
          "Smartwatch robusto com GPS preciso, monitoramento de atividades e durabilidade em condições extremas.",
        size: ["43 mm"],
        color: "Prata",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Lh5yYQYhY_3Vy_6AI9HC6p2YV7GzSZEGZA&s",
        category: "watches",
      },
      {
        name: "Mobvoi TicWatch E4",
        price: 1499,
        description:
          "Smartwatch acessível com tela AMOLED, monitoramento de saúde e funcionalidades básicas para o dia a dia.",
        size: ["44 mm"],
        color: "Preto",
        image:
          "https://www.ticwatch.com.br/wp-content/uploads/2019/12/menu-ticwatch-e2.png",
        category: "watches",
      },
      {
        name: "Canon EOS R5",
        price: 13999,
        description:
          "Câmera mirrorless full-frame com 45 MP, gravação 8K e sistema de foco automático avançado.",
        size: ["152 x 114 x 71 mm"],
        color: "Preto",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgKyxsL0JQVullbqYz2AOu7pTvhyroF1uq-w&s",
        category: "cameras",
      },
      {
        name: "Nikon Z7 II",
        price: 11999,
        description:
          "Câmera mirrorless full-frame com 45.7 MP, duplo processador e estabilização de imagem.",
        size: ["134 x 101 x 70 mm"],
        color: "Preto",
        image:
          "https://crdms.images.consumerreports.org/f_auto,w_300/prod/products/cr/models/403288-mirrorless-cameras-nikon-z7-ii-w-24-70mm-s-10018810.png",
        category: "cameras",
      },
      {
        name: "Sony A7 IV",
        price: 12999,
        description:
          "Câmera mirrorless full-frame com 33 MP, 4K 60p e sistema de foco automático híbrido.",
        size: ["131 x 97 x 80 mm"],
        color: "Preto",
        image:
          "https://sony.scene7.com/is/image/sonyglobalsolutions/og?$categorypdpnav$&fmt=png-alpha",
        category: "cameras",
      },
      {
        name: "Fujifilm X-T5",
        price: 9999,
        description:
          "Câmera mirrorless APS-C com 40 MP, estabilização de imagem e simulação de filme exclusiva da Fujifilm.",
        size: ["130 x 91 x 63 mm"],
        color: "Prata",
        image:
          "https://www.dpreview.com/files/p/E~products/fujifilm_xt10/shots/744cf2b0e6e54e038ff51ab77c52ce8fpng",
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
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHkYgYPTxmEKGKfswRdNq-RABYIDb6bWQGQ&s",
        category: "cameras",
      },
      {
        name: "Panasonic Lumix GH6",
        price: 10999,
        description:
          "Câmera mirrorless Micro Four Thirds com 25 MP, vídeo 4K 60p e excelente desempenho em vídeo.",
        size: ["138 x 102 x 91 mm"],
        color: "Preto",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUCy0FL862qCT_IiwkJDYV97dT-5FVW475Ug&s",
        category: "cameras",
      },
      {
        name: "Leica Q2",
        price: 18999,
        description:
          "Câmera compacta full-frame com 47 MP, lente fixa de 28 mm f/1.7 e design premium.",
        size: ["130 x 80 x 91 mm"],
        color: "Preto",
        image:
          "https://br.octoshop.com/media/amasty/amoptmobile/catalog/product/cache/9b65684147d6c4cb86032021df1ef00e/5/2/5202-1_jpg.webp",
        category: "cameras",
      },
      {
        name: "Ricoh GR III",
        price: 4999,
        description:
          "Câmera compacta com sensor APS-C de 24 MP e lente fixa de 28 mm f/2.8, ideal para fotografia de rua.",
        size: ["117 x 61 x 35 mm"],
        color: "Preto",
        image:
          "https://us.ricoh-imaging.com/wp-content/uploads/2019/03/main_img_01.png",
        category: "cameras",
      },
      {
        name: "GoPro HERO11 Black",
        price: 3499,
        description:
          "Câmera de ação com 27 MP, gravação 5.3K e estabilização de imagem HyperSmooth para vídeos em movimento.",
        size: ["71 x 55 x 33 mm"],
        color: "Preto",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRewr2HXlc2rthmIluwbEOGso_XReXDl0GP2A&s",
        category: "cameras",
      },
      {
        name: "Sony ZV-E10",
        price: 7499,
        description:
          "Câmera mirrorless APS-C projetada para vlogging com 24 MP, tela flip e microfone direcional.",
        size: ["115 x 64 x 45 mm"],
        color: "Preto",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjsB8rEQRbouGKB9JTJX_7gk8drgeN32ecCQ&s",
        category: "cameras",
      },
      {
        name: "Sony WH-1000XM5",
        price: 2299,
        description:
          "Fones de ouvido over-ear com cancelamento de ruído ativo, som de alta resolução e conforto superior.",
        size: ["Padrão"],
        color: "Preto",
        image:
          "https://www.sony.com/image/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
        category: "headphones",
      },
      {
        name: "Bose QuietComfort 45",
        price: 1999,
        description:
          "Fones de ouvido over-ear com cancelamento de ruído líder na categoria e áudio claro e balanceado.",
        size: ["Padrão"],
        color: "Cinza",
        image:
          "https://t.ctcdn.com.br/MVAmzLzju7a-iU5xwPo6kPRWavM=/fit-in/400x400/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i570195.png",
        category: "headphones",
      },
      {
        name: "Apple AirPods Max",
        price: 3299,
        description:
          "Fones de ouvido over-ear com cancelamento de ruído ativo, áudio espacial e integração perfeita com dispositivos Apple.",
        size: ["Padrão"],
        color: "Prata",
        image:
          "https://help.apple.com/assets/6565035900841B483A0C22C5/6565035C04D345E0F000EF51/pt_BR/be407fad48c9ccafcd87007eb6645d61.png",
        category: "headphones",
      },
      {
        name: "Sennheiser Momentum 4",
        price: 2199,
        description:
          "Fones de ouvido over-ear com excelente qualidade de som, cancelamento de ruído ativo e design ergonômico.",
        size: ["Padrão"],
        color: "Preto",
        image:
          "https://t.ctcdn.com.br/C3vOhePJGF22dHS3uXppQGVV0Sw=/fit-in/600x600/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i621943.png",
        category: "headphones",
      },
      {
        name: "Jabra Elite 85h",
        price: 1599,
        description:
          "Fones de ouvido over-ear com cancelamento de ruído inteligente, duração de bateria de 36 horas e qualidade de som premium.",
        size: ["Padrão"],
        color: "Preto",
        image:
          "https://assets2.jabra.com/5/3/b/0/53b09d361ef55f94fc189f36323fc3632fa7137e_jabra_elite_85h_black_01.png?w=400&h=400&auto=format",
        category: "headphones",
      },
      {
        name: "Bose SoundLink Flex",
        price: 899,
        description:
          "Fone de ouvido Bluetooth compacto com som de alta qualidade, resistência à água e design portátil.",
        size: ["Compacto"],
        color: "Azul",
        image:
          "https://images.tcdn.com.br/img/img_prod/609634/caixa_de_som_bose_soundlink_flex_bluetooth_speaker_black_ww_fr_865983_01r_9181_1_00b015004a439422322c39d4ff188f82.png",
        category: "headphones",
      },
      {
        name: "Anker Soundcore Liberty 4",
        price: 699,
        description:
          "Fones de ouvido in-ear com som Hi-Res, cancelamento de ruído ativo e encaixe confortável.",
        size: ["Compacto"],
        color: "Preto",
        image:
          "https://t.ctcdn.com.br/dJOtA-23KO6zJkYH8Z7m9T47twc=/fit-in/600x600/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i642856.png",
        category: "headphones",
      },
      {
        name: "Samsung Galaxy Buds 2 Pro",
        price: 1299,
        description:
          "Fones de ouvido in-ear com cancelamento de ruído ativo, som de alta qualidade e ajuste ergonômico.",
        size: ["Compacto"],
        color: "Branco",
        image:
          "https://images.samsung.com/is/image/samsung/p6pim/br/2208/gallery/br-galaxy-buds2-pro-r510-sm-r510nzapzto-533191567?$650_519_PNG$",
        category: "headphones",
      },
      {
        name: "Beats Fit Pro",
        price: 1399,
        description:
          "Fones de ouvido in-ear com ajuste seguro, cancelamento de ruído ativo e integração com o ecossistema Apple.",
        size: ["Compacto"],
        color: "Preto",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMl3HpSqccFixVpN6dfWFZGf_zEQEAA0e-Cw&s",
        category: "headphones",
      },
      {
        name: "JBL Tune 125TWS",
        price: 499,
        description:
          "Fones de ouvido true wireless com som potente, bateria de longa duração e ajuste confortável.",
        size: ["Compacto"],
        color: "Azul",
        image:
          "https://www.jbl.com.br/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwf8017ce0/JBL_TUNE_125TWS_Product%20image_Hero_Blue.png?sw=535&sh=535",
        category: "headphones",
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
