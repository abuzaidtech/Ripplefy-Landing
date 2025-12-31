import Blog from "../../components/blog-page";
import AutoSlider from "../../components/common/auto-slider";
import BreadCrumb from "../../components/common/Breadcrumb";
import { useLanguage } from "../../context/LanguageContext";
import HeroImage from "../../assets/images/Hero/blog.png";

function BlogPage() {
	const { t } = useLanguage();

	return (
		<>
			<BreadCrumb title={t('blog.title')} backgroundImage={HeroImage} />
			<Blog />
			<AutoSlider />
		</>
	);
}

export default BlogPage;

