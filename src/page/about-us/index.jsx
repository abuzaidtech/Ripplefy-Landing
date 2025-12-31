import BreadCrumb from "../../components/common/Breadcrumb";
import AboutSection from "../../components/about-page/new-layout/AboutSection";
import WhyChooseUs from "../../components/about-page/new-layout/WhyChooseUs";
import MissionVision from "../../components/about-page/new-layout/MissionVision";
import Faq from "../../components/faq-page";
import { useLanguage } from "../../context/LanguageContext";
import HeroImage from "../../assets/images/Hero/About-us.jpg";

function AboutUs() {
	const { t } = useLanguage();
	return (
		<>
			<BreadCrumb title={t('aboutPage.about.title')} backgroundImage={HeroImage} />
			<AboutSection />
			<MissionVision />
			<WhyChooseUs />
			<Faq />
		</>
	);
}

export default AboutUs;
