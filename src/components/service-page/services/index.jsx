import image1 from "../../../assets/images/service/image1.png";
import image2 from "../../../assets/images/service/image2.png";
import image3 from "../../../assets/images/service/image3.png";
import image4 from "../../../assets/images/service/image4.png";
import image5 from "../../../assets/images/service/image5.png";
import image6 from "../../../assets/images/service/image6.png";
import FadeInStagger from "../../animation/FadeInStagger";
import ServiceCard from "./ServiceCard";
import { useLanguage } from "../../../context/LanguageContext";

function Services() {
	const { t } = useLanguage();

	// Ripplefy's 7 core features for services page
	const servicesData = [
		{
			id: crypto.randomUUID(),
			title: t('features.feature1.title'),
			description: t('features.feature1.description'),
			icon: image1,
		},
		{
			id: crypto.randomUUID(),
			title: t('features.feature2.title'),
			description: t('features.feature2.description'),
			icon: image2,
		},
		{
			id: crypto.randomUUID(),
			title: t('features.feature3.title'),
			description: t('features.feature3.description'),
			icon: image3,
		},
		{
			id: crypto.randomUUID(),
			title: t('features.feature4.title'),
			description: t('features.feature4.description'),
			icon: image4,
		},
		{
			id: crypto.randomUUID(),
			title: t('features.feature5.title'),
			description: t('features.feature5.description'),
			icon: image5,
		},
		{
			id: crypto.randomUUID(),
			title: t('features.feature6.title'),
			description: t('features.feature6.description'),
			icon: image6,
		},
		{
			id: crypto.randomUUID(),
			title: t('features.feature7.title'),
			description: t('features.feature7.description'),
			icon: image1,
		},
	];

	return (
		<section className="sofax-section-padding">
			<div className="container">
				<div className="row">
					<div className="sofax-section-title center">
						<h2>{t('services.title')}</h2>
						<p>{t('services.subtitle')}</p>
					</div>
					{servicesData.map((service, index) => (
						<FadeInStagger key={service.id} index={index} className="col-lg-6">
							<ServiceCard service={service} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;

