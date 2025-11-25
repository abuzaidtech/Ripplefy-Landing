import React from "react";
import { Link, useLocation } from "react-router-dom";
import { menuItemsData } from "../menuItemsData";
import { useLanguage } from "../../../../context/LanguageContext";

function DesktopMenu() {
    const location = useLocation();
    const { t } = useLanguage();

    return (
        <ul className="site-menu-main">
            {menuItemsData.map((item, index) => (
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
