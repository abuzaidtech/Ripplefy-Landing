import { Outlet } from "react-router-dom";
import useScrollTop from "../../hooks/useScrollTop";
import ScrollToTop from "../common/ScrollToTop";
function Layout() {
	useScrollTop();
	return (
		<>
			<Outlet />
			<ScrollToTop />
		</>
	);
}

export default Layout;
