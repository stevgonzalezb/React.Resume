import React, { useState } from 'react'
import EnglishIcon from '../../assets/images/english.png'
import SpanishIcon from '../../assets/images/spanish.png'
import PortugueseIcon from '../../assets/images/portuguese.png'

import  './Language.css'

const LanguageSelector = ({language}) => {
    let icon = null
    const [expanded, setExpanded] = useState(false);

    // Handle spanish
    if(language === 'es') icon = SpanishIcon

    // Handle portuguese
    if(language === 'pt') icon = PortugueseIcon

    // Default icon is English
    else icon = EnglishIcon

    return (
        
        <div style={{
            height: '30px',
            width: '30px',
            color:'white',
            backgroundColor: 'red',
            display: 'flex',
            justifyContent: 'right',
            borderRadius: '50%',
            cursor: 'pointer',
        }} onClick={() => setExpanded(!expanded)}>
            
            {/* Language icon */}
            <img src={icon} alt={language}/>

            {/* Language selector */}
            {expanded && (
                <>
                    <img src={SpanishIcon} alt='Spanish' className='language-selector-item-icon' />
                    <img src={PortugueseIcon} alt='Portuguese' className='language-selector-item-icon' />
                </>
            )}

        </div> 
    )
}

export default LanguageSelector;
