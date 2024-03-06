import React, { useState } from 'react'
import EnglishIcon from '../../assets/images/english.png'
import SpanishIcon from '../../assets/images/spanish.png'
import PortugueseIcon from '../../assets/images/portuguese.png'

import  './Language.css'

// Supported languages
const LANGUAGES = [
    {lang: 'en', icon: EnglishIcon}, 
    //{lang: 'es', icon: SpanishIcon}, 
    {lang: 'pt', icon: PortugueseIcon}
]

const LanguageSelector = ({language}) => {

    //
    // State


    let selected = null
    const [expanded, setExpanded] = useState(false)

    // Get icon for language
    for (let i = 0; i < LANGUAGES.length; i++) {
        if (LANGUAGES[i].lang === language) {
            selected = LANGUAGES[i]
        }
    }

    // Validate language
    if (!selected) selected = LANGUAGES[0]

    //
    // Handling
    //

    function onChangeLanguage(lang) {
        
        // Get the current pathname and split it into parts
        let pathParts = window.location.hash.split('/')
    
        // Replace the language part of the path
        pathParts[1] = lang
    
        // Join the parts back together into a new path
        let newPath = pathParts.join('/')
    
        // Navigate to the new path
        window.location.href = newPath

        // Close the language selector
        setExpanded(!expanded)
    }

    //
    // Rendering
    //

    return (
        <div>
            {/* Selected language */}
            <div className='icon' onClick={() => setExpanded(!expanded)}>
                <img src={selected.icon} alt={language}/>
            </div>

            {/* Language selector */}
            <div>
                {expanded && (
                    LANGUAGES.map((lang, i) => {
                        if (lang.lang !== selected.lang) {
                            return (
                                <div style={{
                                    position: 'absolute',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '4px',
                                    bottom: '-10px',
                                }}>
                                    <img src={lang.icon} 
                                        alt={lang.lang} className='icon' 
                                        onClick={() => onChangeLanguage(lang.lang)} />
                                </div>
                            )
                        }
                    })
                )}
            </div>
        </div>
    )
}

export default LanguageSelector;
