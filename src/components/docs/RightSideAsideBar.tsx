"use client";

// Export Docs ({ Right Side Aside Bar })
export default function RightSideAsideBar({ slug }: { slug: string }) {
    return (
        <aside id="asidebar-right">
            <div className="rsab-list">
                
                {/* Dummy Button: Altering Slug */}
                <button className="to-prt" key='eyjh...'>
                    <span className={`method method-get`}>SLUG</span>
                    <span className="endpoint-title">{slug.replaceAll("-", " ").replace(/\b\w/g, char => char.toUpperCase())}</span>
                </button>

            </div>
        </aside>
    );
}