"use client";

// Import Resources
import Link from 'next/link';
import { usePathname } from "next/navigation";
import {
  BookContent, Tachometer, Lock,
  Movie, Search, Layers, PlayCircle,
  Group, Folder, Grid, Tag, Building,
  NetworkChart, Globe, Translate, Compass,
  MessageDetail, Star, BookOpen,
} from "@boxicons/react";

// Export Docs ({ Left Side Aside Bar })
export default function LeftSideAsideBar() {
    const pathname = usePathname();
    const isActive = (href: string) => pathname === href;

    // Return
    return (
        <aside id="asidebar-left">
            <div className="lsab-list">
                <Link href={"/docs/getting-started"} className={`sidebar-link ${isActive("/docs/getting-started") ? "active" : ""}`}>
                    <BookContent size="xs" className="boxi-lsab-gs"/>
                    Getting Started
                </Link>
                <Link href={"/docs/rate-limit"} className={`sidebar-link ${isActive("/docs/rate-limit") ? "active" : ""}`}>
                    <Tachometer size="xs" className="boxi-lsab-rl"/>
                    Rate Limit
                </Link>
                <Link href={"/docs/authentiction"} className={`sidebar-link ${isActive("/docs/authentiction") ? "active" : ""}`}>
                    <Lock size="xs" className="boxi-lsab-auth"/>
                    Authentiction
                </Link>
                <Link href={"/docs/titles"} className={`sidebar-link ${isActive("/docs/titles") ? "active" : ""}`}>
                    <Movie size="xs" className="boxi-lsab-titles"/>
                    Titles
                </Link>
                <Link href={"/docs/search"} className={`sidebar-link ${isActive("/docs/search") ? "active" : ""}`}>
                    <Search size="xs" className="boxi-lsab-search"/>
                    Search
                </Link>
                <Link href={"/docs/seasons"} className={`sidebar-link ${isActive("/docs/seasons") ? "active" : ""}`}>
                    <Layers size="xs" className="boxi-lsab-seasons"/>
                    Seasons
                </Link>
                <Link href={"/docs/episodes"} className={`sidebar-link ${isActive("/docs/episodes") ? "active" : ""}`}>
                    <PlayCircle size="xs" className="boxi-lsab-episodes"/>
                    Episodes
                </Link>
                <Link href={"/docs/people"} className={`sidebar-link ${isActive("/docs/people") ? "active" : ""}`}>
                    <Group size="xs" className="boxi-lsab-people"/>
                    People
                </Link>
                <Link href={"/docs/collections"} className={`sidebar-link ${isActive("/docs/collections") ? "active" : ""}`}>
                    <Folder size="xs" className="boxi-lsab-collections"/> 
                    Collections
                </Link>
                <Link href={"/docs/generes"} className={`sidebar-link ${isActive("/docs/generes") ? "active" : ""}`}>
                    <Grid size="xs" className="boxi-lsab-generes"/>
                    Generes
                </Link>
                <Link href={"/docs/keywords"} className={`sidebar-link ${isActive("/docs/keywords") ? "active" : ""}`}>
                    <Tag size="xs" className="boxi-lsab-tag"/>
                    Keywords/Tags
                </Link>
                <Link href={"/docs/companies"} className={`sidebar-link ${isActive("/docs/companies") ? "active" : ""}`}>
                    <Building size="xs" className="boxi-lsab-companies"/>
                    Companies
                </Link>
                <Link href={"/docs/networks"} className={`sidebar-link ${isActive("/docs/networks") ? "active" : ""}`}>
                    <NetworkChart size="xs" className="boxi-lsab-networks"/>
                    Networks
                </Link>
                <Link href={"/docs/countries"} className={`sidebar-link ${isActive("/docs/countries") ? "active" : ""}`}>
                    <Globe size="xs" className="boxi-lsab-countries"/>
                    Countries
                </Link>
                <Link href={"/docs/languages"} className={`sidebar-link ${isActive("/docs/languages") ? "active" : ""}`}>
                    <Translate size="xs" className="boxi-lsab-lang"/>
                    Languages
                </Link>
                <Link href={"/docs/discover"} className={`sidebar-link ${isActive("/docs/discover") ? "active" : ""}`}>
                    <Compass size="xs" className="boxi-lsab-discover"/>
                    Discover
                </Link>
                <Link href={"/docs/reviews"} className={`sidebar-link ${isActive("/docs/reviews") ? "active" : ""}`}>
                    <MessageDetail size="xs" className="boxi-lsab-reviews"/>
                    Reviews
                </Link>
                <Link href={"/docs/recommendations"} className={`sidebar-link ${isActive("/docs/recommendations") ? "active" : ""}`}>
                    <Star size="xs" className="boxi-lsab-similers"/>
                    Recommendations
                </Link>
                <Link href={"/docs/reference"} className={`sidebar-link ${isActive("/docs/reference") ? "active" : ""}`}>
                    <BookOpen size="xs" className="boxi-lsab-ref"/>
                    Reference
                </Link>
            </div>
        </aside>
    );
}