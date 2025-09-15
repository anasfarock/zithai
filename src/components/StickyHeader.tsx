"use client";

import Link from "next/link";
import { cn } from "~/utils/utils";
import { useScrollPosition } from "~/hooks/useScrollPosition";

interface StickyHeaderProps {
    className?: string;
}

export const StickyHeader = ({ className }: StickyHeaderProps) => {
    const isScrolled = useScrollPosition(200); // Show after scrolling 200px

    return (
        <div
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
                isScrolled
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-full opacity-0",
                className
            )}
        >
            {/* Top contact bar */}
            <div className="bg-[#1A191B] text-white text-xs px-4 lg:px-16 py-2 flex justify-between shadow-sm">
                <div className="flex space-x-4 lg:space-x-8">
                    <Link className="items-center flex hover:text-[#C7A17A] hidden sm:flex" href="https://maps.app.goo.gl/aDk2A5ntDKVtAzSH9" target="_blank">
                        <span className="material-symbols-filled pr-1 lg:pr-2 text-xs">
                            location_on
                        </span>
                        <span className="hidden lg:inline">3/18 Clarence St, Devonport, Auckland</span>
                        <span className="lg:hidden">Devonport</span>
                    </Link>
                    <Link className="items-center flex hover:text-[#C7A17A]" href="tel:+094454173">
                        <span className="material-symbols-filled pr-1 lg:pr-2 text-xs">
                            phone_iphone
                        </span>
                        09 445 4173
                    </Link>
                </div>
                <div className="text-sm font-medium tracking-wider">
                    Zithai
                </div>
            </div>

            {/* Navigation bar */}
            <nav className="bg-white/95 backdrop-blur-sm text-black px-4 lg:px-16 py-3 border-t border-gray-200">
                <div className="flex justify-between items-center">
                    <div className="hidden lg:flex space-x-6">
                        <Link href="/" className="text-sm font-normal tracking-wide hover:text-[#C7A17A] transition-colors">HOME</Link>
                    </div>

                    <Link href="/" className="text-xl font-medium tracking-wider flex-1 lg:flex-none text-center">
                        Zithai
                    </Link>

                    <div className="hidden lg:flex space-x-6">
                        <Link href="/about" className="text-sm font-normal tracking-wide hover:text-[#C7A17A] transition-colors">ABOUT</Link>
                        <Link href="/menu" className="text-sm font-normal tracking-wide hover:text-[#C7A17A] transition-colors">MENUS</Link>
                        <Link href="/contact" className="text-sm font-normal tracking-wide hover:text-[#C7A17A] transition-colors">CONTACT</Link>
                    </div>

                    {/* Mobile menu button */}
                    <button className="lg:hidden p-2">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </nav>
        </div>
    );
};