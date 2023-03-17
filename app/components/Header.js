import React from "react";
import { Anek_Bangla } from "next/font/google";

const anek = Anek_Bangla({
    subsets: ["latin"],
    display: "swap",
    weight: "500",
});

const Header = () => {
    return (
        <div className="my-5">
            <h5
                className={`${anek.className} w-75 mx-auto text-start `}
                style={{ color: "#152035", fontSize: "40px", marginBottom: "12rem" }}
            >
                জীবনকে গভীরভাবে উপলব্ধির শ্রেষ্ঠ অবলম্বন হল আপনার নিজের হাতে লেখা নিজেরই জীবনের
                হাসিকান্না এবং সুখ-দুঃখের রোজনামচা। <br /> যেখানে নিজের আয়নায় নিজেকে দেখতে পাবেন...{" "}
                <br />
                <br />
                এটাও তেমনি এক যাযাবরের জীবনগল্প। যে কিনা জীবন থেকে পালিয়ে বেড়ায় প্রতিটা মুহুর্তে। যে
                আপন করে নিতে পারে না পঁচে গলে ক্ষয়ে যাওয়া চারপাশকে...
            </h5>
        </div>
    );
};

export default Header;
