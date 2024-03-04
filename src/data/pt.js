import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import DrysTech from '../assets/images/drystech.jpg'
import HortensiasMenu from '../assets/images/menu-hortensias.jpg'
import GrupoAlvarez from '../assets/images/grupoalvarez.jpg'
import ChatbotBarber from '../assets/images/chatbot_barber.jpg'
import ChatbotCoffee from '../assets/images/coffee-casa.jpg'
import Cookify from '../assets/images/cookify.png'
import Varablanca from '../assets/images/varablanca.png'
import MapaVarablanca from '../assets/images/mapa-varablanca.png'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'Steven González',
    title: 'Software Engineer',
    resume: '',
    about: 'Sou um engenheiro de software com mais de 6 anos de experiência na indústria de software, onde trabalhei com diferentes partes da arquitetura de software, como bancos de dados (SQL Server, MySql, NoSQL), backend (.Net core, Node JS, Python), frontend (React, Vanilla JS, Web components). Considero-me apaixonado por aprender e entender novos negócios para encontrar a melhor maneira de a tecnologia nos ajudar no dia a dia e sempre dando meu valor agregado em cada projeto ou tarefa de que sou responsável. Também gosto de fazer caminhadas, dançar e passar bons momentos com minha pequena amiga Athena. 😸',
    email: 'stevengonzalez957@gmail.com',
    phone: '+506 8634-7798',
    address: 'Alajuela, Costa Rica',
    mailto: {
        subject: 'Eu quero te contrata',
        body: 'Olá Steven, eu sou...'
    },
    emailJS: {
        serviceId: '',
        templateId: '',
        userId: ''
    },
    socials: {
        LinkedIn: {
            url: 'https://www.linkedin.com/in/stevgonzalezb/',
            text: 'stevgonzalezb',
            icon: <LinkedInIcon />
        },
        GitHub: {
            url: 'https://github.com/stevgonzalezb',
            text: 'stevgonzalezb',
            icon: <GitHubIcon />
        }
    },
    experiences: [
        {
            "title": "Engenheiro de Software Sênior",
            "date": "Novacomp | Jul 2022 - Atual",
            "description": "• Tecnologias, ferramentas e stack: Javascript, mithril.js, Tailwind CSS"
        },
        {
            "title": "Consultor Sênior de Software",
            "date": "Autônomo | Dez 2019 - Atual",
            "description": "• Consultoria de software para diferentes projetos com clientes na Costa Rica. • Criou chatbots para restaurante, barbearia, hotel e site de turismo. • Integrações personalizadas como Google Calendar, Slack, Telegram e outros. • Criou sites personalizados para uma Firma de Advocacia, Restaurantes, Lojas de Roupas usando Elementor e CSS e JavaScript personalizados para criar uma boa experiência do usuário. • Projetou e desenvolveu um mapa interativo usando Leaflet.js para integrar a API do mapa e marcadores, também usou o princípio de componentes da web e webpack para compilar todo o projeto web. • Entusiasta de Python! Faço vários experimentos usando scripts python e bibliotecas PIP como Padas, Numpy e BeautifulSoup. • Stack de tecnologia: Node JS, JavaScript, Webpack, Firebase, GPC, APIs do Google, Python, WebHooks, JSON."
        },
        {
            "title": "Engenheiro de Software",
            "date": "Emerson Automation Solutions | Mar 2021 - Jul 2022",
            "description": "• Trabalhou com a equipe de desenvolvimento principal para os Sistemas de Execução de Fabricação Syncade. • Implementou uma solução robusta para o manuseio de números na interface do usuário para Receitas Integradas WFx. • Projetou um fluxo de processo melhor para o ETL do QRM usando serviços de integração. • Ajudou a desenvolver e implementar um avaliador de expressão para o novo recurso AutoClose no QRM. • Criou um novo sistema de notificações para o WFx, usando um mecanismo de polling e knockout.js para lidar com sinais visuais. • Stack de tecnologia: C#, .Net Core, JavaScript, Angular, VBScripts, SQL Server, Integration Services."
        },
        {
            "title": "Engenheiro de Software",
            "date": "Smartsoft | Jun 2018 - Mar 2021",
            "description": "• Desenvolveu software personalizado para integrar o Sentinel com transações de núcleo bancário. • Projetou e criou APIs Rest, SOAP, Win Services usando NodeJS. • Suportou aplicações internas. • Participou da tomada de requisitos dos clientes. • Desenvolveu Consultas SQL complexas e Stored Procedures. • Manteve a produtividade, NPS e auditorias +85% • Stack de tecnologia: Node js, JavaScript, .NET Framework, Java, Apache Camel, Visual Basic, GitLab, PHP, Redis, Elastic Search, Active MQ, NoSQL DB, SQL Server."
        },
        {
            "title": "Engenheiro de Suporte de Software",
            "date": "Palantir S.A | Maio 2016 - Maio 2018",
            "description": "• Ajudou clientes da América Central e do lado do Caribe a suportar o QVET (software de gestão integral para clínicas veterinárias). • Implementou e treinou novos clientes até a operação ao vivo. • Participou do projeto de migração de Bancos de Dados para Fatura Digital de todos os nossos clientes. • Liderou em situações que o trabalho era muito, para alcançar o objetivo da empresa. • Criou Consultas SQL complexas para entregar relatórios personalizados de acordo com a legislação do país. • Construiu novos templates de Crystal Reports para diferentes clientes na Guatemala, Panamá e Costa Rica. • Stack de tecnologia: SQL Server, MS Access, ETL, Crystal Reports."
        },
        {
            "title": "Engenheiro de Suporte Técnico",
            "date": "Televisora de CR | Jan 2015 - Abr 2016",
            "description": "• Ajudou usuários internos com solução de problemas no Windows 7, 8, Microsoft Office, Outlook, credenciais de diretório ativo, aplicações internas. • Melhorou a produtividade em 75% no Departamento de Gestão de TI, resolvendo mais tickets. • Revisou Jobs do SQL Server e enviou relatórios para o DBA."
        },
        {
            "title": "Técnico de TSS - Estagiário",
            "date": "GBM as a Service | Out 2014 - Nov 2014",
            "description": "• Ajudou usuários internos com solução de problemas no Windows 7, 8, Microsoft Office, Outlook, credenciais de diretório ativo, aplicações internas. • Melhorou a produtividade em 75% no Departamento de Gestão de TI, resolvendo mais tickets. • Revisou Jobs do SQL Server e enviou relatórios para o DBA."
        }
    ],
    educations: [
        {
            "title": "Engenharia de Software",
            "date": "Bacharelado, Universidad Técnica Nacional | 2016 - 2021",
            "description": "• Tutoria para alunos iniciantes"
        },
        {
            "title": "Ensino Médio Técnico & TI em Redes",
            "date": "CTP Jesús Ocaña Rojas | 2012 - 2014",
            "description": "• Módulos CCNA 1,2 & 3 concluídos."
        }
    ],    
    certifications: [
        {
            "title": "Lean Six Sigma Yellow Belt (ICYB)",
            "date": "VMEdu Inc. | Março 2020 - Março 2023",
            "description": ""
        },
        {
            "title": "Certificado Fundamental de Scrum (SFC)",
            "date": "VMEdu Inc. | Março 2020 - Março 2023",
            "description": ""
        },
        {
            "title": "SQL Avançado para Cientistas de Dados",
            "date": "LinkedIn Learning | Fevereiro 2020",
            "description": ""
        },
        {
            "title": "Teste de Nível de Inglês Comercial",
            "date": "Idioma Internacional | Maio 2020",
            "description": "Nível de Inglês B2+"
        }
    ],
    services: [
        {
            "title": "Desenvolvimento Web",
            "description": "Tenho trabalhado com vários projetos de desenvolvimento web, incluindo websites personalizados, aplicações web e integrações de sistemas. Utilizo tecnologias modernas como React, Node.js e bases de dados SQL e NoSQL para criar soluções robustas e escaláveis que atendem às necessidades dos clientes."
        },
        {
            "title": "Consultoria de TI",
            "description": "Ofereço serviços de consultoria de TI para ajudar empresas a otimizar seus processos tecnológicos, implementar novas soluções e melhorar a eficiência de seus sistemas existentes. Isso inclui análise de sistemas, planejamento estratégico de TI e suporte técnico."
        },
        {
            "title": "Desenvolvimento de Chatbots",
            "description": "Especializo-me no desenvolvimento de chatbots personalizados para melhorar a interação com o cliente e automatizar processos de negócios. Utilizo plataformas como Dialogflow e Microsoft Bot Framework para criar chatbots inteligentes que podem ser integrados a websites, aplicativos móveis e plataformas de mídia social."
        }
    ],
    skills: [
        {
            "title": "Back-end",
            "description": ["Node.js", ".NET / C#", "Python", "Java", "Funções de Nuvem", "Firebase"]
        },
        {
            "title": "Front-end e Design",
            "description": ["React.js", "HTML", "CSS", "WordPress", "Elementor"]
        },
        {
            "title": "Estruturas de Dados",
            "description": ["SQL Server", "MySQL", "Bancos de Dados NoSQL", "Redis", "Active MQ", "Rabbit MQ", "Elastic Search"]
        },
        {
            "title": "Controle de Versão",
            "description": ["Git", "GitHub", "GitLab", "SourceSafe"]
        }
    ],
    portfolio: [
        {
            "tag": "Empreendedorismo",
            "image": "DrysTech",
            "title": "Drys Tech",
            "caption": "Empresa de software.",
            "description": "A DrysTech é uma empresa de tecnologia baseada na Costa Rica desde dezembro de 2019. Oferecemos diferentes soluções, como chatbots do Messenger, design de sites e desenvolvimentos personalizados. Nosso principal objetivo é fornecer soluções tecnológicas inovadoras para problemas comuns.",
            "technology": {
                "name": "",
                "icon": "https://img.icons8.com/emoji/48/000000/rocket-emji.png"
            },
            "links": [
                {
                    "link": "https://drys.tech",
                    "icon": "<LanguageIcon />"
                },
                {
                    "link": "https://www.facebook.com/drys.technologies",
                    "icon": "<FacebookIcon />"
                },
                {
                    "link": "https://instagram.com/drys.tech",
                    "icon": "<InstagramIcon />"
                },
                {
                    "link": "https://www.linkedin.com/company/drystech",
                    "icon": "<LinkedInIcon />"
                }
            ]
        },
        {
            "tag": "Front End",
            "image": "Cookify",
            "title": "Cookify.com",
            "caption": "Buscador de receitas.",
            "description": "Aplicativo simples para buscar receitas na internet.",
            "technology": {
                "name": "React",
                "icon": "https://img.icons8.com/officel/30/null/react.png"
            },
            "links": [
                {
                    "link": "https://stevgonzalezb.github.io/React.Recipes/",
                    "icon": "<LanguageIcon />"
                }
            ]
        },
        {
            "tag": "Front End",
            "image": "Varablanca",
            "title": "Varablanca Costa Rica, Site",
            "caption": "Site de turismo.",
            "description": "Site responsivo projetado para uma cooperativa de turismo rural na Costa Rica.",
            "technology": {
                "name": "Elementor",
                "icon": "https://img.icons8.com/windows/32/000000/elementor.png"
            },
            "links": [
                {
                    "link": "https://varablancaecoturismo.cr/",
                    "icon": "<LanguageIcon />"
                }
            ]
        },
        {
            "tag": "Front End",
            "image": "MapaVarablanca",
            "title": "Varablanca, Mapa Interativo",
            "caption": "Site de turismo.",
            "description": "Site responsivo projetado para uma cooperativa de turismo rural na Costa Rica.",
            "technology": {
                "name": "Vanilla Javascript",
                "icon": "https://img.icons8.com/color/48/null/javascript--v1.png"
            },
            "links": [
                {
                    "link": "https://varablancaecoturismo.cr/mapa/",
                    "icon": "<LanguageIcon />"
                }
            ]
        },
        {
            "tag": "Front End",
            "image": "HortensiasMenu",
            "title": "Menu dos Chalés Hortênsias",
            "caption": "Menu do restaurante.",
            "description": "Menu digital totalmente projetado com Elementor, um framework para Wordpress. O principal objetivo deste projeto foi melhorar a experiência do usuário e aumentar as interações nas mídias sociais com um design fresco e amigável, mantendo toda a essência da marca Hortênsias.",
            "technology": {
                "name": "Elementor",
                "icon": "https://img.icons8.com/windows/32/000000/elementor.png"
            },
            "links": [
                {
                    "link": "https://hortensiaschalets.com/menu/",
                    "icon": "<LanguageIcon />"
                }
            ]
        },
        {
            "tag": "Front End",
            "image": "GrupoAlvarez",
            "title": "Bufete Álvarez",
            "caption": "Site de escritório de advocacia.",
            "description": "Este foi um dos meus primeiros projetos na DrysTech. A principal ideia deste projeto foi implementar uma nova página no Wordpress usando um framework muito amigável para Front End. Então, decidimos usar o Elementor, que é uma ferramenta poderosa que permite criar sites incríveis com componentes HTML arrastáveis e CSS personalizado.",
            "technology": {
                "name": "Elementor",
                "icon": "https://img.icons8.com/windows/32/000000/elementor.png"
            },
            "links": [
                {
                    "link": "https://bufetealvarezcr.com/",
                    "icon": "<LanguageIcon />"
                }
            ]
        },
        {
            "tag": "Back End",
            "image": "ChatbotBarber",
            "title": "Chatbot Agendador Messenger",
            "caption": "Chatbot",
            "description": "Este é um projeto pessoal usando o Dialogflow como processador de linguagem natural e Node.js como principal tecnologia para desenvolver as integrações com o Google Calendars e MySQL.",
            "technology": {
                "name": "Node JS",
                "icon": "https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png"
            },
            "links": [
                {
                    "link": "http://m.me/barberstylecr",
                    "icon": "<FacebookIcon />"
                },
                {
                    "link": "https://github.com/stevgonzalezb/barberlife_chatbot",
                    "icon": "<GitHubIcon />"
                }
            ]
        },
        {
            "tag": "Back End",
            "image": "ChatbotCoffee",
            "title": "Chatbot de Entrega de Comida",
            "caption": "Chatbot",
            "description": "Este é um projeto experimental pessoal. Usando um agente simples do Dialogflow integrado ao sistema Glorias Food. Ele permite que você faça um pedido de comida diretamente do seu chat do messenger.",
            "technology": {
                "name": "Dialogflow",
                "icon": "https://pbs.twimg.com/profile_images/880147119528476672/S7C-2C6t.jpg"
            },
            "links": [
                {
                    "link": "http://m.me/110871247271177",
                    "icon": "<FacebookIcon />"
                }
            ]
        }
    ]
        
}