// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{
            backgroundColor: 'red',
            color: '#fff',
            padding: '1rem',
            textAlign: 'center',
            width: '100%',
            position: 'relative',
            bottom: 0,
            left: 0,
        }}>
            <p>Copyright © 2024. Tous droits réservés.</p>
        </footer>
    );
};

export default Footer;