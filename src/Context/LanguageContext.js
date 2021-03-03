import React, {useState} from 'react';


const useLanguage = () => {
    const [language, setLanguage] = useState({});

    const storeLanguage = lang => {
        setLanguage(lang);
    };

    const getLanguage = () =>{
        return language;
    }

    return {
        storeLanguage,
        getLanguage,
    };
}
export default useLanguage;

export const LanguageContext = React.createContext({});

export const LanguageContextProvider = props => {
    return <LanguageContext.Provider value={useLanguage()}>
        {props.children}
    </LanguageContext.Provider>
};