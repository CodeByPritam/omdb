import { redirect } from "next/navigation";

// Export Redirect To Docs ({ `/docs/getting-started` })
export default function Redirect2Docs() {
    redirect("/docs/getting-started");
}