import profileImg from '../assets/alessandro-sobre.png';
import logoSymbolImg from '../assets/logo_al.png';
import logoFullImg from '../assets/logo_completa.png';
import bombinhasImg from '../assets/bombinhas.jpeg';
import bombinhas2Img from '../assets/bombinhas2.jpeg';
import mapaImg from '../assets/mapa-porto-belo.jpg';
import portoBeloIaImg from '../assets/porto-belo-ia.png';
import onovoLogo from '../assets/onovo_imobiliario.png';
import onovoImg from '../assets/onovoalessandro.png';
import fechandoNegocioImg from '../assets/alessandro-fechando-negocio.png';
import contatoImg from '../assets/alessandro-telefone.png';

export const brokerData = {
  // ==========================================
  // 1. SEO & CONFIGURAÇÕES GERAIS (Atualizado)
  // ==========================================
  seo: {
    title: "Alessandro Lima | Especialista Imobiliário no Litoral de SC",
    description: "Invista com segurança em imóveis na planta em Itapema, Porto Belo e Bombinhas. Consultoria especializada para empresários e famílias.",
    keywords: "investimento imobiliário, porto belo, itapema, bombinhas, santa catarina, imóveis na planta, alessandro lima",
    ogImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Placeholder
    favicon: `${import.meta.env.BASE_URL}vite.svg`
  },

  theme: {
    // Cores principais do corretor (Pode alterar para a identidade visual de cada um)
    primary: "#1a2d4e", // Azul Marinho
    primaryHover: "#123254", // Azul Marinho escuro
    background: "#ffffff", // Fundo principal claro
    cardBg: "#f8fafc", // Fundo dos cards (cinza bem claro)
    text: "#123254", // Texto principal
    fontPrimary: "'Montserrat', sans-serif",
    fontSecondary: "'Montserrat', sans-serif"
  },

  // ==========================================
  // 2. DADOS DO CORRETOR
  // ==========================================
  broker: {
    name: "Alessandro Lima",
    creci: "CRECI em andamento",
    phone: "5545999223545", // Apenas números, com código do país (55) e DDD
    email: "alessandro.santos1405@gmail.com",
    instagram: "https://www.instagram.com/alecostaesmeralda/",
    facebook: "https://www.facebook.com/share/17oyPwYPo7/?mibextid=wwXIfr",
    tiktok: "https://www.tiktok.com/@alessandrolimaoficial01?_r=1&_t=ZS-94su6NZBKYH",
    threads: "https://www.threads.com/@alessandro.litoralimoveis?igshid=NTc4MTIwNjQ2YQ==",
    linkedin: "https://www.linkedin.com/in/alessandro-lima-ab815097",
    whatsappMessage: "Olá Alessandro! Gostaria de tirar algumas dúvidas sobre investimentos no litoral de SC.",
    // A imagem principal do corretor (Hero e Sobre)
    profileImage: profileImg,
    // Logos (se houver, usar links públicos ou caminhos da pasta /public)
    logoSymbol: logoSymbolImg,
    logoFull: logoFullImg,
    
    bio: {
      title: "Confiança, Credibilidade e Profissionalismo",
      paragraphs: [
        "Sou Alessandro Lima, especialista no mercado imobiliário do litoral catarinense, com foco nas regiões de Itapema, Porto Belo e Bombinhas.",
        "Meu objetivo é ajudar empresários, profissionais liberais e famílias a diversificarem seu patrimônio com segurança, encontrando as melhores oportunidades em imóveis na planta.",
        "Ofereço um atendimento amigável, acolhedor e altamente profissional, garantindo que sua jornada de investimento ou aquisição do imóvel dos sonhos na praia seja transparente e rentável."
      ]
    }
  },

  // ==========================================
  // 3. CONTEÚDO DAS SEÇÕES
  // ==========================================
  
  // Seção 1: Hero (Oportunidade)
  hero: {
    badge: "",
    headline: "Invista com Segurança no Litoral que Mais Valoriza no Brasil",
    subheadline: "Descubra as melhores oportunidades em imóveis na planta em Itapema, Porto Belo e Bombinhas.",
    ctaText: "Quero uma Consultoria Gratuita",
    backgroundVideo: "https://youtu.be/Lcl4QjjF6kY",
    backgroundImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },

  // Seção 2: Por que investir agora? (Bento Grid)
  stats: [
    { highlight: "Itapema-SC", text: "" },
    { highlight: "Porto Belo-SC", text: "" },
    { highlight: "Bombinhas-SC", text: "" }
  ],
  benefits: {
    title: "Por que investir no Litoral de SC agora?",
    cards: [
      {
        title: "Valorização Acima da Média",
        description: "Itapema e Porto Belo lideram os índices de valorização imobiliária no Brasil, superando a média nacional ano após ano.",
        icon: "TrendingUp" // Nome do ícone do Lucide React
      },
      {
        title: "Desenvolvimento Acelerado",
        description: "Novos acessos, infraestrutura e grandes projetos estão transformando a região.",
        icon: "Building2"
      },
      {
        title: "Segurança Jurídica",
        description: "Trabalhamos apenas com construtoras consolidadas, garantindo entrega no prazo e documentação impecável.",
        icon: "ShieldCheck"
      },
      {
        title: "Alta Liquidez",
        description: "Demanda crescente por locação de temporada e revenda, garantindo que seu ativo seja facilmente convertido em capital.",
        icon: "BadgeDollarSign"
      }
    ]
  },

  // Seção 3: Empreendimento Destaque (Nova Seção)
  featuredProperty: {
    show: true, // Permite ocultar a seção se o corretor não tiver um destaque no momento
    title: "Conheça esta oportunidade em Bombinhas.",
    description: "Aproveite o mais novo pré-lançamento com condições exclusivas para investidor.",
    images: [
      bombinhasImg,
      bombinhas2Img
    ],
    ctaText: "Falar com Alessandro no WhatsApp"
  },

  // Seção 4: Masterplan / Região
  region: {
    title: "Transformações Arquitetônicas e o",
    highlight: "Futuro",
    description: "A cidade está prestes a passar por uma das maiores transformações urbanísticas do Brasil. O Masterplan trará um novo padrão de vida e infraestrutura, elevando o patamar da região e redefinindo o luxo no litoral catarinense.",
    features: [
      {
        title: "Novo Píer Turístico",
        description: "Estrutura de classe mundial para receber embarcações, integrando lazer e fomentando o turismo de alto padrão.",
        icon: "Anchor"
      },
      {
        title: "Revitalização da Orla",
        description: "Alargamento da faixa de areia e um novo calçadão moderno, valorizando exponencialmente os imóveis frente-mar.",
        icon: "Map"
      },
      {
        title: "Parques e Mobilidade",
        description: "Criação de novas áreas verdes, ciclovias e vias planejadas para garantir sustentabilidade e qualidade de vida.",
        icon: "TreePine"
      }
    ],
    opportunityBox: {
      title: "A Janela de Oportunidade",
      description: "Investir agora significa entrar antes da conclusão destas grandes obras. A valorização imobiliária projetada para os próximos anos criará um cenário de altíssima rentabilidade para os investidores pioneiros."
    },
    masterplanLink: `${import.meta.env.BASE_URL}masterplan-pereque.pdf`,
    images: [
      {
        url: mapaImg,
        title: "Masterplan Porto Belo",
        description: "Planejamento urbano e eixos de desenvolvimento"
      },
      {
        url: portoBeloIaImg,
        title: "Alto potencial turístico",
        description: "Turismo e capital chegando a cidade."
      }
    ]
  },

  // Seção 5: Autoridade da Empresa (Nova Seção)
  company: {
    show: true,
    name: "O Novo Imobiliário",
    logo: onovoLogo,
    title: "A Força por Trás dos Seus Investimentos",
    description: "Como seu consultor de confiança, levo até você a inteligência de mercado e as melhores oportunidades da região. Temos acesso antecipado a lançamentos e negociações exclusivas.",
    image: onovoImg,
    stats: [
      { value: "1.4 bi", label: "em 2025" },
      { value: "17 lojas", label: "3 fora do Brasil" },
      { value: "500", label: "corretores" }
    ]
  },

  // Seção 5.5: Destaques de Investimento (Nova Seção)
  investmentHighlights: {
    show: true,
    image: fechandoNegocioImg,
    items: [
      {
        text: "Valorização média de 15% ao ano",
        icon: "Percent"
      },
      {
        text: "Imóveis a poucos metros do mar",
        icon: "Waves"
      },
      {
        text: "Alta demanda em temporada",
        icon: "Umbrella"
      },
      {
        text: "Pré-lançamento com condições exclusivas",
        icon: "Building"
      },
      {
        text: "Atendimento 100% digital.",
        icon: "Smartphone"
      }
    ]
  },

  // Seção 6: Depoimentos
  testimonials: {
    title: "O que dizem nossos investidores",
    items: [
      {
        name: "Carlos Eduardo",
        role: "Investidor de São Paulo",
        text: "A consultoria do Alessandro mudou minha visão sobre o mercado de SC. Ele me apresentou oportunidades que eu não encontraria sozinho. Já estou no meu terceiro imóvel com ele.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      {
        name: "Mariana Silva",
        role: "Empresária",
        text: "Profissionalismo impecável. O Alessandro não empurra imóveis, ele entende o seu perfil e busca o ativo que faz sentido para a sua carteira. Recomendo de olhos fechados.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      {
        name: "Roberto Almeida",
        role: "Médico",
        text: "Segurança foi o que me fez fechar negócio. Todo o processo foi transparente, desde a análise de viabilidade até a assinatura do contrato. Excelente trabalho.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    ]
  },

  // Seção 7: CTA Final
  cta: {
    title: "Pronto para dar o próximo passo?",
    subtitle: "Agende uma reunião estratégica de 30 minutos. Sem compromisso, apenas dados e oportunidades reais.",
    buttonText: "Falar com Alessandro no WhatsApp"
  },

  // Seção 8: Contato (Nova Seção)
  contact: {
    title: "Vamos conversar? Tenho certeza que tenho o empreendimento certo para o seu momento.",
    image: contatoImg,
    buttonText: "Enviar Mensagem"
  }
};
