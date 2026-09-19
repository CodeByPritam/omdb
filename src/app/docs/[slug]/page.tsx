import type { Metadata } from "next";
import "@/styles/docs.css";
import LeftSideAsideBar from "@/components/docs/LeftSideAsideBar";

// Omdb ({ Meta })
export const metadata: Metadata = {
    title: "Omdb API Documentation - The Open Movie Database For Developers.",
    description: "The OMDb API is a RESTful web service to obtain movie and other media information.",
};

// Export Page ({ Docs })
export default async function Docs({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return (
        <section id="__docs">
            <LeftSideAsideBar/>
            <div className="main">{slug}</div>
            <aside id="asidebar-right">Right Aside Bar</aside>
        </section>
    );
}