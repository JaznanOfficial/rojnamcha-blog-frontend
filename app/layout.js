import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import "./globals.css";

export const metadata = {
    title: "Rojnamcha-The story of a programmer",
    description: "The told and untold story and history of a programmer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navigation />
                {children}
            </body>
        </html>
    );
}
