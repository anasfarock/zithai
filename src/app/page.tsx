import AboutUs from "~/components/frontend/sections/AboutUs";
import Footer from "~/components/frontend/Footer";
import Header from "~/components/Header";
import CafeMap from "~/components/frontend/GoogleMap";
import Cakes from "~/components/frontend/sections/Cakes";
import Catering from "~/components/frontend/sections/Catering";

import { Menu } from "~/components/frontend/MenuCard";

const Index = () => {
    return (
        <>
            <Header />
            {/* <Reservations /> */}
            <AboutUs />
            <Menu />
            <Cakes />
            <Catering />
            <CafeMap />
            <Footer />
        </>
    );
}

export default Index;