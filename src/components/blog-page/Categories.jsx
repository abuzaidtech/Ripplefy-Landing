import { Link } from "react-router-dom";
function Categories() {
	return (
		<div className="sofax-subscription-field-categories">
			<h4>Categories:</h4>
			<ul>
				<li>
					<Link to="/single-blog">Sass</Link>
				</li>
				<li>
					<Link to="/single-blog">Business</Link>
				</li>
				<li>
					<Link to="/single-blog">Marketing</Link>
				</li>
				<li>
					<Link to="/single-blog">Technology</Link>
				</li>
				<li>
					<Link to="/single-blog">Development</Link>
				</li>
			</ul>
		</div>
	);
}

export default Categories;
