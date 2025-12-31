import { useLanguage } from "../../../../context/LanguageContext";

function HeroContent() {
	const { t } = useLanguage();

	return (
		<div className="sofax-hero-content center">
			<h1 className="slider-custom-anim-left" data-ani="slider-custom-anim-left" data-ani-delay="0.3s" style={{ fontSize: '2.5em' }}>
				{t('hero.title')}
			</h1>
		</div>
	);
}

export default HeroContent;

