import AutoSlider from "../../components/common/auto-slider";
import BreadCrumb from "../../components/common/Breadcrumb";
import Faq from "../../components/faq-page";
import Testimonials from "../../components/home/home-one/testimonial";
import PricePlan from "../../components/home/home-one/price-plan";

function Pricing() {
	return (
		<>
			<BreadCrumb title="Pricing" />
			<PricePlan />
			<AutoSlider />
			<Testimonials />
			<Faq />
		</>
	);
}

export default Pricing;
