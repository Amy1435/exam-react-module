import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { useContext } from "react";
import PersonCard from "./PersonCard";
const apiKey = import.meta.env.VITE_API_KEY;
import LanguageContext from "./LanguageContext";

const SearchPage = () => {
    const [error, setError] = useState("");
    const [actorBySearch, setActorBySearch] = useState([]);
    const [querySearch, setQuerySearch] = useState("");
    const lang = useContext(LanguageContext);

    const ChangeLanguageHome = {
        "en-US": {
            title: "Search Page",
            subtitle: "Search actor/actress by name",
        },
        "it-IT": {
            title: "Pagina di ricerca",
            subtitle: "Cerca gli attori/attrici per nome",
        },
    };

    useEffect(() => {
        const fetchActorsBySearch = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${querySearch}`
                );
                const obj = await response.json();

                setActorBySearch(obj.results);
            } catch (error) {
                console.log(error);
                setError("Server Error, try again!");
            }
        };
        fetchActorsBySearch();
    }, [querySearch, lang]);

    const onSearch = async (value) => {
        setQuerySearch(value.toLowerCase());
    };

    return (
        <>
            <div className="title-container">
                <h1>{ChangeLanguageHome[lang].title}</h1>
                <p>{ChangeLanguageHome[lang].subtitle}</p>
                <SearchBar onSearch={onSearch} />
            </div>
            {!error && actorBySearch.length !== 0 ? (
                <>
                    <div className="actor-container">
                        {actorBySearch.map((a) => (
                            <PersonCard
                                key={a.id}
                                id={a.id}
                                name={a.name}
                                occupation={a.known_for_department}
                                sex={a.gender}
                                popularity={a.popularity}
                                works={a.known_for}
                                imagePath={a.profile_path}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <div>{error && <div>{error}</div>}</div>
            )}
        </>
    );
};

export default SearchPage;
