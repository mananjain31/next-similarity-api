import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Paragraph from "./components/ui/Paragraph";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-red-700">
      <Paragraph size="small">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A repellendus
        aspernatur est minima obcaecati quos error aliquam dolores labore
        deleniti culpa dicta voluptatibus aut hic, rerum, accusamus nulla
        cupiditate amet.
      </Paragraph>
      <Paragraph size="default">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A repellendus
        aspernatur est minima obcaecati quos error aliquam dolores labore
        deleniti culpa dicta voluptatibus aut hic, rerum, accusamus nulla
        cupiditate amet.
      </Paragraph>
    </main>
  );
}
