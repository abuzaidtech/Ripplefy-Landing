import Rattingful from "../../../../assets/images/v1/rattingful.svg";
import Rattinghalf from "../../../../assets/images/v1/rattinghalf.svg";
import HeroContent from "./HeroContent";
import HeroThumbs from "./HeroThumbs";
import { useLanguage } from "../../../../context/LanguageContext";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HeroSection() {
	const { t, isRTL } = useLanguage();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		const subject = "Subscription Request";
		const body = `Email: ${data.email}`;
		window.location.href = `mailto:info@ripplefy.app?subject=${subject}&body=${body}`;
		toast.success(t('hero.subscriptionSuccess') || "Subscription successful!");
		reset();
	};

	return (
		<div className="sofax-hero-section overflow-hidden" id="hero">
			<ToastContainer position="bottom-right" rtl={isRTL} />
			<div className="container">
				<HeroContent />
				<div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
					<form 
						className="hero-subscription-form"
					onSubmit={handleSubmit(onSubmit)}
					style={{
						direction: 'ltr',
						flexDirection: isRTL ? 'row-reverse' : 'row',
						backgroundColor: '#fff',
						borderRadius: '50px',
						padding: '5px',
						display: 'flex',
						alignItems: 'center',
						boxShadow: '0px 10px 30px rgba(0,0,0,0.08)',
						width: 'fit-content',
						maxWidth: '100%',
						position: 'relative',
						margin: '0 auto'
					}}
				>
					<input 
						{...register("email", { 
							required: "Email is required",
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: "Invalid email address"
							}
						})}
						className="hero-subscription-input"
						type="email" 
						placeholder={t('hero.emailPlaceholder')}
						style={{
							textAlign: isRTL ? 'right' : 'left',
							direction: isRTL ? 'rtl' : 'ltr',
							background: 'transparent',
							padding: '10px 20px',
							outline: 'none',
							border: 'none',
							minWidth: '250px',
							flex: 1,
							color: '#0e1e3f'
						}}
					/>
					<button 
						type="submit"
						style={{
							flexShrink: 0,
							minWidth: 'fit-content',
							position: 'static',
							width: 'auto',
							whiteSpace: 'nowrap',
							borderRadius: '50px',
							margin: '0',
							height: '45px',
							padding: '0 25px',
							backgroundColor: '#40E0D0',
							color: '#fff',
							border: 'none',
							fontWeight: '600',
							cursor: 'pointer',
							transition: 'all 0.3s ease'
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.backgroundColor = '#3BC0B0';
							e.currentTarget.style.color = '#fff';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.backgroundColor = '#40E0D0';
							e.currentTarget.style.color = '#fff';
						}}
					>
						{t('hero.cta')}
					</button>
					</form>
				</div>
				<div className="sofax-rating-icon hero-rating-wrapper">
					<ul className="hero-stars-list">
						<li>
							<img src={Rattingful} alt="Rating" />
						</li>
						<li>
							<img src={Rattingful} alt="Rating" />
						</li>
						<li>
							<img src={Rattingful} alt="Rating" />
						</li>
						<li>
							<img src={Rattingful} alt="Rating" />
						</li>
						<li>
							<img src={Rattingful} alt="Rating" />
						</li>
					</ul>
					<span className="hero-rating-text">{t('hero.rating')}</span>
				</div>
				<HeroThumbs />
			</div>
		</div>
	);
}

export default HeroSection;

