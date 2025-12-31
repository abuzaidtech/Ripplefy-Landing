import { Link } from "react-router-dom";
import { useLanguage } from "../../../../context/LanguageContext";
import WhiteLogo from "../../../../assets/images/logo/white.png";

function SocialIcon({ href, children }) {
	return (
		<a 
			href={href} 
			target="_blank" 
			rel="noreferrer"
			style={{
				width: '44px',
				height: '44px',
				borderRadius: '50%',
				border: '1px solid rgba(255,255,255,0.3)',
				backgroundColor: 'transparent',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				transition: 'all 0.3s ease'
			}}
			onMouseEnter={(e) => {
				e.currentTarget.style.backgroundColor = '#40E0D0';
				e.currentTarget.style.borderColor = '#40E0D0';
				const svg = e.currentTarget.querySelector('svg');
				if (svg) svg.style.fill = '#0e1e3f';
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.backgroundColor = 'transparent';
				e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
				const svg = e.currentTarget.querySelector('svg');
				if (svg) svg.style.fill = '#fff';
			}}
		>
			{children}
		</a>
	);
}

// Footer Link Component
function FooterLink({ to, children }) {
	return (
		<li style={{ marginBottom: '12px' }}>
			<Link 
				to={to} 
				style={{ 
					color: 'rgba(255,255,255,0.7)', 
					fontSize: '15px', 
					textDecoration: 'none', 
					transition: 'color 0.3s' 
				}}
				onMouseEnter={(e) => e.currentTarget.style.color = '#40E0D0'}
				onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
			>
				{children}
			</Link>
		</li>
	);
}

