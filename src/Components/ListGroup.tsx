function Historique() {
    const commandes = [
        { id: 1, nom: 'Commande 1', contenu: 'Contenu de la commande 1', prix: '10€', date: '2024-03-30' },
        { id: 2, nom: 'Commande 2', contenu: 'Contenu de la commande 2', prix: '15€', date: '2024-03-25' },
        { id: 3, nom: 'Commande 3', contenu: 'Contenu de la commande 3', prix: '20€', date: '2024-03-20' }
    ];

    return (
        <div className="list-group">
            <h1>Historique de commande</h1>
            {commandes.length !== 0 ? (
                commandes.map(commande => (
                    <a key={commande.id} href="#" className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{commande.nom}</h5>
                            <small className="text-body-secondary">{commande.date}</small>
                        </div>
                        <p className="mb-1">{commande.contenu}</p>
                        <small className="text-body-secondary">Prix: {commande.prix}</small>
                    </a>
                ))
            ) : (
                <p>Vous n'avez jamais passé commande</p>
            )}
        </div>
    );
}


export default Historique;
