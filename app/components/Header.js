import React from "react";
import { Crete_Round } from "next/font/google";

const crete = Crete_Round({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
});

const Header = () => {
    return (
        <div className="my-5">
            <h1
                className={`${crete.className} w-75 mx-auto text-center `}
                style={{ color: "#152035", fontSize: "60px", marginBottom: "12rem" }}
            >
                Taking control of your daily life is easy when you know how!
            </h1>
        </div>
    );
};

export default Header;
