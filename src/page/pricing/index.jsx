import BreadCrumb from "../../components/common/Breadcrumb";
import PricePlan from "../../components/home/home-one/price-plan";
import HeroImage from "../../assets/images/Hero/pricing.jpg";

function Pricing() {
	return (
		<>
			<BreadCrumb title="Pricing" backgroundImage={HeroImage} />
			<PricePlan />
		</>
	);
}

export default Pricing;
