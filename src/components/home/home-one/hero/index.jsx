import Rattingful from "../../../../assets/images/v1/rattingful.svg";
import Rattinghalf from "../../../../assets/images/v1/rattinghalf.svg";
import HeroContent from "./HeroContent";
import HeroThumbs from "./HeroThumbs";
import { useLanguage } from "../../../../context/LanguageContext";

function HeroSection() {
	const { t } = useLanguage();

	return (
		<div className="sofax-hero-section overflow-hidden" id="hero">
			<div className="container">
				<HeroContent />
				<div className="sofax-subscription-field blog-details-subscribe-btn">
					<input type="email" placeholder={t('hero.emailPlaceholder')} />
					<button id="sofax-subscription-btn" type="submit">
						{t('hero.cta')}
					</button>
				</div>
				<div className="sofax-rating-icon">
					<ul>
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
						<li>{t('hero.rating')}</li>
					</ul>
				</div>
				<HeroThumbs />
			</div>
		</div>
	);
}

export default HeroSection;

