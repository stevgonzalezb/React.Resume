import React, { useState } from 'react'
import EnglishIcon from '../../assets/images/english.png'
import SpanishIcon from '../../assets/images/spanish.png'
import PortugueseIcon from '../../assets/images/portuguese.png'

import  './Language.css'

const LANGUAGES = [
    {lang: 'en', icon: EnglishIcon}, 
    {lang: 'es', icon: SpanishIcon}, 
    {lang: 'pt', icon: PortugueseIcon}
]

const LanguageSelector = ({language}) => {
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

    return (
        <div>
            {/* Selected language */}
            <div className='icon' onClick={() => setExpanded(!expanded)}>
                <img src={selected.icon} alt={language}/>
            </div>

            {/* Language selector */}
            {expanded && (
                LANGUAGES.map((lang, i) => {
                    if (lang.lang !== selected.lang) {
                        return (
                            <img src={lang.icon} alt={lang.lang} className='icon' />
                        )
                    }
                })
            )}
        </div>
    )
}

export default LanguageSelector;
