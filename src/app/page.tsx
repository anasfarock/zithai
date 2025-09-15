import AboutUs from "~/components/frontend/sections/AboutUs";
import Footer from "~/components/frontend/Footer";
import Header from "~/components/Header";
import CafeMap from "~/components/frontend/GoogleMap";

import { Menu } from "~/components/frontend/MenuCard";

const Index = () => {
    return (
        <>
            <Header />
            {/* <Reservations /> */}
            <AboutUs />
            <Menu />
            <CafeMap />
            <Footer />
        </>
    );
}

export default Index;