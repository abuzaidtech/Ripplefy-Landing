import { Outlet } from "react-router-dom";
import Footer from "../../home/home-one/footer";
import Header from "../../common/header";
function LayoutOne() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default LayoutOne;
