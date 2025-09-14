import "~/styles/globals.scss";
import '~/lib/fontawesome'; // Import FontAwesome configuration

import React from 'react';
import localFont from "next/font/local";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";
import '@fortawesome/fontawesome-svg-core/styles.css';

const inter = localFont({
    src: [
        {
            path: "../fonts/Inter-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-sans",
    fallback: ["system-ui", "arial"],
});

export const metadata = {
    title: "Go Goa Eatery - Best in Devonport | Cafe",
    description: "Nestled in the heart of Devonport, Go Goa Eatery is a cherished destinations for locals and visitors. Offering a unique fusion of Goan and European cuisine.",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="font-sans ${inter.variable} bg-[#F7F7F7]">
            <head>
            </head>
            <body>
                {children}
                <Analytics />
                <SpeedInsights />

                <Script src="https://www.googletagmanager.com/gtag/js?id=G-W74RFGL9LH" />
                <Script id="google-analytics">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                
                        gtag('config', 'G-W74RFGL9LH');
                    `}
                </Script>
            </body>
        </html>
    );
}
