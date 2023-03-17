import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Posts from "./components/Posts";

export default function Home() {
    return (
        <div>
            <Header />
            <Posts />
        </div>
    );
}
