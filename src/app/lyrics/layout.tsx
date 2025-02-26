import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "@/app/globals.css";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
    title: "Lyrics",
    description: "Jamm to your favourite songs",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            {/* className="relative" */}
            <body>
                <Analytics />
                <SpeedInsights />
                <Navbar short={true} />
                {children}
            </body>
        </html>
    );
}
