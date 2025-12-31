import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import DesktopMenu from "../../common/navigation/desktop-nav/DesktopMenu";
import MobileNavbar from "../../common/mobile-nav/MobileNavbar";
import { menuItemsData } from "../../common/mobile-nav/menuItemsData";
import LanguageToggle from "../LanguageToggle";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";
import { useLanguage } from "../../../context/LanguageContext";

function Header() {
    let location = useLocation();
    const { language } = useLanguage();
    const isArabic = language === "ar";
    const isHomePage = location.pathname === "/";
    const [isScrolled, setIsScrolled] = useState(false);

    // Add scroll detection for mobile header blur effect
    useEffect(() => {
        const handleScroll = () => {
            // Trigger blur effect after scrolling just 10px
            setIsScrolled(window.scrollY > 10);
        };
        
        // Check initial scroll position
        handleScroll();
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`site-header sofax-header-section ${!isHomePage ? "white-header" : ""} ${isScrolled ? "scrolled" : ""}`}
            id="sticky-menu"
            dir={isArabic ? "rtl" : "ltr"}
        >
            <div className="container">
                {/* Desktop Navigation - Like Foodics */}
                <nav 
                    className="navbar site-navbar d-none d-lg-flex" 
                    style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                        width: '100%',
                        padding: '10px 0'
                    }}
                >
                    {/* Logo + Menu grouped together - menu close to logo */}
                    <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '40px',
                        flexShrink: 0
                    }}>
                        {/* Logo Section */}
                        <div className="header-logo-section">
                            <HeaderLogo />
                        </div>

                        {/* Navigation Menu - Close to logo, not centered */}
                        <div className="menu-block-wrapper" style={{ 
                            flex: 'none',
                            justifyContent: 'flex-start'
                        }}>
                            <DesktopMenu />
                        </div>
                    </div>

                    {/* Right Section: Buttons + Language - pushed to the far end */}
                    <div 
                        className="header-right-section"
                        style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '15px',
                            marginInlineStart: 'auto'
                        }}
                    >
                        <HeaderButton />
                        <LanguageToggle />
                    </div>
                </nav>

                {/* Mobile Navigation */}
                <nav 
                    className="navbar site-navbar d-lg-none" 
                    style={{ 
                        display: 'grid', 
                        gridTemplateColumns: '1fr auto 1fr',
                        alignItems: 'center', 
                        width: '100%',
                        padding: '10px 0'
                    }}
                >
                    {/* Hamburger Menu */}
                    <div style={{ justifySelf: 'start' }}>
                        <MobileNavbar menuItemsData={menuItemsData} title="Menu" onePage={false} />
                    </div>

                    {/* Center Logo */}
                    <div style={{ justifySelf: 'center' }}>
                        <HeaderLogo />
                    </div>

                    {/* Language Toggle */}
                    <div style={{ justifySelf: 'end' }}>
                        <LanguageToggle />
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
