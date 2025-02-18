import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
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
                <Navbar short={true} />
                <ParticleBackground />
                {children}
            </body>
        </html>
    );
}
