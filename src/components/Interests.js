import React from 'react'

export default function Interests({toggletheme}) {
    return(
        <div className='interests-wrapper'>
            <h2>Interests</h2>
            <p className={toggletheme}>My interests ranges from computing and coding to music and art.  
                But you can also catch me playing games while not plugged in my work.
            </p>
        </div>
    )
}