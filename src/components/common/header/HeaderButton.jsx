import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";

function HeaderButton() {
	const { t, isRTL } = useLanguage();
	
	// Scroll to demo form
	const scrollToDemo = (e) => {
		e.preventDefault();
		const demoSection = document.getElementById('demo-form');
		if (demoSection) {
			demoSection.scrollIntoView({ behavior: 'smooth' });
		} else {
			// If not on home page, navigate to home then scroll
			window.location.href = '/#demo-form';
		}
	};
	
	return (
		<div 
			className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex align-items-center gap-3"
			style={{ 
				display: 'flex',
				alignItems: 'center',
				gap: '12px'
			}}
		>
			{/* Get Demo button - comes FIRST, filled with animation, no color change on hover */}
			<a 
				href="#demo-form"
				onClick={scrollToDemo}
				className="sofax-default-btn pill header-btn demo-btn-animated" 
				style={{
					backgroundColor: '#0e1e3f',
					color: '#fff',
					padding: '12px 24px',
					borderRadius: '50px',
					fontWeight: '600',
					fontSize: '14px',
					textDecoration: 'none',
					whiteSpace: 'nowrap',
					border: 'none',
					transition: 'transform 0.3s ease, box-shadow 0.3s ease',
					position: 'relative',
					overflow: 'hidden',
					cursor: 'pointer'
				}}
				onMouseEnter={(e) => {
					e.currentTarget.style.color = '#fff';
					e.currentTarget.style.backgroundColor = '#0e1e3f'; // Ensure bg stays dark
				}}
			>
				<span style={{ position: 'relative', zIndex: 1, color: '#fff' }}>
					{t('nav.getDemo')}
				</span>
			</a>
			{/* Sign In button - comes SECOND, navy border + navy text, hover: turquoise bg + white text */}
			<Link 
				className="header-login-btn" 
				to="/sign-in"
				style={{
					backgroundColor: 'transparent',
					color: '#0e1e3f',
					padding: '12px 24px',
					borderRadius: '50px',
					fontWeight: '600',
					fontSize: '14px',
					textDecoration: 'none',
					whiteSpace: 'nowrap',
					border: '2px solid #0e1e3f',
					transition: 'all 0.3s ease'
				}}
				onMouseEnter={(e) => {
					e.currentTarget.style.backgroundColor = '#40E0D0';
					e.currentTarget.style.borderColor = '#40E0D0';
					e.currentTarget.style.color = '#fff';
				}}
				onMouseLeave={(e) => {
					e.currentTarget.style.backgroundColor = 'transparent';
					e.currentTarget.style.borderColor = '#0e1e3f';
					e.currentTarget.style.color = '#0e1e3f';
				}}
			>
				{t('nav.signIn')}
			</Link>
		</div>
	);
}

export default HeaderButton;
