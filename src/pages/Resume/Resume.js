import React, { useState } from 'react';
import { Grid, Typography, Paper, TextField } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline'
import CustomButton from '../../components/Button/Button'
import emailjs from 'emailjs-com';
//import { store } from 'react-notifications-component';
import Link from '@material-ui/core/Link'
import { useParams } from 'react-router-dom';


import enData from '../../data/en'
import ptData from '../../data/pt'
import esData from '../../data/es'

import './Resume.css'
//import 'react-notifications-component/dist/theme.css'

const TRANSLATIONS = {
    'en': {
        'about': 'About Me',
        'workExperience': 'Work Experience',
        'education': 'Education',
        'certifications': 'Certifications and Scores',
        'services': 'My Services',
        'skills': 'Skills',
        'contactForm': 'Contact Form',
        'contactInformation': 'Contact Information',
        'showMore': 'Show more...',
        'showLess': 'Show less...'
    },
    'pt': {
        'about': 'Sobre Mim',
        'workExperience': 'Experiência Profissional',
        'education': 'Educação',
        'certifications': 'Certificações',
        'services': 'Meus Serviços',
        'skills': 'Habilidades',
        'contactForm': 'Formulário de Contato',
        'contactInformation': 'Informações de Contato',
        'showMore': 'Mostrar mais...',
        'showLess': 'Mostrar menos...'
    },
    'es': {
        'about': 'Sobre Mi',
        'workExperience': 'Experiencia Laboral',
        'education': 'Educación',
        'certifications': 'Certificaciones y Puntuaciones',
        'services': 'Mis Servicios',
        'skills': 'Habilidades',
        'contactForm': 'Formulario de Contacto',
        'contactInformation': 'Información de Contacto'
    }
}


