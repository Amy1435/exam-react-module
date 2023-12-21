import HomePage from "./HomePage";
import "./index.scss";
import SearchPage from "./SearchPage";
import AboutPage from "./AboutPage";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import PersonPage from "./PersonPage";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="search" element={<SearchPage />} />
                <Route path="person/:id" element={<PersonPage />} />
            </Routes>
        </>
    );
}

export default App;
