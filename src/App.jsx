import HomePage from "./HomePage";
import "./index.scss";
import SearchPage from "./SearchPage";
import AboutPage from "./AboutPage";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import PersonPage from "./PersonPage";
import { useState } from "react";
import LanguageContext from "./LanguageContext";

function App() {
    const [lang, setLang] = useState("en-US");
    return (
        <>
            <LanguageContext.Provider value={lang}>
                <Navbar setLang={setLang} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="person/:id" element={<PersonPage />} />
                </Routes>
            </LanguageContext.Provider>
        </>
    );
}

export default App;
