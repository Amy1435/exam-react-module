import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import PersonCard from "./PersonCard";
const apiKey = import.meta.env.VITE_API_KEY;
import LanguageContext from "./LanguageContext";

// pagiina principale
const HomePage = () => {
    const [popularActors, setPopularActors] = useState([]);
    const [error, setError] = useState("");
    const lang = useContext(LanguageContext);

    const ChangeLanguageHome = {
        "en-US": {
            title: "Popular Actors/Actresses",
        },
        "it-IT": {
            title: "Attori/Attrici Popolari",
        },
    };

    useEffect(() => {
        const fetchPopularActors = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/trending/person/day?api_key=${apiKey}&language=${lang}`
                );
                const obj = await response.json();
                console.log(obj.results);
                setPopularActors(obj.results);
            } catch (error) {
                console.log(error);
                setError("Server Error, try again!");
            }
        };
        fetchPopularActors();
    }, [lang]);

    return (
        <>
            {!error && popularActors.length !== 0 ? (
                <>
                    <div className="title-container">
                        <h1> {ChangeLanguageHome[lang].title}</h1>
                    </div>
                    <div className="actor-container">
                        {popularActors.map((a) => (
                            <PersonCard
                                key={a.id}
                                id={a.id}
                                name={a.name}
                                occupation={a.known_for_department} // rivedi
                                sex={a.gender} // se 1 femmina se 2 maschio
                                popularity={a.popularity}
                                works={a.known_for}
                                imagePath={a.profile_path}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <div>{error ? error : "Loading..."}</div>
            )}
        </>
    );
};

export default HomePage;
