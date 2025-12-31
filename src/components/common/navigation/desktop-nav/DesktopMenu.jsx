import React from "react";
import { Link, useLocation } from "react-router-dom";
import { menuItemsData } from "../menuItemsData";
import { useLanguage } from "../../../../context/LanguageContext";

function DesktopMenu() {
    const location = useLocation();
    const { t, language } = useLanguage();
    
    // Reverse menu order for Arabic (like Foodics reference images 4,5)
    const displayMenuItems = language === 'ar' ? [...menuItemsData].reverse() : menuItemsData;

    return (
        <ul className="site-menu-main">
            {displayMenuItems.map((item, index) => (
                <li key={index} className="nav-item">
                    <Link
                        to={item.url}
                        className={`nav-link-item ${location.pathname === item.url ? "active" : ""
                            }`}
                    >
                        {t(item.titleKey)}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default DesktopMenu;
