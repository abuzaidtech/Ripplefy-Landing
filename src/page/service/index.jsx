import BreadCrumb from "../../components/common/Breadcrumb";
import CoreServices from "../../components/service-page/new-layout/CoreServices";
import ServicesIntegration from "../../components/service-page/new-layout/ServicesIntegration";
import ServicesImpact from "../../components/service-page/new-layout/ServicesImpact";
import { useLanguage } from "../../context/LanguageContext";
import HeroImage from "../../assets/images/Hero/services.jpg";

function ServicePage() {
	const { t } = useLanguage();

	return (
		<>
			<BreadCrumb title={t('servicesPage.overview.title')} backgroundImage={HeroImage} />
			<CoreServices />
			<ServicesIntegration />
			<ServicesImpact />
		</>
	);
}

export default ServicePage;

