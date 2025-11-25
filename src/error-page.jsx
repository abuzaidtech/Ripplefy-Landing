import { Link } from "react-router-dom";
import ErrorImg from "./assets/images/contact/404.png";
export default function ErrorPage() {
	return (
		<div className="sofax-section-padding4">
			<div className="container">
				<div className="sofax-error-content">
					<img src={ErrorImg} alt="404 image" />
					<h2>Oops! Looks like you took a wrong turn</h2>
				</div>
				<div className="sofax-404-bottom-btn extra-mt">
					<Link className="sofax-default-btn pill" data-text="Back To Home" to="/">
						<span className="button-wraper">Back To Home</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
