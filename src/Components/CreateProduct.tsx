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

            // Réinitialiser le formulaire après la création réussie
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

    return (
        <div>
            <h2>Créer un produit</h2>
            <form onSubmit={handleSubmit}>
                <label>Nom du produit:</label>
                <input
                    type="text"
                    name="name"
                    value={productData.name}
                    onChange={handleChange}
                />
                <label>Prix:</label>
                <input
                    type="text"
                    name="price"
                    value={productData.price}
                    onChange={handleChange}
                />
                <label>Description:</label>
                <textarea
                    name="description"
                    value={productData.description}
                    onChange={handleChange}
                />
                <label>Allergènes:</label>
                <input
                    type="text"
                    name="allergens"
                    value={productData.allergens.join(', ')}
                    onChange={(e) => setProductData({ ...productData, allergens: e.target.value.split(', ') })}
                />
                <label>Type de produit:</label>
                <input
                    type="text"
                    name="productType"
                    value={productData.productType}
                    onChange={handleChange}
                />
                <label>Menus:</label>
                <input
                    type="text"
                    name="menuIds"
                    value={productData.menuIds.join(', ')}
                    onChange={(e) => setProductData({ ...productData, menuIds: e.target.value.split(', ') })}
                />
                <label>Image:</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />
                <button type="submit">Créer le produit</button>
            </form>
        </div>
    );
};

export default ProductCreationPage;
