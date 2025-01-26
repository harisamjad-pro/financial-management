import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const interFont = localFont({
    variable: "--font-inter-sans",
    src: [
        { path: "./fonts/InterThin.ttf", weight: "100" },
        { path: "./fonts/InterExtraLight.ttf", weight: "200" },
        { path: "./fonts/InterLight.ttf", weight: "300" },
        { path: "./fonts/InterRegular.ttf", weight: "400" },
        { path: "./fonts/InterMedium.ttf", weight: "500" },
        { path: "./fonts/InterSemiBold.ttf", weight: "600" },
        { path: "./fonts/InterBold.ttf", weight: "700" },
        { path: "./fonts/InterExtraBold.ttf", weight: "800" },
        { path: "./fonts/InterBlack.ttf", weight: "900" },
    ]
});

export const metadata: Metadata = {
    title: "Financial Management",
    description: "Advanced Finance & Ads Dashboard using React, Next.js, and Tailwind CSS. This interactive platform enables users to track their finances effectively, manage ad campaigns, and make informed, data-driven decisions.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={`${interFont.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
