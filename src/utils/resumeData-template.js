import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: '',
    title: '',
    resume: '',
    about: '',

    email: '',
    phone: '',
    address: '',

    mailto: {
        subject: '',
        body: ''
    },

    emailJS: {
        serviceId: '',
        templateId: '',
        userId: ''
    },

    socials: {
        LinkedIn: {
            url: '',
            text: '',
            icon: <LinkedInIcon />
        },
        GitHub: {
            url: '',
            text: '',
            icon: <GitHubIcon />
        }
    },
    experiences: [
        {
            title:'',
            date:'',
            description: ``
        },
        {
            title:'',
            date:'',
            description: ``
        },
        {
            title:'',
            date:'',
            description: ``
        }
    ],
    educations: [
        {
            title:'',
            date:'',
            description: ''
        },
        {
            title:'',
            date:'',
            description: ``
        }
    ],
    certifications: [
        {
            title:'',
            date:'',
            description: ''
        },
        {
            title:'',
            date:'',
            description: ``
        },
        {
            title:'',
            date:'',
            description: ``
        },
        {
            title:'',
            date:'',
            description: ``
        }
    ],
    services: [
        {
            title: '',
            description:'',
            icon: <FacebookIcon />
        },
        {
            title: '',
            description:'',
            icon: <FacebookIcon />
        },
        {
            title: '',
            description:'',
            icon: <FacebookIcon />
        }
    ],
    skills: [
        {
            title: '',
            description: ['','',]
        },
        {
            title: '',
            description: ['','',]
        },
        {
            title: '',
            description: ['','',]
        },
        {
            title: '',
            description: ['','',]
        }
    ],
    portfolio: [
        {
            tag: '',
            image: "",
            title: '',
            caption: '',
            description: '',
            technology: {
                name: '',
                icon: ''
            },
            links: [
                {
                    link: '',
                    icon: <FacebookIcon />
                },
                {
                    link: '',
                    icon: <FacebookIcon />
                },
                {
                    link: '',
                    icon: <FacebookIcon />
                }
            ]
        },
        {
            tag: '',
            image: "",
            title: '',
            caption: '',
            description: '',
            technology: {
                name: '',
                icon: ''
            },
            links: [
                {
                    link: '',
                    icon: <FacebookIcon />
                },
                {
                    link: '',
                    icon: <FacebookIcon />
                },
                {
                    link: '',
                    icon: <FacebookIcon />
                }
            ]
        },
        {
            tag: '',
            image: '',
            title: '',
            caption: '',
            description: '',
            technology: {
                name: '',
                icon: ''
            },
            links: [
                {
                    link: '',
                    icon: <FacebookIcon />
                },
                {
                    link: '',
                    icon: <FacebookIcon />
                },
                {
                    link: '',
                    icon: <FacebookIcon />
                }
            ]
        }
    ]
}