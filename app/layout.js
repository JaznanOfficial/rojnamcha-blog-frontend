import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import "./globals.css";
import { Noto_Serif } from "next/font/google";

const noto = Noto_Serif({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
});

export const metadata = {
    title: "Rojnamcha-The story of a programmer",
    description: "The told and untold story and history of a programmer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={noto.className}>
            <body>
                <Navigation />
                {children}
            </body>
        </html>
    );
}
