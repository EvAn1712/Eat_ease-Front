// Routes.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import App from './Page/App';
import InfoPerso from "./Components/InfoPerso";
import Historique from './Components/ListGroup';
import ProductCreationPage from './Components/CreateProduct';
import CommandesEnCours from "./Components/CommandesEnCours";
import PasserCommande from "./Components/PasserCommande";
import ListProduct from "./Components/ProductListAdmin";

const RoutesComponent: React.FC = () => {
    return (
        <Router>
            <Header />
            <div style={{ marginBottom: '4rem' }}> {/* Ajoutez une marge en bas ici */}
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/info-perso" element={<InfoPerso />} />
                    <Route path="/historique" element={<Historique />} />
                    <Route path="/create-product" element={<ProductCreationPage />} />
                    <Route path="/commandes-en-cours" element={<CommandesEnCours />} />
                    <Route path="/passer-commande" element={<PasserCommande />} />
                    <Route path="/list-product" element={<ListProduct/>} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default RoutesComponent;