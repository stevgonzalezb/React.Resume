import React from 'react';
import { Grid, Typography, Icon, Paper, TextField } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline'
import CustomButton from '../../components/Button/Button'

import resumeData from '../../utils/resumeData'
import './Resume.css'


const Resume = () => {
    return (
        <>  {/* About */}
            <Grid container className='section pb-45 pt-45'>
                <Grid item className='section-title mb-30'>
                    <span></span>
                    <h6 className='section-title-text' >About Me</h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body2' className='about-text' >{resumeData.about}</Typography>
                </Grid>
            </Grid>

            {/* Education and Experiences */}
            <Grid container className='section'>
                <Grid item className='section-title mb-30'>
                    <span></span>
                    <h6 className='section-title-text'>Resume</h6>
                </Grid>
            </Grid>

            <Grid item xs={12} className='section'>
                <Grid container className='resume-timeline' >
                    {/* Experiences */}
                    <Grid item sm={12} md={6}>
                        <CustomTimeline title='Work Experience' icon={<WorkIcon />}>
                            {resumeData.experiences.map(experince => (
                                <TimelineItem>
                                    <CustomTimelineSeparator/>
                                    <TimelineContent className='timeline-content' >
                                        <Typography className='timeline-title'>{experince.title}</Typography>
                                        <Typography variant='caption' className='timeline-date'>{experince.date}</Typography>
                                        <Typography variant='body2' className='timeline-description'>{experince.description}</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </CustomTimeline>
                    </Grid>

                    {/* Education */}
                    <Grid item sm={12} md={6}>
                        <CustomTimeline title='Education' icon={<SchoolIcon />}>
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
                    </Grid>
                </Grid>
            </Grid>

            {/* Services */}
            <Grid container className='section pb-45 pt-45'>
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
            </Grid>

            {/* Skills */}
            <Grid container className='section gray-bg pb-45 p-50'>
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

            </Grid>

            {/* Contact */}
            <Grid container spacing={5} className='section pb-45 pt-45'>
                {/*Contact Form*/}
                <Grid item xs={12} lg={7}>
                    <Grid container>
                        <Grid item className='section-title mb-30'>
                            <span></span>
                            <h6 className='section-title-text'>Contact Form</h6>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name='name' label='Name' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name='email' label='E-mail' />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth name='message' label='Message' multiline rows={4} />
                                </Grid>
                                <Grid item xs={12}>
                                   <CustomButton text='Submit' />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                {/*Contact Information*/}
                <Grid item xs={12} lg={5}>
                    <Grid container spacing={2}>
                        <Grid item className='section-title mb-30'>
                            <span></span>
                            <h6 className='section-title-text'>Contact Information</h6>
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
                </Grid>
            </Grid>
        </>
    )
}

export default Resume
