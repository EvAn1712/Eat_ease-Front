// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header style={{ backgroundColor: 'red', color: '#fff', padding: '1rem' }}>
            <nav>
                <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', padding: 0 }}>
                    <li style={{ margin: '0 1rem' }}><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Accueil</Link></li>
                    <li style={{ margin: '0 1rem' }}><Link to="/info-perso" style={{ color: '#fff', textDecoration: 'none' }}>Info Perso</Link></li>
                    <li style={{ margin: '0 1rem' }}><Link to="/historique" style={{ color: '#fff', textDecoration: 'none' }}>Historique</Link></li>
                    <li style={{ margin: '0 1rem' }}><Link to="/create-product" style={{ color: '#fff', textDecoration: 'none' }}>Créer un produit</Link></li>
                    <li style={{ margin: '0 1rem' }}><Link to="/commandes-en-cours" style={{ color: '#fff', textDecoration: 'none' }}>Commandes en Cours</Link></li>
                    <li style={{ margin: '0 1rem' }}><Link to="/passer-commande" style={{ color: '#fff', textDecoration: 'none' }}>Passer Commande</Link></li>
                    <li style={{ margin: '0 1rem' }}><Link to="/list-product" style={{ color: '#fff', textDecoration: 'none' }}>Liste des produits</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;