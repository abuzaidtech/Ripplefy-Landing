import AutoSlider from "../../components/common/auto-slider";
import BreadCrumb from "../../components/common/Breadcrumb";
import WhyChooseUs from "../../components/home/home-one/why-choose-us";
import Faq from "../../components/faq-page";
import { useLanguage } from "../../context/LanguageContext";

function AboutUs() {
	const { t } = useLanguage();
	return (
		<>
			<BreadCrumb title={t('about.title')} />
			<WhyChooseUs />
			<AutoSlider />
			<Faq />
		</>
	);
}

export default AboutUs;
