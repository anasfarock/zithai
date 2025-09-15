import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import { TextSection } from "../ui/section";

const AboutUs = () => {
    return (
        <>
            <section>
                <div className="mx-auto px-4 sm:px-6">
                    <div className="py-8 md:py-12">
                        <div className="max-w-6xl mx-auto" data-aos-id-tabs="">
                            {/* Header */}
                            <div className="text-center mb-8">
                                <div className="w-16 mx-auto border-t-2 border-[#C7A17A] pb-2"></div>
                                <h2 className="text-4xl font-bold aos-init aos-animate mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">
                                    About Us
                                </h2>
                                <p className="font-medium text-lg text-[#C7A17A]">Passionate about flavors, dedicated to community</p>
                            </div>

                            {/* Two column layout */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                                {/* Image Grid - Right side */}
                                <div className="order-2 lg:order-2">
                                    <div className="grid grid-cols-2 gap-4">
                                        {/* Large image spanning full width */}
                                        <div className="col-span-2">
                                            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                                                <Image
                                                    src="/images/about-us.png"
                                                    alt="Zithai Restaurant Interior"
                                                    fill
                                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        </div>
                                        {/* Two smaller images below */}
                                        <div className="relative h-32 rounded-lg overflow-hidden shadow-lg">
                                            <Image
                                                src="/images/about-us-1.jpeg"
                                                alt="Zithai Team"
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="relative h-32 rounded-lg overflow-hidden shadow-lg">
                                            <Image
                                                src="/images/devonport.png"
                                                alt="Devonport Location"
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        {/* Fourth large image at bottom */}
                                        <div className="col-span-2">
                                            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                                                <Image
                                                    src="/images/hero-2.jpg"
                                                    alt="Zithai Cuisine"
                                                    fill
                                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Text Content - Left side */}
                                <div className="order-1 lg:order-1 space-y-4">
                                    <p className="text-gray-700 leading-relaxed">
                                        Nestled in the heart of Devonport, Zithai is more than just a café; it&apos;s a journey of flavors and a celebration of community. As a husband-and-wife team, we infuse our shared love for culinary adventures and heartfelt hospitality into every aspect of our family eatery.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        Our journey began with a simple dream: to blend the vibrant tastes of Goa with the rustic charm of European cuisine, right here in New Zealand. Each dish we serve is a reflection of our passion for culinary diversity, crafted with the freshest local produce to ensure a dining experience that is both wholesome and flavorful.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        Dive into our diverse menu, featuring a fusion of traditional Goan curries, European-inspired salads, and homemade pastries. Every bite tells a story, whether it&apos;s the spice-infused aromas of Goa or the delicate finesse of European cuisine. Our commitment to healthy, satisfying meals means there&apos;s something delightful for every palate.
                                    </p>
                                    <p>
                                        At Zithai, we’re not just serving meals; Our dedication to personalized service ensures that every visit is unique. We strive to craft a space where comfort meets elegance, where every guest can unwind and savor not just great food, but also the joy of togetherness.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        We warmly invite you to step into our world, where every meal is a celebration, and every guest is part of our family. Whether you&apos;re seeking a quick, savory bite, a leisurely brunch, or an intimate dinner, Zithai is your destination. We&apos;re excited to welcome you and share the flavors and stories that make our café a home away from home.
                                    </p>
                                    <div className="pt-4">
                                        <p className="font-semibold pb-4 text-gray-800">Follow us on Instagram and Facebook to stay up to date with news and events.</p>
                                        <div className="space-x-2">
                                            <Link href='https://www.instagram.com/Zithai/' target="_blank" className={buttonVariants({ variant: "default", size: "sm" })}>INSTAGRAM</Link>
                                            <Link href='https://www.facebook.com/Zithai/' target="_blank" className={buttonVariants({ variant: "default", size: "sm" })}>FACEBOOK</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutUs;