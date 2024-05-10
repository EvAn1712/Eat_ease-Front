import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import App from './Page/App';
import InfoPerso from "./Components/InfoPerso";
import Historique from './Components/ListGroup';
import Favoris from './Components/favoris';
import ProductCreationPage from './Components/CreateProduct';
import CommandesEnCours from "./Components/CommandesEnCours";
import PasserCommande from "./Components/PasserCommande";
import ListProduct from "./Components/ProductListAdmin";

const RoutesComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/info-perso" element={<InfoPerso />} />
                <Route path="/historique" element={<Historique />} />
                <Route path="/favoris" element={<Favoris />} />
                <Route path="/create-product" element={<ProductCreationPage />} />
                <Route path="/commandes-en-cours" element={<CommandesEnCours />} />
                <Route path="/passer-commande" element={<PasserCommande />} />
                <Route path="/list-product" element={<ListProduct/>} />
            </Routes>
        </Router>
    );
};

export default RoutesComponent;