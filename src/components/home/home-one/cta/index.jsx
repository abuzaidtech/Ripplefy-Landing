import { Link } from "react-router-dom";
import Shape4 from "../../../../assets/images/v1/shape4.png";
import FadeInUp from "../../../animation/FadeInUp";
import { useLanguage } from "../../../../context/LanguageContext";

function Cta() {
	const { t } = useLanguage();

	return (
		<section className="sofax-section-padding2 bg-light">
			<div className="container">
				<div className="sofax-cta-content">
					<div className="tg-heading-subheading animation-style3">
						<h2>{t('cta.title')}</h2>
					</div>
					<p>
						{t('cta.description')}
					</p>
					<FadeInUp className="extra-mt">
						<Link className="sofax-default-btn pill" data-text={t('cta.button1')} to="/sign-up">
							<span className="button-wraper">{t('cta.button1')}</span>
						</Link>
						<span className="cta-bottom">{t('cta.guarantee')}</span>
					</FadeInUp>
					<div className="sofax-cta-shape">
						<img src={Shape4} alt="Shape" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Cta;

