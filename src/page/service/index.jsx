import AutoSlider from "../../components/common/auto-slider";
import BreadCrumb from "../../components/common/Breadcrumb";
import Faq from "../../components/faq-page";
import About from "../../components/service-page/about";
import Services from "../../components/service-page/services";
import { useLanguage } from "../../context/LanguageContext";

function ServicePage() {
	const { t } = useLanguage();

	return (
		<>
			<BreadCrumb title={t('services.title')} />
			<Services />
			<AutoSlider />
			<About />
			<Faq />
		</>
	);
}

export default ServicePage;

