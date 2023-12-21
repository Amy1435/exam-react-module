import LanguageContext from "./LanguageContext";
import { useContext } from "react";

const AboutPage = () => {
    const lang = useContext(LanguageContext);

    const ChangeLanguageAbout = {
        "en-US": {
            title: "Project",
            text: " This project its a React and Vite project done by me. Explore all the actor profiles I ve create using TMDB API .",
        },
        "it-IT": {
            title: "Progetto",
            text: " Questo progetto è un progetto realizzato da me usando vite,React e l'API TMDB. Esplora!",
        },
    };
    return (
        <div className="about">
            <h1>{ChangeLanguageAbout[lang].title}</h1>
            <p>{ChangeLanguageAbout[lang].text}</p>
        </div>
    );
};

export default AboutPage;
