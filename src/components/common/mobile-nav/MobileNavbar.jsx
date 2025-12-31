/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import NavItem from "./NavItem";
import Logo from "../../../assets/images/logo/blue.png";

const MobileNavbar = ({ menuItemsData, title, onePage }) => {
	const depthLevel = 0;
	const [showMenu, setShowMenu] = useState(false);
	const { language, t } = useLanguage();
	const isArabic = language === "ar";

	function handleOpenMobileMenu() {
		setShowMenu((prev) => !prev);
	}

	// Slide from left for Arabic, right for English (like Foodics)
	const animationVariants = {
		initial: {
			x: isArabic ? "-100%" : "100%",
			transition: {
				duration: 0.3,
			},
		},
		animate: {
			x: showMenu ? 0 : (isArabic ? "-100%" : "100%"),
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
			{/* Hamburger Button */}
			<div className="mobile-menu-trigger" onClick={handleOpenMobileMenu}>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
					<path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
					<path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
				</svg>
			</div>

			{showMenu && (
				<motion.nav 
					className="mobile-navbar"
					variants={animationVariants} 
					initial="initial" 
					animate="animate" 
					style={{ 
						position: 'fixed',
						top: 0,
						left: isArabic ? 0 : 'auto',
						right: isArabic ? 'auto' : 0,
						width: '300px',
						height: '100vh',
						backgroundColor: '#fff',
						zIndex: 9999,
						boxShadow: isArabic ? '5px 0 15px rgba(0,0,0,0.1)' : '-5px 0 15px rgba(0,0,0,0.1)',
						overflowY: 'auto',
						direction: 'ltr'
					}}
				>
					{/* Header with Logo and X close - Like Foodics */}
					<div style={{ 
						display: 'flex', 
						justifyContent: 'space-between', 
						alignItems: 'center',
						padding: '20px',
						borderBottom: '1px solid #eee'
					}}>
						{/* Logo - Always on left like Foodics */}
						<Link to="/" onClick={() => setShowMenu(false)} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
							<img src={Logo} alt="Ripplefy" style={{ height: '35px', width: 'auto' }} />
							<span style={{ 
								fontSize: '18px', 
								fontWeight: '700', 
								color: '#0e1e3f',
								fontFamily: isArabic ? "'IBM Plex Sans Arabic', sans-serif" : "'Arimo', sans-serif"
							}}>
								{isArabic ? "ريبلفاي" : "Ripplefy"}
							</span>
						</Link>

						{/* Close X Button - Always on right like Foodics */}
						<div 
							onClick={() => setShowMenu(false)}
							style={{ cursor: 'pointer' }}
						>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M18 6L6 18" stroke="#0e1e3f" strokeWidth="2" strokeLinecap="round"/>
								<path d="M6 6L18 18" stroke="#0e1e3f" strokeWidth="2" strokeLinecap="round"/>
							</svg>
						</div>
					</div>

					{/* Menu Items */}
					<ul style={{ 
						listStyle: 'none', 
						padding: '20px', 
						margin: 0,
						textAlign: 'center'
					}}>
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
					
					{/* Action Buttons - Match desktop header buttons */}
					<div style={{ 
						padding: '20px',
						borderTop: '1px solid #eee',
						marginTop: 'auto'
					}}>
						{/* Get Demo button - filled with animation like desktop */}
						<a 
							href="#demo-form"
							onClick={(e) => {
								e.preventDefault();
								setShowMenu(false);
								const demoSection = document.getElementById('demo-form');
								if (demoSection) {
									demoSection.scrollIntoView({ behavior: 'smooth' });
								} else {
									window.location.href = '/#demo-form';
								}
							}}
							className="demo-btn-animated"
							style={{
								display: 'block',
								backgroundColor: '#0e1e3f',
								color: '#fff',
								padding: '14px 24px',
								borderRadius: '50px',
								fontWeight: '600',
								fontSize: '15px',
								textDecoration: 'none',
								textAlign: 'center',
								marginBottom: '12px',
								transition: 'transform 0.3s ease, box-shadow 0.3s ease',
								border: '2px solid #0e1e3f',
								position: 'relative',
								overflow: 'hidden',
								cursor: 'pointer'
							}}
						>
							{t("nav.getDemo")}
						</a>
						{/* Sign In button - navy border, turquoise hover like desktop */}
						<Link 
							to="/sign-in"
							onClick={() => setShowMenu(false)}
							style={{
								display: 'block',
								backgroundColor: 'transparent',
								color: '#0e1e3f',
								padding: '14px 24px',
								borderRadius: '50px',
								fontWeight: '600',
								fontSize: '15px',
								textDecoration: 'none',
								border: '2px solid #0e1e3f',
								textAlign: 'center',
								transition: 'all 0.3s ease'
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.backgroundColor = '#40E0D0';
								e.currentTarget.style.borderColor = '#0e1e3f';
								e.currentTarget.style.color = '#fff';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.backgroundColor = 'transparent';
								e.currentTarget.style.borderColor = '#0e1e3f';
								e.currentTarget.style.color = '#0e1e3f';
							}}
						>
							{t("nav.signIn")}
						</Link>
					</div>
				</motion.nav>
			)}

			{/* Overlay */}
			<motion.div
				initial="initial"
				animate="animate"
				variants={overlayAnimationVariants}
				className="mobile-nav--overlay"
				onClick={handleOpenMobileMenu}
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					backgroundColor: 'rgba(0,0,0,0.5)',
					zIndex: 9998,
					display: showMenu ? 'block' : 'none'
				}}
			></motion.div>
		</div>
	);
};

export default MobileNavbar;
