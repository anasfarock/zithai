import Cake1 from "@/images/cake-1.png";
import Cake2 from "@/images/cake-2.png";
import { ImageTextSection } from "../ui/section";
import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";

const Cakes = () => {
    return (
        <>
            <section className="py-16">
                <div className="mx-auto px-4 sm:px-6 max-w-7xl">
                    <div className="bg-[#B8936C] rounded-3xl p-8 md:p-12 text-white">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            {/* Image Section */}
                            <div className="relative h-96 rounded-2xl overflow-hidden">
                                <Image
                                    src={Cake1}
                                    alt="Delicious Cake"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-5xl font-bold text-black">
                                    Artisan Cakes & Pastries
                                </h2>

                                <p className="text-lg leading-relaxed text-black/80">
                                    With over 25 years of experience, and a former leading pastry chef of the Disney cruise liner. We take pride in offering a wide variety of cakes and pastries that are made from scratch with the finest ingredients.
                                </p>

                                <p className="text-base leading-relaxed text-black/70">
                                    Our cakes are made with love and care, and we use only the best ingredients to ensure that they taste as good as they look.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button
                                        variant="secondary"
                                        size="lg"
                                        className="bg-black/10 border-2 border-black/20 text-black hover:bg-black/20 hover:text-black rounded-full"
                                    >
                                        Learn More
                                    </Button>
                                    <Button
                                        size="lg"
                                        className="bg-black text-white hover:bg-black/80 rounded-full"
                                    >
                                        Order Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cakes;