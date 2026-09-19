"use client";

// Import
import endpoints from "@/lib/endpoints";

// Export Docs ({ Right Side Aside Bar })
export default function RightSideAsideBar({ slug }: { slug: string }) {
    const auth = endpoints.authentication;
    return (
        <aside id="asidebar-right">
            <div className="rsab-list">

                {slug === 'getting-started' ? ''
                : slug === 'rate-limit' ? ''
                : slug === 'authentiction' ?
                    auth.map((ep) => (
                        <button className="to-prt sidebar-link" key={ep.url}>
                            <span className={`method method-${ep.method.toLowerCase()}`}>{ep.method}</span>
                            <span className="endpoint-title">{ep.name}</span>
                        </button>
                    ))
                : '' }

            </div>
        </aside>
    );
}