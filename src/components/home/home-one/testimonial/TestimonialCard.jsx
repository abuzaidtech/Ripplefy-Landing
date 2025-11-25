import RatingFull from "../../../../assets/images/v1/rattingful.svg";
function TestimonialCard({ testimonial: { rating, title, description, author, designation, img } }) {
	return (
		<div className="sofax-testimonial-content">
			<div className="sofax-testimonial-rating">
				<ul>
					{[...Array(rating)].map(() => (
						<li key={crypto.randomUUID()}>
							<img src={RatingFull} alt="Rating" />
						</li>
					))}
				</ul>
			</div>
			<div className="sofax-testimonial-data">
				<p>{description}</p>
			</div>
			<div className="sofax-testimonial-author">
				<div className="sofax-testimonial-author-thumb">
					<img src={img} alt="author" />
				</div>
				<div className="sofax-testimonial-author-data">
					<h5>{author}</h5>
					<p>{designation}</p>
				</div>
			</div>
		</div>
	);
}

export default TestimonialCard;
