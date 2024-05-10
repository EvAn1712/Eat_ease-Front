function InfoPerso() {
    // Supposons que vous avez les informations personnelles de l'utilisateur
    const user = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        // Ajoutez d'autres informations personnelles si nécessaire
    };

    return (
        <div>
            <h1>Informations Personnelles</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <strong>Prénom:</strong> {user.firstName}
                </li>
                <li className="list-group-item">
                    <strong>Nom:</strong> {user.lastName}
                </li>
                <li className="list-group-item">
                    <strong>Email:</strong> {user.email}
                </li>
                {/* Ajoutez d'autres informations ici */}
            </ul>
        </div>
    );
}

export default InfoPerso;
