import React from 'react';
import { Typography } from '@material-ui/core';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import GetApp from '@material-ui/icons/GetApp';
import showdown from "showdown"
import showdownHighlight from "showdown-highlight"

import profilePhoto from '../../assets/images/profile_photo.jpg';
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline'
import { useParams } from 'react-router-dom';

import enData from '../../data/en'
import ptData from '../../data/pt'
import esData from '../../data/es'

import './Profile.css'

const CustomTimelineItem = ({title, text, link}) => (
  <TimelineItem className='custom-item'>
    <CustomTimelineSeparator />
    <TimelineContent className='timeline-content'>
      { link ? (
        <Typography className='timeline-item-text'>
          <span>{title}:</span>{" "}
          <a href={link} target='_blank' rel="noreferrer" >
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className='timeline-item-text'>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

// Create markdown converter.
const converter = new showdown.Converter({
  extensions: [showdownHighlight({
      pre: false,
      auto_detection: true
  })],
  tables: true,
  simplifiedAutoLink: true,
  smoothLivePreview: true,
  simpleLineBreaks: true,
  tasklists: true,
});

function Profile() {

    const { lang } = useParams()

    // Assign the data to the resumeData variable
    let resumeData = null
    if (lang === 'en') resumeData = enData
    if (lang === 'pt') resumeData = ptData
    if (lang === 'es') resumeData = esData
    
    // Check if the language is supported
    if (!resumeData) resumeData = enData

  return (
    <div className='profile containter-shadow'>
        <div className='profile-name'>
            <Typography className='name'>{resumeData.name}</Typography>
            <Typography className='title'>{resumeData.title}</Typography>
        </div>

        <figure className='profile-image'>
            <img src={profilePhoto} alt=""></img>
        </figure>
        
        <div className='profile-information'>
          <div className='section-title'>
            <span style={{
              maxWidth: '100px',
            }}></span>
            <h6 className='section-title-text' style={{
              fontSize: 'large',
              fontWeight: 'bold',
            }}>About me...</h6>
          </div>

          {/*<Typography variant='body2' className='about'>{resumeData.about}</Typography>*/}
          <div style={{ fontSize: '13px' }}>
            <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(resumeData.about) }} />
          </div>
        
        </div>  

        {/*<div className='profile-information'>
            <CustomTimeline icon={<PersonOutlineIcon />}>
              <CustomTimelineItem title='Name' text={resumeData.name} />
              <CustomTimelineItem title='Title' text={resumeData.title} />
              <CustomTimelineItem title='Email' text={resumeData.email} />

              {Object.keys(resumeData.socials).map((key) => (
                <CustomTimelineItem key={key} title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].url} />
              ))}
            </CustomTimeline>
            <div className='button-container' >
              <CustomButton text={'Download CV'} icon={<GetApp />} link={resumeData.resume} />
            </div>
            </div>*/}
    </div>
  );
}

export default Profile;