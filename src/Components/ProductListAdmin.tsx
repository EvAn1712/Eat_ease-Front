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

const ProductListAdmin: React.FC = () => {
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

    const styles = {
        productListPage: {
            width: '80%',
            margin: '0 auto',
            padding: '2rem 0',
        },
        productList: {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
        },
        productItem: {
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '1rem',
        },
        fieldTitle: {
            fontWeight: 'bold',
            textDecoration: 'underline',
        },
        incrementButton: {
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            color: '#fff',
            backgroundColor: '#007bff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            margin: '0.5rem 0',
        },
        decrementButton: {
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            color: '#fff',
            backgroundColor: '#dc3545',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            margin: '0.5rem 0',
        },
    };

    return (
        <div style={styles.productListPage}>
            <h2>Liste des produits</h2>
            <div style={styles.productList}>
                {productList.map(product => (
                    <div key={product.id} style={styles.productItem}>
                        <h3>{product.name}</h3>
                        <p><span style={styles.fieldTitle}>Prix:</span> {product.price} €</p>
                        <p><span style={styles.fieldTitle}>Description:</span> {product.description}</p>
                        <p><span style={styles.fieldTitle}>Type de produit:</span> {product.typeProduit}</p>
                        <p><span style={styles.fieldTitle}>Allergènes:</span> {product.listIdAllergenes.join(', ')}</p>
                        <p><span style={styles.fieldTitle}>Menus:</span> {product.listIdMenu.join(', ')}</p>
                        <button onClick={() => console.log(`Modifier le produit ${product.id}`)} style={styles.incrementButton}>Modifier</button>
                        <button onClick={() => console.log(`Supprimer le produit ${product.id}`)} style={styles.decrementButton}>Supprimer</button>
                        <div>
                            Quantité en stock:
                            <button onClick={() => handleDecrement(product.id)}>-</button>
                            {quantities[product.id] || 0}
                            <button onClick={() => handleIncrement(product.id)}>+</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListAdmin;