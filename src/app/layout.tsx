import "~/styles/globals.scss";
import '~/lib/fontawesome'; // Import FontAwesome configuration

import React from 'react';
import { Poppins } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";
import '@fortawesome/fontawesome-svg-core/styles.css';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: "--font-poppins",
    display: 'swap',
});

export const metadata = {
    title: "Zithai Sweets",
    description: "Nestled in the heart of Devonport, Zithai is a cherished destinations for locals and visitors. Offering a unique fusion of Goan and European cuisine.",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${poppins.variable} bg-[#F7F7F7]`}>
            <head>
            </head>
            <body className={poppins.className}>
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
