import Cta from "../../components/home/home-one/cta";
import HeroSection from "../../components/home/home-one/hero";
import PricePlan from "../../components/home/home-one/price-plan";
import Services from "../../components/home/home-one/services";
import WhyChooseUs from "../../components/home/home-one/why-choose-us";

function HomeOne() {
	return (
		<>
			<HeroSection />
			<Services />
			<WhyChooseUs />
			<PricePlan />
			<Cta />
		</>
	);
}

export default HomeOne;

