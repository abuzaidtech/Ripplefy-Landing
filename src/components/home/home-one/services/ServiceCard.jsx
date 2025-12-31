import { Link } from "react-router-dom";
import ArrowRightImg from "../../../../assets/images/v1/arrow-right.png";
function ServiceCard({ service: { title, description, icon } }) {
	return (
		<div className="sofax-iconbox-wrap">
			<div className="sofax-iconbox-icon">
				<img src={icon} alt="icon" />
			</div>
			<div className="sofax-iconbox-data">
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default ServiceCard;
