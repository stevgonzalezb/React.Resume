import React, { useState } from 'react'
import { Grid, Typography, Tabs, Tab, Card, CardContent, CardActionArea, CardMedia, Grow, DialogContent, Dialog, DialogTitle, DialogActions } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import { useParams } from 'react-router-dom';

import enData from '../../data/en'
import ptData from '../../data/pt'
import esData from '../../data/es'

import './Portfolio.css'

const Portfolio = () => {

    // Inside your component
    const { lang } = useParams()
    const [tabValue, setTabValue] = useState("All");
    const [projectDialog, setProjectDialog] = useState(false);

    // Assign the data to the resumeData variable
    let resumeData = null
    if (lang === 'en') resumeData = enData
    if (lang === 'pt') resumeData = ptData
    if (lang === 'es') resumeData = esData
    
    // Check if the language is supported
    if (!resumeData) resumeData = enData

    const ProjectDialog = () => (
        <Dialog className='project-dialog' open={projectDialog} onClose={() => setProjectDialog(false)}>
            <DialogTitle onClose={() => setProjectDialog(false)}>
                {projectDialog.title}
            </DialogTitle>
            <img src={projectDialog.image} alt="" className='project-dialog-image' />
            <DialogContent>
                <Typography className='project-dialog-description'>{projectDialog.description}</Typography>
            </DialogContent>

            <DialogActions className='project-dialog-actions'>
                {projectDialog?.links?.map(link => (
                    <a href={link.link} target='_blank' className='project-dialog-icon' rel="noreferrer">{link.icon}</a>
                ))}
            </DialogActions>
        </Dialog>
    )

    return (
        <Grid spacing={1} container className='section pb-45 pt-45'>
            {/* Title */}
            <Grid item className='section-title mb-20'>
                <span></span>
                <h6 className='section-title-text' >Portfolio</h6>
            </Grid>

            {/* Tabs */}
            <Grid item xs={12} className='' >
                <Tabs value={tabValue} indicatorColor='white' className='customTabs' onChange={(event, newValue) => setTabValue(newValue) } >
                    <Tab label='All' value='All' className={tabValue === 'All' ? 'customTabs-item active' : 'customTabs-item'} />

                    
                    {[...new Set(resumeData.portfolio.map(item => item.tag))].map(tag => (
                        <Tab label={tag} value={tag} className={tabValue === tag ? 'customTabs-item active' : 'customTabs-item'} />
                    ))}

                </Tabs>
            </Grid>
        
            {/* Projects */}
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    {resumeData.portfolio.map(project => (
                        <>
                        {tabValue === project.tag || tabValue === "All" ? (
                            <Grid item xs={12} sm={5} md={4} >
                                <Grow in timeout={1000} >
                                <Card className='custom-card' onClick={() => setProjectDialog(project)} >
                                    <CardActionArea>
                                        <CardMedia className='custom-card-image' component="img" image={project.image} title={project.title} />
                                        <CardContent>
                                            <Typography variant="body2" className='custom-card-title'>{project.title}</Typography>
                                            <Typography variant='body2' className='custom-card-description' >{project.caption}</Typography>
                                            <Tooltip title={project.technology.name}>
                                            <img src={project.technology.icon} alt='' style={{ position: "absolute", bottom: 5, right: 5, width: 32, height:32 }} />
                                            </Tooltip>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                </Grow>
                            </Grid>
                        ) : null }
                        </>
                    ))}
                </Grid>
            </Grid>
            <ProjectDialog />
        </Grid>
    )
}

export default Portfolio
