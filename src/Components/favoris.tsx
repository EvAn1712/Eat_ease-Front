import React, { useState } from 'react';

// Component pour afficher les favoris
function Favoris() {
    // Supposons que vous avez une liste de menus favoris pour l'utilisateur
    const [favoris, setFavoris] = useState([
        { id: 1, nom: 'Menu Favori 1', description: 'Description du Menu Favori 1' },
        { id: 2, nom: 'Menu Favori 2', description: 'Description du Menu Favori 2' },
        { id: 3, nom: 'Menu Favori 3', description: 'Description du Menu Favori 3' }
    ]);

    return (
        <div>
            <h1>Menus Favoris</h1>
            <ul className="list-group">
                {favoris.map(menu => (
                    <li key={menu.id} className="list-group-item">
                        <strong>{menu.nom}</strong>
                        <p>{menu.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Favoris;
