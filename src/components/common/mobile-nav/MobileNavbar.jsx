/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import NavItem from "./NavItem";

const MobileNavbar = ({ menuItemsData, title, onePage }) => {
	const depthLevel = 0;
	const [showMenu, setShowMenu] = useState(false);
	const { language, t } = useLanguage();
	const isArabic = language === "ar";

	function handleOpenMobileMenu() {
		setShowMenu((prev) => !prev);
	}

	const animationVariants = {
		initial: {
			x: isArabic ? "100%" : "-100%",
			transition: {
				duration: 0.3,
			},
		},
		animate: {
			x: showMenu ? 0 : (isArabic ? "100%" : "-100%"),
			transition: {
				duration: 0.3,
				ease: "easeInOut",
			},
		},
	};
	const overlayAnimationVariants = {
		initial: {
			opacity: 0,
			visibility: "hidden",
		},
		animate: () => {
			if (showMenu) {
				return {
					opacity: 1,
					visibility: "visible",
				};
			}
		},
	};

	return (
		<div className="mobile-nav-wrap">
			<div className="mobile-menu-trigger" onClick={handleOpenMobileMenu}>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
					<path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
					<path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
				</svg>
			</div>
			<motion.nav 
				className={`mobile-navbar ${isArabic ? 'rtl' : ''}`} 
				variants={animationVariants} 
				initial="initial" 
				animate="animate"
				style={{ 
					left: isArabic ? 'auto' : 0, 
					right: isArabic ? 0 : 'auto',
					pointerEvents: showMenu ? 'auto' : 'none'
				}}
			>
					<div className="mobile-menu-head">
						<div className="mobile-menu-head--title">{t("nav.home") ? "Menu" : title}</div>
						<div className="mobile-menu-head--close" onClick={() => setShowMenu(false)}>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
								<path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
							</svg>
						</div>
					</div>

					<ul>
						{menuItemsData.map((menu, index) => {
							return (
								<NavItem
									items={menu}
									key={index}
									depthLevel={depthLevel}
									showMenu={showMenu}
									setShowMenu={setShowMenu}
									onePage={onePage}
								/>
							);
						})}
					</ul>
					
					<div className="mobile-menu-actions">
						{isArabic ? (
							<>
								<a href="/sign-in" className="mobile-menu-btn mobile-menu-btn-secondary" onClick={() => setShowMenu(false)}>
									{t("nav.signIn")}
								</a>
								<a href="/sign-up" className="mobile-menu-btn mobile-menu-btn-primary" onClick={() => setShowMenu(false)}>
									{t("nav.signUp")}
								</a>
							</>
						) : (
							<>
								<a href="/sign-up" className="mobile-menu-btn mobile-menu-btn-primary" onClick={() => setShowMenu(false)}>
									{t("nav.signUp")}
								</a>
								<a href="/sign-in" className="mobile-menu-btn mobile-menu-btn-secondary" onClick={() => setShowMenu(false)}>
									{t("nav.signIn")}
								</a>
							</>
						)}
					</div>
				</motion.nav>

			<motion.div
				initial="initial"
				animate="animate"
				variants={overlayAnimationVariants}
				className="mobile-nav--overlay"
				onClick={handleOpenMobileMenu}
			></motion.div>
		</div>
	);
};

export default MobileNavbar;
