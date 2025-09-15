import Footer from "~/components/frontend/Footer";
import Header, { MiniHeader } from "~/components/Header";
import CafeMap from "~/components/frontend/GoogleMap";
import Head from "next/head";
import Image from "next/image";

import FoodMenuImg from "@/images/menu-food.png";
import DrinksMenuImg from "@/images/menu-drinks.png";
import CateringMenuImg from "@/images/menu-catering.png";
import MenuCard, { Menu } from "~/components/frontend/MenuCard";

import Hero from "@/images/hero-4.jpg";
import { TextSection } from "~/components/frontend/ui/section";

export const metadata = {
    title: "Zithai | Contact Us",
    description: "Nestled in the heart of , Zithai is a cherished destinations for locals and visitors. Offering a unique fusion of Goan and European cuisine.",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const Catering = () => {
    return (
        <>
            <MiniHeader heroImg={Hero} />

            <TextSection
                title="Contact Us"
                description={[
                ]}
                footer={
                    <div>
                        <p>Phone: ++123 456 789</p>
                        <p>Email: contact@zithai.in</p>
                        <p>Address: Zithai, Dehli, India 12345</p>
                    </div>
                }
            />

            <CafeMap />
            <Footer />
        </>
    );
}

export default Catering;