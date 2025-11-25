import Dashboard from "../../../../assets/images/v1/dashboard.png";
import Shape1 from "../../../../assets/images/v1/shape1.png";
import Shape2 from "../../../../assets/images/v1/shape2.png";
import FadeInUp from "../../../animation/FadeInUp";
function HeroThumbs() {
	return (
		<FadeInUp className="sofax-hero-thumb1">
			<img src={Dashboard} alt="Dashboard" />
			<div className="sofax-hero-shape">
				<img src={Shape1} alt="shape" />
			</div>
			<div className="sofax-hero-shape2">
				<img src={Shape2} alt="shape" />
			</div>
		</FadeInUp>
	);
}

export default HeroThumbs;
