import { Link } from "react-router-dom";
import { useLanguage } from "../../../../context/LanguageContext";

function PricingCard({ pricing: { plan, price, img, features, highlighted, featureIcon, cta }, frequency }) {
	const { t } = useLanguage();

	return (
		<div className="sofax-pricing-wrap">
			<div className="sofax-pricing-header">
				<img src={img} alt="icon" />
				<h4>{plan}</h4>
			</div>
			<div className="sofax-pricing-price">
				<h2>
					{price === "Custom" ? price : `$${price.map((item) => {
						if (item.id === frequency.id) {
							return item.value;
						}
					})}`}
				</h2>

				<p className="dynamic-value"> {price === "Custom" ? "" : frequency.label}</p>
			</div>
			<div className="sofax-pricing-body">
				<h5>Key features:</h5>
				<ul>
					{features.map((feature, idx) => (
						<li key={idx}>
							<img src={featureIcon} alt="feature Icon" />
							{feature}
						</li>
					))}
				</ul>
			</div>
			<div className="sofax-pricing-footer">
				<Link className={`sofax-default-btn  d-block pill ${!highlighted && "outline-btn"}`} to="/contact-us">
					{cta}
				</Link>
			</div>
		</div>
	);
}

export default PricingCard;

