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
        <div className="actor-card-container">
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
        </div>
    );
};

export default PersonCard;
