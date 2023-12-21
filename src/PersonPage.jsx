import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const apiKey = import.meta.env.VITE_API_KEY;

const PersonPage = () => {
    const { id } = useParams();

    const [error, setError] = useState("");
    const [actorById, setActorById] = useState();
    useEffect(() => {
        const fetchActorsById = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}`
                );
                const obj = await response.json();
                if (obj.success === false) {
                    setError("Nessun personaggio trovato");
                }
                console.log(obj);
                setActorById(obj);
            } catch (error) {
                console.log(error);
                setError("Nessun personaggio trovato");
            }
        };
        fetchActorsById();
    }, [id]);

    return (
        <>
            {!error && actorById ? (
                <div className="id-actor-container">
                    <h1>Actor/Actress id: {id}</h1>

                    <figure>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${actorById.profile_path}`}
                            alt={actorById.name}
                        />
                    </figure>
                    <div className="info">
                        <p>
                            <strong>Name:</strong>
                            {actorById.name}
                        </p>
                        <p>
                            <strong>Gender:</strong>
                            {actorById.gender === 1 ? "female" : "male"}
                        </p>
                        <p>
                            <strong>Age:</strong>
                        </p>
                        <p>
                            <strong>Profession:</strong>
                            {actorById.known_for_department}
                        </p>
                        <p className="bio">
                            <strong>Bio:</strong>
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

export default PersonPage;
