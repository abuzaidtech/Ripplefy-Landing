import Blog from "../../components/blog-page";
import AutoSlider from "../../components/common/auto-slider";
import BreadCrumb from "../../components/common/Breadcrumb";
import { useLanguage } from "../../context/LanguageContext";

function BlogPage() {
	const { t } = useLanguage();

	return (
		<>
			<BreadCrumb title={t('blog.title')} />
			<Blog />
			<AutoSlider />
		</>
	);
}

export default BlogPage;

