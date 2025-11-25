import { useLocation } from "react-router-dom";
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

    return (
        <header
            className={`site-header sofax-header-section site-header--menu-center  ${location.pathname !== "/" ? "dark-bg inner-header" : "bg-white"
                } `}
            id="sticky-menu"
        >
            <div className="container">
                {/* Desktop Navigation */}
                <nav className="navbar site-navbar d-none d-lg-flex" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
                    {/* Left side: Logo (EN) or Language Toggle + Buttons (AR) */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flex: '0 0 auto', zIndex: 10, minWidth: 'fit-content' }}>
                        {isArabic ? (
                            <>
                                <LanguageToggle />
                                <HeaderButton />
                            </>
                        ) : (
                            <div style={{ marginRight: 0 }}>
                                <HeaderLogo />
                            </div>
                        )}
                    </div>

                    {/* Center: Menu (always centered) */}
                    <div className="menu-block-wrapper" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
                        <DesktopMenu />
                    </div>

                    {/* Right side: Logo (AR) or Language Toggle + Buttons (EN) */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flex: '0 0 auto', zIndex: 10, minWidth: 'fit-content' }}>
                        {isArabic ? (
                            <div style={{ marginRight: 0 }}>
                                <HeaderLogo />
                            </div>
                        ) : (
                            <>
                                <HeaderButton />
                                <LanguageToggle />
                            </>
                        )}
                    </div>
                </nav>

                {/* Mobile Navigation */}
                <nav className="navbar site-navbar d-lg-none" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
                    {/* Arabic: Language button (left) | English: Menu button (left) */}
                    <div style={{ flex: '0 0 auto', zIndex: 10 }}>
                        {isArabic ? (
                            <LanguageToggle />
                        ) : (
                            <MobileNavbar menuItemsData={menuItemsData} title="Menu" onePage={false} />
                        )}
                    </div>

                    {/* Center: Logo (always centered on mobile) */}
                    <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
                        <HeaderLogo />
                    </div>

                    {/* Arabic: Menu button (right) | English: Language button (right) */}
                    <div style={{ flex: '0 0 auto', zIndex: 10 }}>
                        {isArabic ? (
                            <MobileNavbar menuItemsData={menuItemsData} title="Menu" onePage={false} />
                        ) : (
                            <LanguageToggle />
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
