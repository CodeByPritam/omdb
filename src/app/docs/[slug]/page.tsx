import type { Metadata } from "next";
import "@/styles/docs.css";
import LeftSideAsideBar from "@/components/docs/LeftSideAsideBar";

// NextJS ({ Metas For Docs })
export const metadata: Metadata = {
    title: "Omdb Api Documentation - The Open Movie Database Api Documentation for Developers.",
    description: "Official documentation for the OMDb API, a RESTful web service for accessing movie and other media information..",
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