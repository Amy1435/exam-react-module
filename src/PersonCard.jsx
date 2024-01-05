import { Link } from "react-router-dom";
import LanguageContext from "./LanguageContext";
import { useContext } from "react";

const PersonCard = ({
    id,
    name,
    occupation,
    sex,
    popularity,
    works,
    imagePath,
}) => {
    const lang = useContext(LanguageContext);

    const ChangeLanguageCard = {
        "en-US": {
            name: "Name",
            occupation: " Occupation",
            gender: "Gender",
            popularity: "Popularity",
            ["known-for"]: "Known for",
            male: "male",
            female: "female",
        },
        "it-IT": {
            name: "Nome",
            occupation: " Occupazione",
            gender: "Sesso",
            popularity: "Popolarita'",
            ["known-for"]: "Conosciuto per",
            male: "maschio",
            female: "femmina",
        },
    };
    return (
        <Link className="actor-card-container" to={`../person/${id}`}>
            <div className="name">
                <p>{name}</p>
            </div>

            <figure>
                <img
                    src={`https://image.tmdb.org/t/p/w500${imagePath}`}
                    alt={name}
                />
            </figure>
            <div className="actor-info">
                <p>
                    <strong> {ChangeLanguageCard[lang].occupation}:</strong>{" "}
                    {occupation}
                </p>
                <p>
                    <strong>{ChangeLanguageCard[lang].gender}:</strong>{" "}
                    {sex === 1
                        ? ChangeLanguageCard[lang].female
                        : ChangeLanguageCard[lang].male}
                </p>
                <p>
                    <strong>{ChangeLanguageCard[lang].popularity}:</strong>{" "}
                    {popularity}
                </p>
                <ul>
                    <p>
                        <strong>
                            {ChangeLanguageCard[lang]["known-for"]}:
                        </strong>
                    </p>
                    {works.map((work, i) => (
                        <li key={`work${i}`}>{work.title}</li>
                    ))}
                </ul>
            </div>
        </Link>
    );
};

export default PersonCard;
