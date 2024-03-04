import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom'

import Language from '../Language/Language'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import TelegramIcon from '@material-ui/icons/Telegram';
import 'bootstrap/dist/css/bootstrap.min.css';
import resumeData from '../../utils/resumeData.js';
import CustomButton from '../Button/Button'
import { useParams } from 'react-router-dom';

import './Header.css'

const Header = (props) => {
    const { lang } = useParams()
    const pathName = props?.location?.pathname
    const mailtoText = `mailto:${resumeData.email}?subject=${resumeData.mailto.subject}&body=${resumeData.mailto.body}`

    return (
        <Navbar expand="lg" sticky='top' className='header'>
            <Nav.Link as={NavLink} to={`/${lang}`} className='header-nav-link' >
                <Navbar.Brand className='header-home'>
                    <HomeRoundedIcon />
                </Navbar.Brand>
            </Nav.Link>

            <Navbar.Toggle />

            <Navbar.Collapse style={{
                display: 'flex',
            }}>
                <Nav className='header-left' >
                    <Nav.Link as={NavLink} to={`/${lang}`} className={pathName === '/' ? 'header-link-active' : 'header-link'}>Resume</Nav.Link>
                    <Nav.Link as={NavLink} to={`/${lang}/portfolio`} className={pathName === '/portfolio' ? 'header-link-active' : 'header-link'}>Portfolio</Nav.Link>
                </Nav>

                <div className='header-right'>
                    {Object.keys(resumeData.socials).map(key => (
                        <a key={key} href={resumeData.socials[key].url} target='_blank' rel="noreferrer">{resumeData.socials[key].icon}</a>
                    ))}
                <CustomButton text='Hire Me' icon={<TelegramIcon />} link={mailtoText} />
                </div>

                <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                padding: '8px'
                
                }}> <Language language={lang}/> </div>

            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Header)
