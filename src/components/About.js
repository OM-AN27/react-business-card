import React from 'react'

export default function About({toggletheme}) {
    return(
        <div className={'about-wrapper ' +  toggletheme}>
            <h2>About</h2>
            <p className='texts'>Frontend web developer based in Vancouver with skills powered by gummy bears. Always eager to learn
                more and to bring the best and latest tools to my projects. 
            </p>
        </div>
    )
}