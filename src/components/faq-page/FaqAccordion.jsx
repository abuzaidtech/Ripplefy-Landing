import Icon from "../../assets/images/v2/icon9.png";
import { useLanguage } from "../../context/LanguageContext";

function FaqAccordion() {
	const { t } = useLanguage();

	// Get FAQ from translations
	const faqs = t('faq.questions');

	return (
		<div className="sofax-accordion-section-wrapper">
			<div className="accordion sofax-accordion-section-v2" id="sofax-accordion2">
				{faqs.slice(0, 5).map((faq, index) => (
					<div className="accordion-item sofax-accordion-item" key={index}>
						<h3 className="accordion-header sofax-accordion-header">
							<button
								className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
								type="button"
								data-bs-toggle="collapse"
								data-bs-target={`#collapse${index}`}
							>
								{faq.question}
							</button>
							<div className="accordion-icon">
								<img src={Icon} alt="Icon" />
							</div>
						</h3>
						<div
							id={`collapse${index}`}
							className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
							data-bs-parent="#sofax-accordion2"
						>
							<div className="accordion-body sofax-accordion-body">
								{faq.answer}
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="accordion sofax-accordion-section-v2 mt-24" id="sofax-accordion3">
				{faqs.slice(5, 10).map((faq, index) => (
					<div className="accordion-item sofax-accordion-item" key={index + 5}>
						<h3 className="accordion-header sofax-accordion-header">
							<button
								className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
								type="button"
								data-bs-toggle="collapse"
								data-bs-target={`#collapse${index + 5}`}
							>
								{faq.question}
							</button>
							<div className="accordion-icon">
								<img src={Icon} alt="Icon" />
							</div>
						</h3>
						<div
							id={`collapse${index + 5}`}
							className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
							data-bs-parent="#sofax-accordion3"
						>
							<div className="accordion-body sofax-accordion-body">
								{faq.answer}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default FaqAccordion;

