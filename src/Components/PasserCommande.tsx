// PasserCommande.tsx
import React, { useState } from 'react';

const PasserCommande: React.FC = () => {
    const [produit, setProduit] = useState('');
    const [quantite, setQuantite] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Logique pour soumettre la commande
        console.log('Commande soumise:', { produit, quantite });
        // Réinitialisation des champs après soumission
        setProduit('');
        setQuantite('');
    };

    return (
        <div>
            <h2>Passer une Commande</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="produit">Produit:</label>
                    <input
                        type="text"
                        id="produit"
                        value={produit}
                        onChange={(e) => setProduit(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="quantite">Quantité:</label>
                    <input
                        type="number"
                        id="quantite"
                        value={quantite}
                        onChange={(e) => setQuantite(e.target.value)}
                    />
                </div>
                <button type="submit">Passer la Commande</button>
            </form>
        </div>
    );
};

export default PasserCommande;
