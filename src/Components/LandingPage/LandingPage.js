import React, {useContext, useEffect, useState} from 'react';
import {NavLink, Route} from "react-router-dom";
import {LanguageContext} from "../../Context/LanguageContext";


const LandingPage =()=>{
    const [language, setLanguage] = useState();
    const languageContext = useContext(LanguageContext);


    const checkLanguage=()=>{
        if(localStorage.getItem('language')==='undefined'){
            localStorage.setItem('language', language);
        }
        else{
            window.location.pathname = '/home';
        }
    }



    return(
        <>
            {checkLanguage()}
            <div>
                <button onClick={()=>{setLanguage('english')}}><h1>Hello!</h1></button>
                <button onClick={()=>{setLanguage('arabic')}}><h1>مرحبا!</h1></button>
                <button onClick={()=>{setLanguage('spanish')}}><h1>¡Hola!</h1></button>
                <button onClick={()=>{setLanguage('korean')}}><h1>안녕하세요!</h1></button>
            </div>

        </>

    )

}

export default LandingPage;