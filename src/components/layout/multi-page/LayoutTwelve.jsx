import { Outlet } from "react-router-dom";
import Header from "../../common/header";

function LayoutTwelve() {
    return (
        <>
            {/* <Header /> */}
            <Header />
            <Outlet />
        </>
    );
}

export default LayoutTwelve;
