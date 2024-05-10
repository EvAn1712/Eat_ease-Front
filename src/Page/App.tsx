// App.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <div>
            <h1>Accueil</h1>
            <ul>
                <li><Link to="/info-perso">Info Perso</Link></li>
                <li><Link to="/historique">Historique</Link></li>
                <li><Link to="/favoris">Favoris</Link></li>
                <li><Link to="/create-product">Créer un produit</Link></li>
                <li><Link to="/commandes-en-cours">Commandes en Cours</Link></li>
                <li><Link to="/passer-commande">Passer Commande</Link></li>
            </ul>
        </div>
    );
};

export default App;
