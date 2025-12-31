import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo/blue.png";
import { useLanguage } from "../../../context/LanguageContext";

function HeaderLogo() {
    const { language } = useLanguage();
    const brandName = language === "ar" ? "ريبلفاي" : "Ripplefy";
    
    return (
        <div className="brand-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                <img src={Logo} alt="Ripplefy Logo" className="light-version-logo" style={{ height: '50px', width: 'auto' }} />
                <span style={{ 
                    fontSize: '26px', 
                    fontWeight: '700', 
                    color: '#0e1e3f',
                    fontFamily: language === "ar" ? "'Tajawal', 'Inter', sans-serif" : "'Inter', sans-serif"
                }}>
                    {brandName}
                </span>
            </Link>
        </div>
    );
}

export default HeaderLogo;
