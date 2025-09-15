import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import { TextSection } from "../ui/section";

const AboutUs = () => {
    return (
        <>
            <section>
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="py-8 md:py-12">
                        <div className="max-w-screen-2xl mx-auto" data-aos-id-tabs="">
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
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                    </p>
                                    <p>
                                        At Zithai, we’re not just serving meals; Our dedication to personalized service ensures that every visit is unique. We strive to craft a space where comfort meets elegance, where every guest can unwind and savor not just great food, but also the joy of togetherness.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Quisquam dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
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