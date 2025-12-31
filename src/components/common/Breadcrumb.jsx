import { Link } from "react-router-dom";
import Arrow from "../../assets/images/about/arrow.png";
function BreadCrumb({ title, backgroundImage }) {
	return (
		<div 
			className="sofax-breadcrumb"
			style={backgroundImage ? {
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				position: 'relative',
				zIndex: 1
			} : {}}
		>
			{backgroundImage && (
				<div 
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: 'rgba(14, 14, 14, 0.7)', // Dark overlay for readability
						zIndex: -1
					}}
				/>
			)}
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
