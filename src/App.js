import React from 'react'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'
import { useState } from 'react'


export default function App() {



    const [darkMode, setDarkMode] = useState("light");
    const [btnText, setBtnText] = useState("Dark");

    const handleClick = (e) => {
        e.preventDefault();

        //get body's current class

        const theBody = document.body.className;

        //change body background

        theBody.includes('dark') ? document.body.classList.remove('dark-body') :  document.body.classList.add('dark-body');

        darkMode === 'light' ? setDarkMode("dark"): setDarkMode("light");
        btnText === 'Dark' ? setBtnText("Light"): setBtnText("Dark");

        
        
        console.log(`ignore me, these are not the droids you are lookign for... ${darkMode}`);

    }


    return (
        <>
            <div className='btn-dark-wrapper'>
                <button onClick={handleClick} className='btn--dark_mode'>{btnText} Mode</button>
            </div>   
            <div className={darkMode} id='business-card'>
                <Info toggletheme={darkMode}/>
                <About toggletheme={darkMode}/>
                <Interests toggletheme={darkMode}/>
                <Footer />
            </div>
        </>
    )
}