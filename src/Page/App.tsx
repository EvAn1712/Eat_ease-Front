// App.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const App: React.FC = () => {
    return (
        <div>
            <div>
                <h1>Accueil</h1>
                <ul>
                    <li><Link to="/info-perso">Info Perso</Link></li>
                    <li><Link to="/historique">Historique</Link></li>
                    <li><Link to="/create-product">Créer un produit</Link></li>
                    <li><Link to="/commandes-en-cours">Commandes en Cours</Link></li>
                    <li><Link to="/passer-commande">Passer Commande</Link></li>
                    <li><Link to="/list-product">Liste des produits</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default App;
