import { Link } from "react-router-dom";
import ArrowRight from "../../assets/images/v1/arrow-right.png";

function BlogCard({ blog: { title, category, description, date, image } }) {
	return (
		<>
			<div className="sofax-inner-blog-img">
				<img src={image} alt="blog thumb" />
			</div>
			<div className="sofax-inner-blog-content">
				<div className="sofax-inner-blog-meta">
					<Link to="/single-blog">
						<h5>{category}</h5>
						<ul>
							<li>{date}</li>
						</ul>
					</Link>
				</div>
				<div className="sofax-inner-blog-text">
					<Link hto="/single-blog">
						<h3>{title}</h3>
					</Link>
					<p>{description}</p>
				</div>
				<Link className="sofax-icon-btn sofax-blog-icon-btn" to="/single-blog">
					Learn More <img src={ArrowRight} alt="arrow right" />
				</Link>
			</div>
		</>
	);
}

export default BlogCard;
