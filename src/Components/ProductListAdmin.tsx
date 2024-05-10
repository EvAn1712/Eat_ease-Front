import React, { useState } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    listIdAllergenes: number[];
    typeProduit: string;
    listIdMenu: number[];
}

const productList: Product[] = [
    {
        id: 1,
        name: 'Pâtes bolognaises',
        price: 3.5,
        description: 'Délicieuses pâtes accompagnées d\'une sauce bolognaise.',
        listIdAllergenes: [1, 3],
        typeProduit: 'Pâtes',
        listIdMenu: [1, 2]
    },
    {
        id: 2,
        name: 'Salade César',
        price: 4.0,
        description: 'Salade fraîche avec du poulet grillé, des croûtons, du parmesan et de la sauce César.',
        listIdAllergenes: [2],
        typeProduit: 'Salades',
        listIdMenu: [1]
    },
    {
        id: 3,
        name: 'Tartiflette',
        price: 5.0,
        description: 'Plat traditionnel savoyard à base de pommes de terre, de lardons, d\'oignons et de reblochon fondu.',
        listIdAllergenes: [1, 4],
        typeProduit: 'Plats chauds',
        listIdMenu: [2]
    },
    // Ajoutez d'autres produits ici si nécessaire
];

const ProductList: React.FC = () => {
    const [quantities, setQuantities] = useState<{[key: number]: number}>({});

    const handleIncrement = (productId: number) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: (prevQuantities[productId] || 0) + 1
        }));
    };

    const handleDecrement = (productId: number) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: Math.max((prevQuantities[productId] || 0) - 1, 0)
        }));
    };

    return (
        <div>
            <h2>Liste des produits</h2>
            <ul>
                {productList.map(product => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Prix: {product.price} €</p>
                        <p>Description: {product.description}</p>
                        <p>Type de produit: {product.typeProduit}</p>
                        <p>Allergènes: {product.listIdAllergenes.join(', ')}</p>
                        <p>Menus: {product.listIdMenu.join(', ')}</p>
                        <button onClick={() => console.log(`Modifier le produit ${product.id}`)}>Modifier</button>
                        <br/><br/>
                        <button onClick={() => console.log(`Supprimer le produit ${product.id}`)}>Supprimer</button>
                        <br/><br/>
                        <div>
                            Quantité en stock:
                            <button onClick={() => handleDecrement(product.id)}>-</button>
                            {quantities[product.id] || 0}
                            <button onClick={() => handleIncrement(product.id)}>+</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;