function Footer() {
	const { t, isRTL, language } = useLanguage();
	const brandName = language === "ar" ? "ريبلفاي" : "Ripplefy";

	// Column style based on RTL - centered on mobile
	const columnStyle = { 
		textAlign: isRTL ? 'right' : 'left'
	};

	return (
		<footer 
			className="sofax-footer-section" 
			style={{ 
				backgroundColor: '#0e1e3f',
				direction: isRTL ? 'rtl' : 'ltr'
			}}
		>
			{/* Main Footer Content */}
			<div className="container">
				<div className="footer-content-wrapper" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
					<div className="row" style={{ flexDirection: 'row' }}>
						{/* Logo, Brand Name and Description Column */}
						<div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-4 footer-brand-col">
							<div className="footer-logo-section" style={columnStyle}>
								{/* White Logo */}
								<Link to="/" className="footer-logo-link" style={{ display: 'block', marginBottom: '15px', textDecoration: 'none' }}>
									<img 
										src={WhiteLogo} 
										alt="Ripplefy" 
										className="footer-logo-img"
										style={{ 
											height: '80px', 
											width: 'auto',
											display: 'block'
										}} 
									/>
								</Link>
								{/* Brand Name under logo */}
								<span className="footer-brand-name" style={{ 
									fontSize: '24px', 
									fontWeight: '700', 
									color: '#fff',
									display: 'block',
									marginBottom: '15px',
									fontFamily: language === "ar" ? "'IBM Plex Sans Arabic', sans-serif" : "'Arimo', sans-serif"
								}}>
									{brandName}
								</span>
								
								<p className="footer-description" style={{ 
									color: 'rgba(255,255,255,0.7)', 
									marginBottom: '20px', 
									fontSize: '14px', 
									lineHeight: '1.6',
									maxWidth: '280px'
								}}>
									{t('footer.description')}
								</p>

								{/* Social Icons */}
								<div className="footer-social-icons d-none d-lg-flex" style={{ 
									gap: '12px', 
									justifyContent: 'flex-start',
									marginTop: '20px'
								}}>
									{/* Facebook */}
									<SocialIcon href="https://www.facebook.com/ripplefy">
										<svg width="10" height="18" viewBox="0 0 11 18" fill="#fff" style={{ transition: 'fill 0.3s ease' }}>
											<path d="M9.88663 0.00357362L7.65153 0C5.14046 0 3.5177 1.65905 3.5177 4.22688V6.17575H1.27039C1.0762 6.17575 0.918945 6.33263 0.918945 6.52614V9.34984C0.918945 9.54335 1.07638 9.70005 1.27039 9.70005H3.5177V16.8251C3.5177 17.0187 3.67495 17.1754 3.86914 17.1754H6.80123C6.99543 17.1754 7.15268 17.0185 7.15268 16.8251V9.70005H9.7803C9.9745 9.70005 10.1318 9.54335 10.1318 9.34984L10.1328 6.52614C10.1328 6.43323 10.0957 6.34425 10.0299 6.27849C9.9641 6.21274 9.87444 6.17575 9.7812 6.17575H7.15268V4.52367C7.15268 3.72961 7.34257 3.3265 8.3806 3.3265L9.88627 3.32597C10.0803 3.32597 10.2375 3.16909 10.2375 2.97575V0.353788C10.2375 0.160634 10.0805 0.00393098 9.88663 0.00357362Z" />
										</svg>
									</SocialIcon>

									{/* Instagram */}
									<SocialIcon href="https://www.instagram.com/ripplefy.app/">
										<svg width="16" height="16" viewBox="0 0 18 17" fill="#fff" style={{ transition: 'fill 0.3s ease' }}>
											<path d="M12.043 0H5.9475C3.14256 0 0.86792 2.26664 0.86792 5.06173V11.1358C0.86792 13.9309 3.14256 16.1975 5.9475 16.1975H12.043C14.8479 16.1975 17.1226 13.9309 17.1226 11.1358V5.06173C17.1226 2.26664 14.8479 0 12.043 0ZM15.5987 11.1358C15.5987 13.0896 14.0037 14.679 12.043 14.679H5.9475C3.98678 14.679 2.39179 13.0896 2.39179 11.1358V5.06173C2.39179 3.1079 3.98678 1.51852 5.9475 1.51852H12.043C14.0037 1.51852 15.5987 3.1079 15.5987 5.06173V11.1358Z" />
											<path d="M9.00312 4.05713C6.75896 4.05713 4.93945 5.87024 4.93945 8.10651C4.93945 10.3428 6.75896 12.1559 9.00312 12.1559C11.2473 12.1559 13.0668 10.3428 13.0668 8.10651C13.0668 5.87024 11.2473 4.05713 9.00312 4.05713ZM9.00312 10.6374C7.60319 10.6374 6.46333 9.50153 6.46333 8.10651C6.46333 6.71049 7.60319 5.57565 9.00312 5.57565C10.4031 5.57565 11.5429 6.71049 11.5429 8.10651C11.5429 9.50153 10.4031 10.6374 9.00312 10.6374Z" />
											<path d="M13.3527 4.29821C13.653 4.29821 13.8964 4.05602 13.8964 3.75726C13.8964 3.4585 13.653 3.21631 13.3527 3.21631C13.0525 3.21631 12.8091 3.4585 12.8091 3.75726C12.8091 4.05602 13.0525 4.29821 13.3527 4.29821Z" />
										</svg>
									</SocialIcon>

									{/* LinkedIn */}
									<SocialIcon href="https://www.linkedin.com/company/ripplefyapp/">
										<svg width="14" height="14" viewBox="0 0 16 16" fill="#fff" style={{ transition: 'fill 0.3s ease' }}>
											<path d="M15.877 15.0112V15.0106H15.8807V9.49947C15.8807 6.8034 15.2983 4.72656 12.1353 4.72656C10.6147 4.72656 9.59433 5.55805 9.17775 6.34633H9.13377V4.97826H6.13477V15.0106H9.25755V10.0429C9.25755 8.73498 9.50637 7.47022 11.1318 7.47022C12.7335 7.47022 12.7573 8.96289 12.7573 10.1268V15.0112H15.877Z" />
											<path d="M1.0498 4.99463H4.17636V15.0269H1.0498V4.99463Z" />
											<path d="M2.62114 0C1.62147 0 0.810303 0.808321 0.810303 1.80448C0.810303 2.80063 1.62147 3.62586 2.62114 3.62586C3.62081 3.62586 4.43198 2.80063 4.43198 1.80448C4.43135 0.808321 3.62018 0 2.62114 0V0Z" />
										</svg>
									</SocialIcon>

									{/* Email */}
									<SocialIcon href="mailto:info@ripplefy.app">
										<svg width="16" height="14" viewBox="0 0 20 16" fill="#fff" style={{ transition: 'fill 0.3s ease' }}>
											<path d="M18 0H2C0.9 0 0.01 0.9 0.01 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" />
										</svg>
									</SocialIcon>
								</div>
							</div>
						</div>

						{/* Ripplefy Links */}
						<div className="col-xl-2 col-lg-2 col-md-4 col-6 mb-4">
							<div style={columnStyle}>
								<h5 style={{ color: '#fff', marginBottom: '20px', fontSize: '16px', fontWeight: '600' }}>
									{brandName}
								</h5>
								<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
									<FooterLink to="/about-us">{t('footer.links.about')}</FooterLink>
									<FooterLink to="/contact-us">{t('footer.links.contact')}</FooterLink>
									<FooterLink to="/blog">{t('footer.links.blog')}</FooterLink>
								</ul>
							</div>
						</div>

						{/* Products Links */}
						<div className="col-xl-2 col-lg-2 col-md-4 col-6 mb-4">
							<div style={columnStyle}>
								<h5 style={{ color: '#fff', marginBottom: '20px', fontSize: '16px', fontWeight: '600' }}>
									{t('footer.product')}
								</h5>
								<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
									<FooterLink to="/service">{t('footer.links.features')}</FooterLink>
									<FooterLink to="/pricing">{t('footer.links.pricing')}</FooterLink>
								</ul>
							</div>
						</div>

						{/* Resources Links */}
						<div className="col-xl-2 col-lg-2 col-md-4 col-6 mb-4">
							<div style={columnStyle}>
								<h5 style={{ color: '#fff', marginBottom: '20px', fontSize: '16px', fontWeight: '600' }}>
									{t('footer.resources')}
								</h5>
								<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
									<FooterLink to="/contact-us">{t('footer.links.help')}</FooterLink>
									<FooterLink to="/about-us">{t('footer.links.faq')}</FooterLink>
								</ul>
							</div>
						</div>

						{/* Legal Links */}
						<div className="col-xl-2 col-lg-2 col-md-4 col-6 mb-4">
							<div style={columnStyle}>
								<h5 style={{ color: '#fff', marginBottom: '20px', fontSize: '16px', fontWeight: '600' }}>
									{t('footer.legal')}
								</h5>
								<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
									<FooterLink to="/terms-and-condition">{t('footer.links.privacy')}</FooterLink>
									<FooterLink to="/terms-and-condition">{t('footer.links.terms')}</FooterLink>
								</ul>
							</div>
						</div>

						{/* Social Icons - Mobile */}
						<div className="col-12 d-flex d-lg-none justify-content-center mb-4">
							<div className="footer-social-icons" style={{ 
								display: 'flex', 
								gap: '12px', 
								justifyContent: 'center',
								marginTop: '10px'
							}}>
								{/* Facebook */}
								<SocialIcon href="https://www.facebook.com/ripplefy">
									<svg width="10" height="18" viewBox="0 0 11 18" fill="#fff" style={{ transition: 'fill 0.3s ease' }}>
										<path d="M9.88663 0.00357362L7.65153 0C5.14046 0 3.5177 1.65905 3.5177 4.22688V6.17575H1.27039C1.0762 6.17575 0.918945 6.33263 0.918945 6.52614V9.34984C0.918945 9.54335 1.07638 9.70005 1.27039 9.70005H3.5177V16.8251C3.5177 17.0187 3.67495 17.1754 3.86914 17.1754H6.80123C6.99543 17.1754 7.15268 17.0185 7.15268 16.8251V9.70005H9.7803C9.9745 9.70005 10.1318 9.54335 10.1318 9.34984L10.1328 6.52614C10.1328 6.43323 10.0957 6.34425 10.0299 6.27849C9.9641 6.21274 9.87444 6.17575 9.7812 6.17575H7.15268V4.52367C7.15268 3.72961 7.34257 3.3265 8.3806 3.3265L9.88627 3.32597C10.0803 3.32597 10.2375 3.16909 10.2375 2.97575V0.353788C10.2375 0.160634 10.0805 0.00393098 9.88663 0.00357362Z" />
									</svg>
								</SocialIcon>

								{/* Instagram */}
								<SocialIcon href="https://www.instagram.com/ripplefy.app/">
									<svg width="16" height="16" viewBox="0 0 18 17" fill="#fff" style={{ transition: 'fill 0.3s ease' }}>
										<path d="M12.043 0H5.9475C3.14256 0 0.86792 2.26664 0.86792 5.06173V11.1358C0.86792 13.9309 3.14256 16.1975 5.9475 16.1975H12.043C14.8479 16.1975 17.1226 13.9309 17.1226 11.1358V5.06173C17.1226 2.26664 14.8479 0 12.043 0ZM15.5987 11.1358C15.5987 13.0896 14.0037 14.679 12.043 14.679H5.9475C3.98678 14.679 2.39179 13.0896 2.39179 11.1358V5.06173C2.39179 3.1079 3.98678 1.51852 5.9475 1.51852H12.043C14.0037 1.51852 15.5987 3.1079 15.5987 5.06173V11.1358Z" />
										<path d="M9.00312 4.05713C6.75896 4.05713 4.93945 5.87024 4.93945 8.10651C4.93945 10.3428 6.75896 12.1559 9.00312 12.1559C11.2473 12.1559 13.0668 10.3428 13.0668 8.10651C13.0668 5.87024 11.2473 4.05713 9.00312 4.05713ZM9.00312 10.6374C7.60319 10.6374 6.46333 9.50153 6.46333 8.10651C6.46333 6.71049 7.60319 5.57565 9.00312 5.57565C10.4031 5.57565 11.5429 6.71049 11.5429 8.10651C11.5429 9.50153 10.4031 10.6374 9.00312 10.6374Z" />
										<path d="M13.3527 4.29821C13.653 4.29821 13.8964 4.05602 13.8964 3.75726C13.8964 3.4585 13.653 3.21631 13.3527 3.21631C13.0525 3.21631 12.8091 3.4585 12.8091 3.75726C12.8091 4.05602 13.0525 4.29821 13.3527 4.29821Z" />
									</svg>
								</SocialIcon>

								{/* LinkedIn */}
								<SocialIcon href="https://www.linkedin.com/company/ripplefyapp/">
									<svg width="14" height="14" viewBox="0 0 16 16" fill="#fff" style={{ transition: 'fill 0.3s ease' }}>
										<path d="M15.877 15.0112V15.0106H15.8807V9.49947C15.8807 6.8034 15.2983 4.72656 12.1353 4.72656C10.6147 4.72656 9.59433 5.55805 9.17775 6.34633H9.13377V4.97826H6.13477V15.0106H9.25755V10.0429C9.25755 8.73498 9.50637 7.47022 11.1318 7.47022C12.7335 7.47022 12.7573 8.96289 12.7573 10.1268V15.0112H15.877Z" />
										<path d="M1.0498 4.99463H4.17636V15.0269H1.0498V4.99463Z" />
										<path d="M2.62114 0C1.62147 0 0.810303 0.808321 0.810303 1.80448C0.810303 2.80063 1.62147 3.62586 2.62114 3.62586C3.62081 3.62586 4.43198 2.80063 4.43198 1.80448C4.43135 0.808321 3.62018 0 2.62114 0V0Z" />
									</svg>
								</SocialIcon>

								{/* Email */}
								<SocialIcon href="mailto:info@ripplefy.app">
									<svg width="16" height="14" viewBox="0 0 20 16" fill="#fff" style={{ transition: 'fill 0.3s ease' }}>
										<path d="M18 0H2C0.9 0 0.01 0.9 0.01 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" />
									</svg>
								</SocialIcon>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Footer Bottom with Copyright */}
			<div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
				<div className="container">
					<div style={{ padding: '25px 0', textAlign: 'center' }}>
						<p className="footer-copyright" style={{ 
							color: 'rgba(255,255,255,0.5)', 
							margin: 0, 
							fontSize: '13px'
						}}>
							© {new Date().getFullYear()} {brandName}. {t('footer.allRightsReserved') || "All rights reserved."}
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
