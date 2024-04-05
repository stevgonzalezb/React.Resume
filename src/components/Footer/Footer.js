import { Typography } from '@material-ui/core'
import React from 'react'
import resumeData from '../../utils/resumeData'

import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <Typography className='footer-copyright'>
                made with ❤️ by me
            </Typography>

            <Typography className='footer-copyright'>
                © {new Date().getFullYear()}
            </Typography>
        </div>
    )
}

export default Footer
