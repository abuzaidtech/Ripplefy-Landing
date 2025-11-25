import React from "react";
import { useLanguage } from "../../context/LanguageContext";

function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="sofax-language-toggle"
            aria-label="Toggle Language"
            title={language === "en" ? "Switch to Arabic" : "Switch to English"}
        >
            <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="language-icon"
            >
                <path
                    d="M12.913 17H20L18.089 14.188M12.913 17H11.005M12.913 17L15.428 13.428M18.089 14.188L15.428 13.428M18.089 14.188L19 12M15.428 13.428L13.5 11M11 11L13.5 11M13.5 11L14.5 9M13.5 11L10.5 3.00002L7 11"
                    stroke="#FF6B35"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M12 21H6C5.44772 21 5 20.5523 5 20V4C5 3.44772 5.44772 3 6 3H18C18.5523 3 19 3.44772 19 4V9"
                    stroke="#4169E1"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                />
            </svg>
            <span className="language-text">{language === "en" ? "ع" : "EN"}</span>
        </button>
    );
}

export default LanguageToggle;
