import React from "react";
import { Link } from "react-router-dom";

function HeaderButton() {
	return (
		<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex align-items-center gap-3">
			<Link className="sofax-default-btn pill header-btn" to="/sign-up">
				Sign Up
			</Link>
			<Link className="text-decoration-none text-dark fw-bold" to="/sign-in">
				Sign In
			</Link>
		</div>
	);
}

export default HeaderButton;
