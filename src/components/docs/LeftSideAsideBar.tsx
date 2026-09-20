"use client";

// Import Resources
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from 'next/link';
import {
  BookOpen, Tachometer, Lock, Movie, Search, 
  Layers, PlayCircle, Group, Folder, Compass, 
  Star, MessageBubbleReply, BookLibrary, 
  UserCircle, Key, ListOl, Filter, SwapDiagonal, 
  AlertCircle, Timer, Bracket, Plus, Minus
} from "@boxicons/react";

// Define Section Paths
function section_paths() {
    return {
        apis: ["/docs/titles", "/docs/search", "/docs/seasons", "/docs/episodes", "/docs/people", "/docs/collections", "/docs/discover", "/docs/recommendations"],
        advanced: ["/docs/reviews", "/docs/user-library", "/docs/developer-account", "/docs/api-keys"],
        reference: ["/docs/pagination", "/docs/filtering", "/docs/sorting", "/docs/error-codes", "/docs/rate-limit", "/docs/response-format"],
    };
}

// Export Docs ({ Left Side Aside Bar })
export default function LeftSideAsideBar() {
    const getLeftSideBarLinkClass = (href: string) => ["sidebar-link", isActive(href) && "active"].filter(Boolean).join(" ");
    const pathname = usePathname();
    const isActive = (href: string) => pathname === href;
    const [openApis, setOpenApis] = useState(() => section_paths().apis.includes(pathname));
    const [openAdvanced, setOpenAdvanced] = useState(() => section_paths().advanced.includes(pathname));
    const [openReference, setOpenReference] = useState(() => section_paths().reference.includes(pathname));
    useEffect(() => {
        if (section_paths().apis.includes(pathname)) {
            setOpenApis(true);
            setOpenAdvanced(false);
            setOpenReference(false);
        }
        if (section_paths().advanced.includes(pathname)) {
            setOpenApis(false);
            setOpenAdvanced(true);
            setOpenReference(false);
        }
        if (section_paths().reference.includes(pathname)) {
            setOpenApis(false);
            setOpenAdvanced(false);
            setOpenReference(true);
        }
    }, [pathname]);
    
    // Return
    return (
        <aside id="asidebar-left">
            <div className="lsab-list">

                <Link href={"/docs/getting-started"} className={getLeftSideBarLinkClass("/docs/getting-started")}>
                    <BookOpen size="xs" className="boxi-lsab-icon"/>
                    Getting Started
                </Link>

                <Link href={"/docs/check-usage"} className={getLeftSideBarLinkClass("/docs/check-usage")}>
                    <Tachometer size="xs" className="boxi-lsab-icon"/>
                    Check Usage
                </Link>

                <Link href={"/docs/authentication"} className={getLeftSideBarLinkClass("/docs/authentication")}>
                    <Lock size="xs" className="boxi-lsab-icon"/>
                    Authentication
                </Link>

                <div className={openApis ? "menu-section open" : "menu-section"}>
                    <button type="button" className="menu-button" onClick={() => setOpenApis((value) => !value)} aria-expanded={openApis}>
                        <span className="btn-name">APIs</span>
                        {openApis ? (<Minus size="xs" className="boxi-lsab-icon"/>) : (<Plus size="xs" className="boxi-lsab-icon"/>)}
                    </button>
                    <div className="menu-content">
                        <div className="menu-content-inner">

                            <Link href={"/docs/titles"} className={getLeftSideBarLinkClass("/docs/titles")}>
                                <Movie size="xs" className="boxi-lsab-icon"/>
                                Titles
                            </Link>

                            <Link href={"/docs/search"} className={getLeftSideBarLinkClass("/docs/search")}>
                                <Search size="xs" className="boxi-lsab-icon"/>
                                Search
                            </Link>

                            <Link href={"/docs/seasons"} className={getLeftSideBarLinkClass("/docs/seasons")}>
                                <Layers size="xs" className="boxi-lsab-icon"/>
                                Seasons
                            </Link>

                            <Link href={"/docs/episodes"} className={getLeftSideBarLinkClass("/docs/episodes")}>
                                <PlayCircle size="xs" className="boxi-lsab-icon"/>
                                Episodes
                            </Link>

                            <Link href={"/docs/people"} className={getLeftSideBarLinkClass("/docs/people")}>
                                <Group size="xs" className="boxi-lsab-icon"/>
                                People
                            </Link>

                            <Link href={"/docs/collections"} className={getLeftSideBarLinkClass("/docs/collections")}>
                                <Folder size="xs" className="boxi-lsab-icon"/> 
                                Collections
                            </Link>

                            <Link href={"/docs/discover"} className={getLeftSideBarLinkClass("/docs/discover")}>
                                <Compass size="xs" className="boxi-lsab-icon"/>
                                Discover
                            </Link>

                            <Link href={"/docs/recommendations"} className={getLeftSideBarLinkClass("/docs/recommendations")}>
                                <Star size="xs" className="boxi-lsab-icon"/>
                                Recommendations
                            </Link>

                        </div>
                    </div>
                </div>

                <div className={openAdvanced ? "menu-section open" : "menu-section"}>
                    <button type="button" className="menu-button" onClick={() => setOpenAdvanced((value) => !value)} aria-expanded={openAdvanced}>
                        <span className="btn-name">Advanced</span>
                        {openAdvanced ? (<Minus size="xs" className="boxi-lsab-icon"/>) : (<Plus size="xs" className="boxi-lsab-icon"/>)}
                    </button>
                    <div className="menu-content">
                        <div className="menu-content-inner">

                            <Link href={"/docs/reviews"} className={getLeftSideBarLinkClass("/docs/reviews")}>
                                <MessageBubbleReply size="xs" className="boxi-lsab-icon"/>
                                Reviews
                            </Link>

                            <Link href={"/docs/user-library"} className={getLeftSideBarLinkClass("/docs/user-library")}>
                                <BookLibrary size="xs" className="boxi-lsab-icon"/>
                                User Library
                            </Link>

                            <Link href={"/docs/developer-account"} className={getLeftSideBarLinkClass("/docs/developer-account")}>
                                <UserCircle size="xs" className="boxi-lsab-icon"/>
                                Developer Account
                            </Link>

                            <Link href={"/docs/api-keys"} className={getLeftSideBarLinkClass("/docs/api-keys")}>
                                <Key size="xs" className="boxi-lsab-icon"/>
                                Api Keys
                            </Link>

                        </div>
                    </div>
                </div>

                <div className={openReference ? "menu-section open" : "menu-section"}>
                    <button type="button" className="menu-button" onClick={() => setOpenReference((value) => !value)} aria-expanded={openReference}>
                        <span className="btn-name">Reference</span>
                        {openReference ? (<Minus size="xs" className="boxi-lsab-icon"/>) : (<Plus size="xs" className="boxi-lsab-icon"/>)}
                    </button>
                    <div className="menu-content">
                        <div className="menu-content-inner">

                            <Link href={"/docs/pagination"} className={getLeftSideBarLinkClass("/docs/pagination")}>
                                <ListOl size="xs" className="boxi-lsab-icon"/>
                                Pagination
                            </Link>

                            <Link href={"/docs/filtering"} className={getLeftSideBarLinkClass("/docs/filtering")}>
                                <Filter size="xs" className="boxi-lsab-icon"/>
                                Filtering
                            </Link>

                            <Link href={"/docs/sorting"} className={getLeftSideBarLinkClass("/docs/sorting")}>
                                <SwapDiagonal size="xs" className="boxi-lsab-icon"/>
                                Sorting
                            </Link>

                            <Link href={"/docs/error-codes"} className={getLeftSideBarLinkClass("/docs/error-codes")}>
                                <AlertCircle size="xs" className="boxi-lsab-icon"/>
                                Error Codes
                            </Link>

                            <Link href={"/docs/rate-limit"} className={getLeftSideBarLinkClass("/docs/rate-limit")}>
                                <Timer size="xs" className="boxi-lsab-icon"/>
                                Rate Limit
                            </Link>

                            <Link href={"/docs/response-format"} className={getLeftSideBarLinkClass("/docs/response-format")}>
                                <Bracket size="xs" className="boxi-lsab-icon"/>
                                Response Format
                            </Link>

                        </div>
                    </div>
                </div>

            </div>
        </aside>
    );
}