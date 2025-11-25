import { Link } from "react-router-dom";
import Icon1 from "../../../../assets/images/v1/icon1.png";
import Icon2 from "../../../../assets/images/v1/icon2.png";
import Icon3 from "../../../../assets/images/v1/icon3.png";
import FadeInStagger from "../../../animation/FadeInStagger";
import FadeInUp from "../../../animation/FadeInUp";
import ServiceCard from "./ServiceCard";
import { useLanguage } from "../../../../context/LanguageContext";

function Services() {
	const { t } = useLanguage();

	// Ripplefy's 7 core features
	const servicesData = [
		{
			id: crypto.randomUUID(),
			icon: Icon1,
			title: t('features.feature1.title'),
			description: t('features.feature1.description'),
		},
		{
			id: crypto.randomUUID(),
			icon: Icon2,
			title: t('features.feature2.title'),
			description: t('features.feature2.description'),
		},
		{
			id: crypto.randomUUID(),
			icon: Icon3,
			title: t('features.feature3.title'),
			description: t('features.feature3.description'),
		},
		{
			id: crypto.randomUUID(),
			icon: Icon1,
			title: t('features.feature4.title'),
			description: t('features.feature4.description'),
		},
		{
			id: crypto.randomUUID(),
			icon: Icon2,
			title: t('features.feature5.title'),
			description: t('features.feature5.description'),
		},
		{
			id: crypto.randomUUID(),
			icon: Icon3,
			title: t('features.feature6.title'),
			description: t('features.feature6.description'),
		},
		{
			id: crypto.randomUUID(),
			icon: Icon1,
			title: t('features.feature7.title'),
			description: t('features.feature7.description'),
		},
	];

	return (
		<div className="section sofax-section-padding bg-light" id="service">
			<div className="container">
				<div className="sofax-section-title max-width-770 ">
					<div className="row">
						<div className="col-xl-8 col-lg-8">
							<div className="tg-heading-subheading animation-style3">
								<h2>{t('features.title')}</h2>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 d-flex justify-content-end align-items-center">
							<FadeInUp className="sofax-title-btn">
								<Link className="sofax-default-btn pill" data-text={t('features.viewAll')} to="/service">
									<span className="button-wraper">{t('features.viewAll')}</span>
								</Link>
							</FadeInUp>
						</div>
					</div>
				</div>

				<div className="row">
					{servicesData.map((item, index) => (
						<FadeInStagger key={item.id} index={index} className="col-xl-4 col-md-6">
							<ServiceCard service={item} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</div>
	);
}

export default Services;

