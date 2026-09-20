"use client";

// Import
import data from "@/lib/data";

// Export Docs ({ Right Side Aside Bar })
export default function RightSideAsideBar({ slug }: { slug: string }) {
    const docs = data.docs;
    const docKey = slug as keyof typeof docs;
    return (
        <aside id="asidebar-right">
            <div className="rsab-list">
                
                {docKey in docs ? (
                    docs[docKey].map((ep, index) => (
                        <button className="to-prt" key={index}>
                            <span className={`method method-${ep.method.toLowerCase()}`}>{ep.method}</span>
                            <span className="endpoint-title">{ep.name}</span>
                        </button>
                    ))
                ) 
                : slug === "getting-started" ? (
                    <div>Getting Started</div>
                ) 
                : slug === "rate-limit" ? (
                    <div>Rate Limit</div>
                ) 
                : null }

            </div>
        </aside>
    );
}