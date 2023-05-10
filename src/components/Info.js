import React from 'react'

export default function Info ({toggletheme}) {
    return (
        <div className='prof-wrapper'>
            <img className='profile-pic' alt='my profile pic' src='https://avatars.githubusercontent.com/u/56009641?v=4'/>
            <h1 className={'name' + toggletheme}>Omar Andoni</h1>
            <span className='title'>Frontend Web Developer</span>
            <div className='btns-wrapper'>
                <button className='btn'><i className="fa-solid fa-envelope"></i> &nbsp;Email</button>
                <button className='btn'><i className="fa-brands fa-linkedin"></i>&nbsp;Linkedin</button>
            </div>
        </div>
    )
}