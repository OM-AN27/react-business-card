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
        darkMode === 'light' ? setDarkMode("dark"): setDarkMode("light");
        btnText === 'Dark' ? setBtnText("Light"): setBtnText("Dark");
        
        console.log(`ive been clicked and button val is ${darkMode}`);

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