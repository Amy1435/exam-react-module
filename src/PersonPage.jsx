import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
const apiKey = import.meta.env.VITE_API_KEY;
import LanguageContext from "./LanguageContext";

const PersonPage = () => {
    const { id } = useParams();
    const [error, setError] = useState("");
    const [actorById, setActorById] = useState();

    const lang = useContext(LanguageContext);

    const ChangeLanguagePerPage = {
        "en-US": {
            name: "Name",
            gender: "Gender",
            age: "Age",
            occupation: " Occupation",
            bio: "Bio",
            male: "male",
            female: "female",
            title: "Actor/Actress id:",
        },
        "it-IT": {
            name: "Nome",
            gender: "Sesso",
            age: "Eta",
            occupation: " Occupazione",
            bio: "Biografia",
            male: "maschio",
            female: "femmina",
            title: "Attore/Attrice id:",
        },
    };

    useEffect(() => {
        const fetchActorsById = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=${lang}`
                );
                const obj = await response.json();
                if (obj.success === false) {
                    setError("Nessun personaggio trovato");
                }

                const birthDay = obj.birthday;

                const result = age(birthDay);

                obj.age = result;

                setActorById(obj);
            } catch (error) {
                console.log(error);
                setError("Nessun personaggio trovato");
            }
        };
        fetchActorsById();
    }, [id, lang]);

    return (
        <>
            {!error && actorById ? (
                <div className="id-actor-container">
                    <h1>
                        {ChangeLanguagePerPage[lang].title} {id}-
                        {actorById.name}
                    </h1>

                    <figure>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${actorById.profile_path}`}
                            alt={actorById.name}
                        />
                    </figure>
                    <div className="info">
                        <p>
                            <strong>
                                {" "}
                                {ChangeLanguagePerPage[lang].gender}:
                            </strong>
                            {actorById.gender === 1 ? "female" : "male"}
                        </p>
                        <p>
                            <strong>
                                {" "}
                                {ChangeLanguagePerPage[lang].age}:{" "}
                                {actorById.age}
                            </strong>
                        </p>
                        <p>
                            <strong>
                                {" "}
                                {ChangeLanguagePerPage[lang].occupation}:
                            </strong>
                            {actorById.known_for_department}
                        </p>
                        <p className="bio">
                            <strong> {ChangeLanguagePerPage[lang].bio}:</strong>
                            {actorById.biography}
                        </p>
                    </div>
                </div>
            ) : (
                <div>{error && <div>{error}</div>}</div>
            )}
        </>
    );
};

const age = (birthDay) => {
    const birth = birthDay;
    const birthArray = birth.split("-");
    const year = birthArray[0];
    const todayYear = 2023;
    const age = todayYear - year;
    return age;
};

export default PersonPage;
