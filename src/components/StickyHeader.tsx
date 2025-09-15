"use client";

import Link from "next/link";
import { cn } from "~/utils/utils";
import { useScrollPosition } from "~/hooks/useScrollPosition";
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface StickyHeaderProps {
    className?: string;
}

const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Menu', href: '/menu', current: false },
    { name: 'Contact', href: '/contact', current: false },
];

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
            <div className="bg-[#ffe6af] text-black text-xs px-4 lg:px-16 py-2 flex justify-between shadow-sm">
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
                <div className="text-sm font-playlist tracking-wider">
                    Zithai
                </div>
            </div>

            {/* Navigation bar */}
            <Disclosure as="nav" className="bg-white/95 backdrop-blur-sm text-black px-4 lg:px-16 py-3 border-t border-gray-200">
                {({ open }) => (
                    <>
                        <div className="flex justify-between items-center">
                            <Link href="/" className="text-xl font-playlist tracking-wider">
                                Zithai
                            </Link>

                            <div className="hidden lg:flex space-x-6">
                                <Link href="/" className="text-sm font-normal tracking-wide hover:text-[#C7A17A] transition-colors">HOME</Link>
                                <Link href="/about" className="text-sm font-normal tracking-wide hover:text-[#C7A17A] transition-colors">ABOUT</Link>
                                <Link href="/menu" className="text-sm font-normal tracking-wide hover:text-[#C7A17A] transition-colors">MENUS</Link>
                                <Link href="/contact" className="text-sm font-normal tracking-wide hover:text-[#C7A17A] transition-colors">CONTACT</Link>
                            </div>

                            {/* Mobile menu button */}
                            <Disclosure.Button className="lg:hidden p-2 text-black hover:bg-gray-100 rounded-md">
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </Disclosure.Button>
                        </div>

                        {/* Mobile menu panel */}
                        <Disclosure.Panel className="lg:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2 bg-white rounded-md shadow-lg mt-2 border">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={cn(
                                            item.current ? 'bg-[#1A191B] text-white' : 'text-black hover:bg-[#C7A17A] hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium transition-colors'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    );
};