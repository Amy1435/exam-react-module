import { Link } from "react-router-dom";

const PersonCard = ({
    id,
    name,
    occupation,
    sex,
    popularity,
    works,
    imagePath,
}) => {
    return (
        <Link className="actor-card-container" to={`person/${id}`}>
            <figure>
                <img
                    src={`https://image.tmdb.org/t/p/w500${imagePath}`}
                    alt={name}
                />
            </figure>
            <div className="actor-info">
                <p>
                    <strong>Name:</strong> {name}
                </p>
                <p>
                    <strong>Occupation:</strong> {occupation}
                </p>
                <p>
                    <strong>Gender:</strong> {sex === 1 ? "female" : "male"}
                </p>
                <p>
                    <strong>Popularity:</strong> {popularity}
                </p>
                <ul>
                    <p>
                        <strong>Known for:</strong>
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
