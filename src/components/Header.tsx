import { 
    Search, 
    UserCircle, 
    PrintDollar 
} from "@boxicons/react";
import Link from "next/link";
import Image from "next/image";

// Export Header ({ Root, Docs, Admin })
export default function Header() {
    return (
        <header id="__header">
            <div className="inner">
                <Link href={"/"} className="lsb site-logo">
                    <Image src={"/images/master-logo.png"} alt="Omdb" height={1920} width={1080} loading="eager"></Image>
                </Link>
                <div className="msb main-menu">
                    <Link href={"/home"} className="elm">Home</Link>
                    <Link href={"/pricing-tiers"} className="elm">Pricing</Link>
                    <Link href={"/docs/getting-started"} className="elm active">Docs</Link>
                    <Link href={"/get-api-key"} className="elm">API Key</Link>
                    <Link href={"/contact"} className="elm">Contact</Link>
                </div>
                <div className="rsb">
                    <div id="trigger-search">
                        <Search size="xs" className="boxi-kdb-search"/>
                        <span className="placeholder-text">Search</span>
                        <kbd className="kbd">⌘K</kbd>
                    </div>
                    <Link href={"/signup"} className="hua-btn get-started">
                        <UserCircle size="xs" className="boxi-user-circle"/>
                        Get Started
                    </Link>
                    <Link href={"/patreon-donation"} target="_blank" className="hua-btn donation">
                        <PrintDollar size="xs" className="boxi-donation"/>
                        Donation
                    </Link>
                </div>
            </div>
        </header>
    );
}