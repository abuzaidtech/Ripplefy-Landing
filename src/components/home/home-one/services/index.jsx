import { Link } from "react-router-dom";
import Icon1 from "../../../../assets/images/v1/icon1.png";
import Icon2 from "../../../../assets/images/v1/icon2.png";
import Icon3 from "../../../../assets/images/v1/icon3.png";
import FadeInStagger from "../../../animation/FadeInStagger";
import FadeInUp from "../../../animation/FadeInUp";
import ServiceCard from "./ServiceCard";
import { useLanguage } from "../../../../context/LanguageContext";

function Services() {
	const { t, isRTL } = useLanguage();

	// Ripplefy's 6 core services
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
	];

	return (
		<div className="section sofax-section-padding bg-light" id="service">
			<div className="container">
				<div className="sofax-section-title max-width-770 ">
					<div className="row">
						{/* Button - first in DOM, shown on left for Arabic */}
						<div 
							className={`col-xl-4 col-lg-4 d-flex align-items-center ${isRTL ? 'justify-content-start' : 'justify-content-end'} order-2 order-lg-${isRTL ? '1' : '2'}`}
						>
							<FadeInUp className="sofax-title-btn">
								<Link className="sofax-default-btn pill" data-text={t('features.viewAll')} to="/service">
									<span className="button-wraper">{t('features.viewAll')}</span>
								</Link>
							</FadeInUp>
						</div>
						{/* Title - shown on right for Arabic */}
						<div 
							className={`col-xl-8 col-lg-8 order-1 order-lg-${isRTL ? '2' : '1'}`}
						>
							<div className="tg-heading-subheading animation-style3">
								<h2 style={{ textAlign: isRTL ? 'right' : 'left' }}>{t('features.title')}</h2>
							</div>
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

