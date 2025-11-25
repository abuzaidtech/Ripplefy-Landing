import { useState } from "react";
import Icon5 from "../../../../assets/images/v1/icon5.png";
import Icon6 from "../../../../assets/images/v1/icon6.png";
import Icon7 from "../../../../assets/images/v1/icon7.png";
import featureIcon from "../../../../assets/images/v1/icon8.png";
import FadeInStagger from "../../../animation/FadeInStagger";
import PricingCard from "./PricingCard";
import { useLanguage } from "../../../../context/LanguageContext";

function PricePlan() {
	const { t } = useLanguage();

	const pricePlanData = [
		{
			id: crypto.randomUUID(),
			plan: t('pricing.starter.name'),
			price: [
				{ id: 1, value: 39 }, // Yearly (monthly equivalent)
				{ id: 2, value: 49 }, // Monthly
			],
			img: Icon7,
			features: [
				t('pricing.starter.feature1'),
				t('pricing.starter.feature2'),
				t('pricing.starter.feature3'),
				t('pricing.starter.feature4'),
				t('pricing.starter.feature5'),
				t('pricing.starter.feature6'),
			],
			featureIcon,
			highlighted: false,
			cta: t('pricing.starter.cta'),
		},
		{
			id: crypto.randomUUID(),
			plan: t('pricing.professional.name'),
			price: [
				{ id: 1, value: 79 }, // Yearly (monthly equivalent)
				{ id: 2, value: 99 }, // Monthly
			],
			img: Icon5,
			features: [
				t('pricing.professional.feature1'),
				t('pricing.professional.feature2'),
				t('pricing.professional.feature3'),
				t('pricing.professional.feature4'),
				t('pricing.professional.feature5'),
				t('pricing.professional.feature6'),
				t('pricing.professional.feature7'),
				t('pricing.professional.feature8'),
			],
			featureIcon,
			highlighted: true,
			cta: t('pricing.professional.cta'),
		},
		{
			id: crypto.randomUUID(),
			plan: t('pricing.enterprise.name'),
			price: "Custom",
			img: Icon6,
			features: [
				t('pricing.enterprise.feature1'),
				t('pricing.enterprise.feature2'),
				t('pricing.enterprise.feature3'),
				t('pricing.enterprise.feature4'),
				t('pricing.enterprise.feature5'),
				t('pricing.enterprise.feature6'),
				t('pricing.enterprise.feature7'),
				t('pricing.enterprise.feature8'),
			],
			featureIcon,
			highlighted: false,
			cta: t('pricing.enterprise.cta'),
		},
	];

	const frequencies = [
		{ id: 1, label: t('pricing.yearly') },
		{ id: 2, label: t('pricing.monthly') },
	];

	const [frequency, setFrequency] = useState(frequencies[1]); // Default to monthly

	function handleChange(e) {
		if (e.target.checked) {
			setFrequency(frequencies[0]); // Yearly
		} else {
			setFrequency(frequencies[1]); // Monthly
		}
	}

	return (
		<section className="section sofax-section-padding bg-light" id="pricing">
			<div className="container">
				<div className="sofax-section-title center pb-50">
					<div className="tg-heading-subheading animation-style3">
						<h2>{t('pricing.title')}</h2>
						<p>{t('pricing.description')}</p>
					</div>
				</div>

				<div className="pricing-btn">
					<label>{t('pricing.monthly')}</label>
					<div className="toggle-btn">
						<input
							className="form-check-input btn-toggle price-deck-trigger"
							type="checkbox"
							onChange={handleChange}
						/>
					</div>
					<label>{t('pricing.yearly')} <span style={{ color: '#4169E1', fontSize: '0.85em', marginLeft: '4px' }}>({t('pricing.save')})</span></label>
				</div>

				<div className="row" id="table-price-value">
					{pricePlanData.map((pricing, index) => (
						<FadeInStagger key={pricing.id} index={index} className="col-xl-4 col-md-6">
							<PricingCard pricing={pricing} frequency={frequency} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default PricePlan;

