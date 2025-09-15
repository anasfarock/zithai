"use client";

import Image, { StaticImageData } from "next/image";

import PaperSvg from "@/paper.svg";
import LogoIcon from "@/images/logo-icon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";
import { Button, buttonVariants } from "./frontend/ui/button";
import NavBar from "./Navbar";
import { StickyHeader } from "./StickyHeader";

export const MiniHeader = (props: { title?: string, heroImg: StaticImageData }) => {
    return (
        <>
            <StickyHeader />
            <div className="bg-[#171717] text-white text-xs px-4 lg:px-16 py-3 flex justify-between">
                <div className="flex space-x-4 lg:space-x-8">
                    <Link className="items-center flex hover:text-[#C7A17A]" href="https://maps.app.goo.gl/aDk2A5ntDKVtAzSH9" target="_blank">
                        <span className="material-symbols-filled pr-1 lg:pr-2">
                            location_on
                        </span>
                        <span className="hidden lg:inline">3/18 Clarence St, Devonport, Auckland</span>
                        <span className="lg:hidden">Devonport</span>
                    </Link>
                    <Link className="items-center flex hover:text-[#C7A17A]" href="tel:+094454173">
                        <span className="material-symbols-filled pr-1 lg:pr-2">
                            phone_iphone
                        </span>
                        09 445 4173
                    </Link>
                    <Link className="items-center hover:text-[#C7A17A] hidden xl:flex" href="mailto:eat@Zithai.co.nz">
                        <span className="material-symbols-filled pr-1 lg:pr-2">
                            mail
                        </span>
                        eat@Zithai.co.nz
                    </Link>
                </div>
                <div className="space-x-4 flex text-[1rem] items-center">
                    <Link href="https://www.facebook.com/Zithai/" className="hidden xl:block"><FontAwesomeIcon icon={faFacebook} /></Link>
                    <Link href="https://www.instagram.com/Zithai/" className="hidden xl:block"><FontAwesomeIcon icon={faInstagram} /></Link>
                </div>
            </div>

            <header
                className="relative overflow-hidden bg-cover bg-no-repeat block"
            >
                <NavBar className="bg-black" />
            </header>
        </>
    );
}

const Header = (props: { title?: string }) => {
    return (
        <>
            <StickyHeader />
            <div className="bg-[#ffe6af] text-black text-xs px-4 lg:px-16 py-3 flex justify-between">
                <div className="flex space-x-4 lg:space-x-8">
                    <Link className="items-center flex hover:text-[#C7A17A]" href="https://maps.app.goo.gl/aDk2A5ntDKVtAzSH9" target="_blank">
                        <span className="material-symbols-filled pr-1 lg:pr-2">
                            location_on
                        </span>
                        <span className="hidden lg:inline">3/18 Clarence St, Devonport, Auckland</span>
                        <span className="lg:hidden">Devonport</span>
                    </Link>
                    <Link className="items-center flex hover:text-[#C7A17A]" href="tel:+094454173">
                        <span className="material-symbols-filled pr-1 lg:pr-2">
                            phone_iphone
                        </span>
                        09 445 4173
                    </Link>
                    <Link className="items-center hover:text-[#C7A17A] hidden xl:flex" href="mailto:eat@Zithai.co.nz">
                        <span className="material-symbols-filled pr-1 lg:pr-2">
                            mail
                        </span>
                        eat@Zithai.co.nz
                    </Link>
                </div>
                <div className="space-x-4 flex text-[1rem] items-center">
                    <Link href="https://www.facebook.com/Zithai/" className="hidden xl:block"><FontAwesomeIcon icon={faFacebook} /></Link>
                    <Link href="https://www.instagram.com/Zithai/" className="hidden xl:block"><FontAwesomeIcon icon={faInstagram} /></Link>
                </div>
            </div>

            <header
                className="relative overflow-hidden bg-cover bg-no-repeat block"
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="block w-full h-[100vh] object-cover"
                >
                    <source src="/videos/hero.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <NavBar primary={true} />

                <nav className="absolute left-0 top-0 z-10 h-full w-full flex flex-col space-y-8 justify-center items-center">
                    <div className="w-full flex flex-col justify-center items-center text-center text-white">
                        <Image
                            src={LogoIcon}
                            alt="Logo Icon"
                            height={180}
                        />
                        <h1 className="text-[80px] w-full font-playlist pb-6">{props.title ? props.title : "Zithai"}</h1>
                        <div className="space-x-6">
                            <Link className={buttonVariants({ variant: "outline", size: "lg" })} href="/menu">SEE MENU</Link>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="relative z-10">
                <div className="absolute bottom-0 left-0 w-full">
                    <Image
                        src={PaperSvg}
                        className="w-full"
                        alt="Header Transition"
                        priority
                        width={1920}
                        height={1080}
                    />
                </div>
            </div>
        </>
    );
}

export default Header;