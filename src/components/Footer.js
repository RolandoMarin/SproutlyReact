import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-auto" >
            <div className="container py-3">
                <div className="row align-items-center">
                    <div className="col-6">
                        <p className="mb-0" style={{ color: 'white', fontSize: '14px' }}>
                            © 2024 Sproutly™
                        </p>
                    </div>
                    {/* Brand name on right */}
                    <div className="col-6 text-end">
                        <span style={{ color: '#E0FFC2', fontSize: '16px' }}>Sproutly</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;