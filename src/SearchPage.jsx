import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import PersonCard from "./PersonCard";
const apiKey = import.meta.env.VITE_API_KEY;

const SearchPage = () => {
    const [error, setError] = useState("");
    const [actorBySearch, setActorBySearch] = useState([]);
    const [querySearch, setQuerySearch] = useState("");
    useEffect(() => {
        const fetchActorsBySearch = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${querySearch}`
                );
                const obj = await response.json();
                console.log(obj.results);
                setActorBySearch(obj.results);
            } catch (error) {
                console.log(error);
                setError("Server Error, try again!");
            }
        };
        fetchActorsBySearch();
    }, [querySearch]);

    const onSearch = async (value) => {
        setQuerySearch(value.toLowerCase());
    };

    return (
        <>
            <div className="title-container">
                <h1>Search Page</h1>
                <p>Search actor/actress by name</p>
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
