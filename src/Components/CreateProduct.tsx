import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface ProductData {
    name: string;
    price: string;
    description: string;
    allergens: string[];
    productType: string;
    menuIds: string[];
    image: File | null;
}

const ProductCreationPage: React.FC = () => {
    const [productData, setProductData] = useState<ProductData>({
        name: '',
        price: '',
        description: '',
        allergens: [],
        productType: '',
        menuIds: [],
        image: null,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const imageFile = e.target.files ? e.target.files[0] : null;
        setProductData({ ...productData, image: imageFile });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', productData.name);
            formData.append('price', productData.price);
            formData.append('description', productData.description);
            formData.append('allergens', JSON.stringify(productData.allergens));
            formData.append('productType', productData.productType);
            formData.append('menuIds', JSON.stringify(productData.menuIds));
            if (productData.image) {
                formData.append('image', productData.image);
            }

            await axios.post('/api/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setProductData({
                name: '',
                price: '',
                description: '',
                allergens: [],
                productType: '',
                menuIds: [],
                image: null,
            });

            alert('Produit créé avec succès !');
        } catch (error) {
            console.error('Erreur lors de la création du produit :', error);
            alert('Une erreur est survenue lors de la création du produit.');
        }
    };

    const styles = {
        productCreationPage: {
            width: '80%',
            margin: '0 auto',
            padding: '2rem 0',
        },
        productForm: {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
        },
        formGroup: {
            display: 'flex',
            flexDirection: 'column',
        },
        formControl: {
            padding: '0.5rem',
            fontSize: '1rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
        },
        submitButton: {
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            color: '#fff',
            backgroundColor: '#007bff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        },
    };

    return (
        <div style={styles.productCreationPage}>
            <h2>Créer un produit</h2>
            <form onSubmit={handleSubmit} style={styles.productForm}>
                <div style={styles.formGroup}>
                    <label htmlFor="name">Nom du produit:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={productData.name}
                        onChange={handleChange}
                        placeholder="Entrez le nom du produit"
                        style={styles.formControl}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="price">Prix:</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={productData.price}
                        onChange={handleChange}
                        placeholder="Entrez le prix du produit"
                        style={styles.formControl}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={productData.description}
                        onChange={handleChange}
                        placeholder="Entrez la description du produit"
                        style={styles.formControl}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="allergens">Allergènes:</label>
                    <input
                        type="text"
                        id="allergens"
                        name="allergens"
                        value={productData.allergens.join(', ')}
                        onChange={(e) => setProductData({ ...productData, allergens: e.target.value.split(', ') })}
                        placeholder="Entrez les allergènes, séparés par des virgules"
                        style={styles.formControl}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="productType">Type de produit:</label>
                    <input
                        type="text"
                        id="productType"
                        name="productType"
                        value={productData.productType}
                        onChange={handleChange}
                        placeholder="Entrez le type de produit"
                        style={styles.formControl}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="menuIds">Menus:</label>
                    <input
                        type="text"
                        id="menuIds"
                        name="menuIds"
                        value={productData.menuIds.join(', ')}
                        onChange={(e) => setProductData({ ...productData, menuIds: e.target.value.split(', ') })}
                        placeholder="Entrez les IDs de menu, séparés par des virgules"
                        style={styles.formControl}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="image">Image:</label>
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={styles.formControl}
                    />
                </div>
                <div>
                    <button type="submit" style={styles.submitButton}>Créer le produit</button>
                </div>
            </form>
        </div>
    );
};

export default ProductCreationPage;