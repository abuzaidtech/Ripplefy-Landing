import { useLanguage } from "../../../../context/LanguageContext";

function HeroContent() {
	const { t } = useLanguage();

	return (
		<div className="sofax-hero-content center">
			<h1 className="slider-custom-anim-left" data-ani="slider-custom-anim-left" data-ani-delay="0.3s">
				{t('hero.title')}
			</h1>
			<p>
				{t('hero.subtitle')}
			</p>
			<p style={{ fontSize: '0.95em', opacity: 0.9, marginTop: '8px' }}>
				{t('hero.description')}
			</p>
		</div>
	);
}

export default HeroContent;

