import { Link } from "react-router-dom";
import Arrow from "../../assets/images/about/arrow.png";
function BreadCrumb({ title }) {
	return (
		<div className="sofax-breadcrumb">
			<div className="container">
				<h1 className="post__title">{title}</h1>
				<nav className="breadcrumbs">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<img src={Arrow} alt="arrow" />
						</li>
						<li aria-current="page"> {title}</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default BreadCrumb;
