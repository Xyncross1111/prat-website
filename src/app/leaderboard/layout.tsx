import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "@/app/globals.css";
import ParticleBackground from "@/components/particle-background";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
    title: "Section Cup 🏆⭐",
    description: "P'25 Section Cup Leaderboard",
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
                <ParticleBackground />
                {children}
            </body>
        </html>
    );
}
