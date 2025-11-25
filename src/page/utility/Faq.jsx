import AutoSlider from "../../components/common/auto-slider";
import BreadCrumb from "../../components/common/Breadcrumb";
import Faq from "../../components/faq-page";
function FaqPage() {
	return (
		<>
			<BreadCrumb title="Faq" />
			<Faq />
			<AutoSlider />
		</>
	);
}

export default FaqPage;
