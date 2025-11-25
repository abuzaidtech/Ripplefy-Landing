import { Outlet } from "react-router-dom";
import Header from "../../common/header";

function LayoutThirteen() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default LayoutThirteen;
