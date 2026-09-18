import type { NextConfig } from "next";

// Define ({ NextJS Config })
const nextConfig: NextConfig = {};

// Export ({ NextJS Config })
export default nextConfig;

// Enable Calling ({ getCloudflareContext() }) In ({ next dev })
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();