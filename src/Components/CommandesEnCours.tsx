// CommandesEnCours.tsx
import React from 'react';

const CommandesEnCours: React.FC = () => {
    // Tableau de commandes statiques
    const commandesEnCours = [
        { id: 1, nom: "Commande 1", montant: 50 },
        { id: 2, nom: "Commande 2", montant: 70 },
        { id: 3, nom: "Commande 3", montant: 100 },
    ];

    return (
        <div>
            <h2>Commandes en Cours</h2>
            <ul>
                {/* Affichage des commandes */}
                {commandesEnCours.map(commande => (
                    <li key={commande.id}>
                        {commande.nom} - Montant: {commande.montant} €
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommandesEnCours;

