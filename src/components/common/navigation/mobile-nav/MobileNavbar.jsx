import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuItemsData } from "../menuItemsData";

function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button
                className="mobile-menu-trigger d-lg-none"
                onClick={toggleMenu}
                aria-label="Toggle navigation"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`mobile-menu-overlay ${isOpen ? "active" : ""}`} onClick={toggleMenu}></div>

            <div className={`mobile-menu-container ${isOpen ? "active" : ""}`}>
                <div className="mobile-menu-header">
                    <div className="brand-logo">
                        <Link to="/" onClick={toggleMenu}>
                            <img src="/assets/images/logo/logo-dark.png" alt="Logo" className="light-version-logo" style={{ maxWidth: '120px' }} />
                        </Link>
                    </div>
                    <button className="mobile-menu-close" onClick={toggleMenu}>
                        &times;
                    </button>
                </div>
                <ul className="mobile-menu-list">
                    {menuItemsData.map((item, index) => (
                        <li key={index} className="mobile-nav-item">
                            <Link to={item.url} className="mobile-nav-link" onClick={toggleMenu}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default MobileNavbar;