const Resume = () => {

    const { lang } = useParams() 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showMore, setShowMore] = useState(false);

    // Assign the data to the resumeData variable
    let resumeData = null
    if (lang === 'en') resumeData = enData
    if (lang === 'pt') resumeData = ptData
    if (lang === 'es') resumeData = esData
    
    // Check if the language is supported
    if (!resumeData) resumeData = enData

    // Select the translation
    const translation = TRANSLATIONS[lang]
    if (!translation) resumeData = TRANSLATIONS['en']

    function handleSubmit(e) {
        e.preventDefault();
        
        emailjs.sendForm(resumeData.emailJS.serviceId, resumeData.emailJS.templateId, e.target, resumeData.emailJS.userId)
        .then((result) => {
            //store.addNotification({
            //    title: "Message sent!",
            //    message: "I will contact you ASAP.",
            //    type: "success",
            //    insert: "top",
            //    container: "bottom-center",
            //    animationIn: ["animated", "fadeIn"],
            //    animationOut: ["animated", "fadeOut"],
            //    dismiss: {
            //      duration: 4000,
            //      onScreen: false,
            //      showIcon: true
            //    }
            //  })
            //  setName('');
            //  setEmail('');
            //  setMessage('');

        }, (error) => {
            console.log(error.text);
            //store.addNotification({
            //    title: "Error",
            //    message: "Please, try again later.",
            //    type: "danger",
            //    insert: "top",
            //    container: "bottom-center",
            //    animationIn: ["animated", "fadeIn"],
            //    animationOut: ["animated", "fadeOut"],
            //    dismiss: {
            //      duration: 4000,
            //      onScreen: false,
            //      showIcon: true
            //    }
            //  })
        });
    }

    return (
        <div style={{
            //background: 'rgba(0, 0, 0, 0.727)'
        }}>  {/* About */}
            {/*<Grid container className='section pb-45'>
                <Grid item className='section-title mb-30'>
                    <span></span>
                    <h6 className='section-title-text'>{translation?.about}</h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body2' className='about-text' >{resumeData.about}</Typography>
                </Grid>
            </Grid>*/}

            {/* Education and Experiences */}
            {/*<Grid container className='section'>
                <Grid item className='section-title mb-30'>
                    <span></span>
                    <h6 className='section-title-text'>{translation?.workExperience}</h6>
                </Grid>
            </Grid>*/}

            <Grid item xs={12} className='section'>
                <Grid container className='resume-timeline' >
                    {/* Experiences */}
                    <Grid item sm={12} md={6}>
                        <CustomTimeline title={translation?.workExperience} icon={<WorkIcon />}>
                            {resumeData.experiences.slice(0, showMore ? resumeData.experiences.length : 2).map(experience => (
                                <TimelineItem>
                                    <CustomTimelineSeparator/>
                                    <TimelineContent className='timeline-content' >
                                        <Typography className='timeline-title'>{experience.title}</Typography>
                                        <Typography variant='caption' className='timeline-date'>{experience.date}</Typography>
                                        <Typography variant='body2' className='timeline-description'>{experience.description}</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}                            
                        </CustomTimeline>
                        {showMore ? <Link Component="button" variant="inherit" style={{cursor: 'pointer'}} onClick={() => {setShowMore(false)}}>{translation?.showLess}</Link> : 
                                <Link Component="button" variant="inherit" style={{
                                    cursor: 'pointer',
                                    padding: '8px',
                                    color: 'white',
                                }} onClick={() => {setShowMore(true)}}>{translation?.showMore}</Link>}
                    </Grid>

                    {/* Education */}
                    <Grid item sm={12} md={6}>
                        <CustomTimeline title={translation?.education} icon={<SchoolIcon />}>
                            {resumeData.educations.map(education => (
                                <TimelineItem>
                                    <CustomTimelineSeparator/>
                                    <TimelineContent className='timeline-content' >
                                        <Typography className='timeline-title'>{education.title}</Typography>
                                        <Typography variant='caption' className='timeline-date'>{education.date}</Typography>
                                        <Typography variant='body2' className='timeline-description'>{education.description}</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </CustomTimeline>

                        <CustomTimeline title={translation?.certifications} icon={<CardMembershipIcon />}>
                            {resumeData.certifications.map(cerf => (
                                <TimelineItem>
                                    <CustomTimelineSeparator/>
                                    <TimelineContent className='timeline-content' >
                                        <Typography className='timeline-title'>{cerf.title}</Typography>
                                        <Typography variant='caption' className='timeline-date'>{cerf.date}</Typography>
                                        <Typography variant='body2' className='timeline-description'>{cerf.description}</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </CustomTimeline>
                    </Grid>
                </Grid>
            </Grid>

            {/* Services */}
            {/*<Grid container className='section pb-45 pt-45'>
                <Grid item className='section-title mb-30'>
                    <span></span>
                    <h6 className='section-title-text'>My Services</h6>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={3} justify='space-around' >
                        {resumeData.services.map(service => (
                            <Grid item xs={12} sm={6} md={3} >
                                <div className='service'>
                                    <Icon className='service-icon'>{service.icon}</Icon>
                                    <Typography className='service-title' variant='h6' >{service.title}</Typography>
                                    <Typography className='service-description' variant='body2' >{service.description}</Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>*/}

            {/* Skills */}
           {/* <Grid container className='section gray-bg pb-45 p-50'>
                <Grid item xs={12}>
                <Grid container spacing={3} justify='space-between' >
                {resumeData.skills.map(skill =>(
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper elevation={0} className='skill' >
                            <Typography variant='h6' className='skill-title' >
                                {skill.title}
                            </Typography>
                            {skill.description.map(element =>(
                                <Typography variant='body2' className='skill-description' >
                                    <TimelineDot variant={'outlined'} className='timeline-dot' />
                                    {element}
                                </Typography>
                            ))}
                        </Paper>
                    </Grid>
                ))}
                </Grid>
                </Grid>

            </Grid>/*}

            {/* Contact */}
            {/*<Grid container spacing={5} className='section pb-45 pt-45'>*/}
                {/*Contact Form*/}
                {/*<Grid item xs={12} lg={7}>
                    <Grid container>
                        <Grid item className='section-title mb-30'>
                            <span></span>
                            <h6 className='section-title-text'>{translation?.contactForm}</h6>
                        </Grid>
                        <form onSubmit={handleSubmit} >
                        <Grid item xs={12}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name='name' label='Name' value={name} onInput={ e=>setName(e.target.value)} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name='email' label='E-mail' value={email} onInput={ e=>setEmail(e.target.value)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth name='message' label='Message' multiline rows={4} value={message} onInput={ e=>setMessage(e.target.value)} />
                                </Grid>
                                <Grid item xs={12}>
                                   <CustomButton text='Submit' type='submit'/>
                                </Grid>
                            </Grid>
                        </Grid>
                        </form>
                    </Grid>
                            </Grid>*/}

                {/*Contact Information*/}
                {/*<Grid item xs={12} lg={5}>
                    <Grid container spacing={2}>
                        <Grid item className='section-title mb-30'>
                            <span></span>
                            <h6 className='section-title-text'>{translation?.contactInformation}</h6>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={12} >
                                    <Typography className='contact-info-item'>
                                        <span>Address: </span> {resumeData.address}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} >
                                    <Typography className='contact-info-item'>
                                        <span>Email: </span> {resumeData.email}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} >
                                    <Typography className='contact-info-item'>
                                        <span>Phone: </span> {resumeData.phone}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        
                        <Grid item xs={12}>
                            <Grid container className='contact-info-socials-container' >
                                {Object.keys(resumeData.socials).map((key) => (
                                    <Grid item className='contact-info-social' >
                                        <a href={resumeData.socials[key].url}>{resumeData.socials[key].icon}</a>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                            
                    </Grid>
                                </Grid>*/}
            {/*</Grid>*/}
        </div>
    )
}

export default Resume
