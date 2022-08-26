import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'Steven González',
    title: 'Software Engineer',
    resume: '',
    about: 'I am a software engineer with more than 6 years of experience in Software Industry, where I have worked with different parts of the software arquitecture such as data bases (SQL Server, MySql, Oracle), backend (.Net core, Node JS, Python), frontend (React, Vanilla JS, Web components) and even over the network where software runs. I consider myself passionate about learning and understanding new business models to find the best way technology can help to improve the company processes and always giving my value added in every project or task that I am responsible of.',
    email: 'stevengonzalez957@gmail.com',
    phone: '+506 8634-7798',
    address: 'Alajuela, Costa Rica',
    mailto: {
        subject: 'I want to hire you',
        body: 'Hello Steven, I am...'
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
            title:'Senior Software Engineer',
            date:'Novacomp | Jul 2022 - Present',
            description: `•	Create new APIs to communicate between microservices.
            • Write unit tests using Moq and xUnit.
            • Code reviews.
            • Use dependency Injection, Repositories, GitHub branching strategy.
            • Work under scrum methodology.
            • Technologies, tools, and stack: .Net Core, Angular, MongoDB, Kafka, RabbitMQ, Circle CI, Snowflake.`
        },
        {
            title:'Senior Software Consultant',
            date:'Self-Employed | Dec 2019 - Present',
            description: `• Software consulting for different projects with customers in Costa Rica.
            • Created chatbots for a restaurant, barbershop, hotel and tourism website.
            • Custom integrations such as Google Calendar, Slack, Telegram and others.
            • Created custom websites for a Law Firm, Restaurants, Clothes Stores using Elementor and customs CSS and JavaScript to created good user experience.
            • Designed and develop an interactive map using Leaflet.js to integrate the map API and markers, also used web components principle and webpack to compile all web project. 
            • Python enthusiast! I do several experiments using python scripts and PIP libraries such as Padas, Numpy and BeautifulSoup.
            • Tech stack: Node JS, JavaScript, Webpack, Firebase, GPC, Google APIs, Python, WebHooks, JSON.`
        },
        {
            title:'Software Engineer',
            date:'Emerson Automation Solutions | Mar 2021 - Jul 2022',
            description: `• Worked with development core team for Syncade Manufacturing Execution Systems.
            • Implemented a strong solution for numbers handling on front end for WFx Integrated Recipes. 
            • Designed a better process flow for the ETL of QRM using integration services.
            • Helped to develop and implement an expression evaluator for the new AutoClose feature in QRM.
            • Created new notifications system for WFx, using a polling mechanism and knockout.js to handle visual cues.
            • Tech stack: C#, .Net Core, JavaScript, Angular, VBScritps, SQL Server, Integration Services.`
        },
        {
            title:'Software Engineer',
            date:'Smartsoft | Jun 2018 - Mar 2021',
            description: `• Developed custom software in order to integrate Sentinel with bank core transactions. 
            • Designed and created Rest APIs, SOAP , Win Services using NodeJS. 
            • Supported internal applications. 
            • Participated taking customer requirements.
            • Developed complex SQL Queries and Stored Procedures.
            • Kept productivity, NPS and audits +85%
            • Tech stack: Node js, JavaScript, .NET Framework, Java, Apache Camel, Visual Basic, GitLab, PHP, Redis, Elastic Search, Active MQ, NoSQL DB, SQL Server.`
        },
        {
            title:'Software Support Engineer',
            date:'Palantir S.A | May 2016 - May 2018',
            description: `• Helped customers from Central America and Caribbean side to support QVET(Integral management software for veterinary clinics).
            • Implemented and trained new customers until run live operations.
            • Participated in the project of Databases migration to Digital Invoice of all our customers.
            • Led on situations that work was so much, to achieve the company goal. 
            • Created complex SQL Queries in order to deliver custom reports according country legislation.
            • Built new Crystal Reports templates for differents customers in Guatemala, Panama and Costa Rica.
            • Tech stack: SQL Server, MS Access, ETL, Crystal Reports.`
        },
        {
            title:'Technical Support Engineer',
            date:'Televisora de CR | Jan 2015 - Apr 2016',
            description: `• Helped internal users with troubleshooting on Windows 7, 8, Microsoft Office, Outlook, active directory credentials, internal applications. 
            • Improved the productivity by the 75% in the IT Management Department taking and solving more tickets.
            • Reviewed SQL Server Jobs and send a reports to DBA.`
        },
        {
            title:'TSS Technician - Intern',
            date:'GBM as a Service | Oct 2014 - Nov 2014',
            description: `• Helped internal users with troubleshooting on Windows 7, 8, Microsoft Office, Outlook, active directory credentials, internal applications. 
            • Improved the productivity by the 75% in the IT Management Department taking and solving more tickets.
            • Reviewed SQL Server Jobs and send a reports to DBA.`
        }
    ],
    educations: [
        {
            title:'Software Engineering',
            date:'Barchelor, Universidad Técnica Nacional | 2016  - 2021',
            description: '• Beginners student tutoring'
        },
        {
            title:'Technical High School & Networking IT ',
            date:'CTP Jesús Ocaña Rojas | 2012  - 2014',
            description: `• CCNA 1,2 & 3 modules finished.`
        }
    ],
    certifications: [
        {
            title:'Lean Six Sigma Yellow Belt (ICYB)',
            date:'VMEdu Inc. | March 2020  - March 2023',
            description: ''
        },
        {
            title:'Scrum Fundamentals Certified (SFC)',
            date:'VMEdu Inc. | March 2020  - March 2023',
            description: ``
        },
        {
            title:'Advanced SQL for Data Scientists',
            date:'LinkedIn Learning | Feb 2020',
            description: ``
        },
        {
            title:'Business English Level Test',
            date:'Idioma Internacional | May 2020',
            description: `B2+ English Level`
        }
    ],
    services: [
        {
            title: 'Web Dev',
            description:'I have been working with several......',
            icon: <FacebookIcon />
        },
        {
            title: 'Web Dev',
            description:'I have been working with several......',
            icon: <FacebookIcon />
        },
        {
            title: 'Web Dev',
            description:'I have been working with several......',
            icon: <FacebookIcon />
        }
    ],
    skills: [
        {
            title: 'Back End',
            description: ['Node JS', '.NET / C#', 'Python', 'Java', 'Cloud Functions', 'Firebase']
        },
        {
            title: 'Front & Design',
            description: ['React JS', 'HTML', 'CSS', 'Wordpress', 'Elementor']
        },
        {
            title: 'Data Structures',
            description: ['SQL Server', 'MySQL', 'NoSQL DB', 'Redis', 'Active MQ', 'Rabbit MQ', 'Elastic Search']
        },
        {
            title: 'Source Control',
            description: ['Git', 'GitHub', 'GitLab', 'SourceSafe']
        }
    ],
    portfolio: [
        {
            tag: 'Entrepreneurship',
            image: "https://drys.tech/.chatbots_media/drys/Portada3.JPG",
            title: 'Drys Tech',
            caption: 'Software company.',
            description: 'DrysTech is a technological company based in Costa Rica since December 2019. We offer different solutions such Messenger chatbots, websites design and custom developments. Our main objective is to provide innovative technological solutions to common problems.',
            technology: {
                name: '',
                icon: 'https://img.icons8.com/emoji/48/000000/rocket-emji.png'
            },
            links: [
                {
                    link: 'https://drys.tech',
                    icon: <LanguageIcon />
                },
                {
                    link: 'https://www.facebook.com/drys.technologies',
                    icon: <FacebookIcon />
                },
                {
                    link: 'https://instagram.com/drys.tech',
                    icon: <InstagramIcon />
                },
                {
                    link: 'https://www.linkedin.com/company/drystech',
                    icon: <LinkedInIcon />
                }
            ]
        },
        {
            tag: 'Front End',
            image: "https://drys.tech/.chatbots_media/hortensias/menu.jpg",
            title: 'Hortensias Chalets Menu',
            caption: 'Restaurant menu.',
            description: 'Digital menú totaly designed with Elementor, a framework for Wordpress. The main objective on this project was to improve the user experience and enhance social media interactios with a fresh and friendly desing with all Hortensias brand essence.',
            technology: {
                name: 'Elementor',
                icon: 'https://img.icons8.com/windows/32/000000/elementor.png'
            },
            links: [
                {
                    link: 'https://hortensiaschalets.com/menu/',
                    icon: <LanguageIcon />
                }
            ]
        },
        {
            tag: 'Front End',
            image: "https://drys.tech/.chatbots_media/bufete_alvarez/grupoalvarez.jpg",
            title: 'Bufete Álvarez',
            caption: 'Law firm website.',
            description: 'This was one of my first projects on from DrysTech. The main idea with this project was to deploy a new page on Wordpress using a very friendly framework for Front End. So, we decided to use Elementor, wich is a powerful tool that allows you to create amazing websites with drag and drops html components and custom CSS.',
            technology: {
                name: 'Elementor',
                icon: 'https://img.icons8.com/windows/32/000000/elementor.png'
            },
            links: [
                {
                    link: 'https://bufetealvarezcr.com/',
                    icon: <LanguageIcon />
                }
            ]
        },
        {
            tag: 'Back End',
            image: 'https://drys.tech/.chatbots_media/drys/chatbot_barber.jpg',
            title: 'Scheduler messenger chatbot',
            caption: 'Chatbot',
            description: 'This is a personal project using Dialogflow as natural language processor and node js as main technology to develop the integrations with Google Calendars and MySQL.',
            technology: {
                name: 'Node JS',
                icon: 'https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png'
            },
            links: [
                {
                    link: 'http://m.me/barberstylecr',
                    icon: <FacebookIcon />
                },
                {
                    link: 'https://github.com/stevgonzalezb/barberlife_chatbot',
                    icon: <GitHubIcon />
                }
            ]
        },
        {
            tag: 'Back End',
            image: 'https://drys.tech/.chatbots_media/drys/coffee-casa.jpg',
            title: 'Food delivery chatbot',
            caption: 'Chatbot',
            description: 'This is a personal expriment project. Using a simple dialogflow agent integrated with Glorias Food system. It allows you make a food ordering directing from your messenger chat. ',
            technology: {
                name: 'Dialogflow',
                icon: 'https://pbs.twimg.com/profile_images/880147119528476672/S7C-2C6t.jpg'
            },
            links: [
                {
                    link: 'http://m.me/110871247271177',
                    icon: <FacebookIcon />
                }
            ]
        }
    ]
}