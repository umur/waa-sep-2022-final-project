import Footer from "./shared/Footer";
import Header from "./shared/Header";
import {Outlet} from "react-router";


export default function Index() {

    return (
        <div>
            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </div>
    );
}