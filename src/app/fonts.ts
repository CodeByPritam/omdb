import {
    Poppins,
    Inter,
    Source_Sans_3,
    Cascadia_Code,
    Geist,
    Roboto,
    Karla,
    Montserrat,
    Sora,
} from 'next/font/google';

// Load Font ({ Poppins })
export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    variable: '--font-poppins',
    display: 'swap',
});

// Load Font ({ Inter })
export const inter = Inter({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    variable: '--font-inter',
    display: 'swap',
});

// Load Font ({ Source Sans 3 })
export const sourceSans3 = Source_Sans_3({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    variable: '--font-source-sans-3',
    display: 'swap',
});

// Load Font ({ Cascadia Code })
export const cascadiaCode = Cascadia_Code({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700'],
    style: ['normal', 'italic'],
    variable: '--font-cascadia-code',
    display: 'swap',
});

// Load Font ({ Geist })
export const geist = Geist({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    variable: '--font-geist',
    display: 'swap',
});

// Load Font ({ Roboto })
export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '700', '800', '900'],
    style: ['normal', 'italic'],
    variable: '--font-roboto',
    display: 'swap',
});

// Load Font ({ Karla })
export const karla = Karla({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    style: ['normal', 'italic'],
    variable: '--font-karla',
    display: 'swap',
});

// Load Font ({ Montserrat })
export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    variable: '--font-montserrat',
    display: 'swap',
});

// Load Font ({ Sora })
export const sora = Sora({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    variable: '--font-sora',
    display: 'swap',
});