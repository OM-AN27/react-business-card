import React from 'react'

export default function Info () {
    return (
        <div className='prof-wrapper'>
            <img alt='my profile pic' src='#'/>
            <h1>Omar Andoni</h1>
            <span>Frontend Web Developer</span>
            <div className='btns-wrapper'>
                <button className='btn'>Email</button>
                <button className='btn'>Linkedin</button>
            </div>
        </div>
    )
}