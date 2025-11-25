import FaqAccordion from "./FaqAccordion";
import { useLanguage } from "../../context/LanguageContext";

function Faq() {
	const { t } = useLanguage();

	return (
		<section className="section sofax-section-padding bg-light">
			<div className="container">
				<div className="sofax-section-title center max-width700">
					<h2>{t('faq.title')}</h2>
					<p>{t('faq.subtitle')}</p>
				</div>
				<div className="sofax-accordion-wrap1 sofax-accordion-wrap3">
					<FaqAccordion />
				</div>
			</div>
		</section>
	);
}

export default Faq;

