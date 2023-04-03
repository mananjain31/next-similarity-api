import { Inter } from "next/font/google";
import Paragraph from "../components/ui/Paragraph";
import LargeHeading from "../components/ui/LargeHeading";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <LargeHeading size="lg">Large Variant</LargeHeading>
      <LargeHeading>Default Variant</LargeHeading>
      <Paragraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A repellendus
        aspernatur est minima obcaecati quos error aliquam dolores labore
        deleniti culpa dicta voluptatibus aut hic, rerum, accusamus nulla
        cupiditate amet.
      </Paragraph>
      <LargeHeading size="sm">Small Variant</LargeHeading>
      <Paragraph size="sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A repellendus
        aspernatur est minima obcaecati quos error aliquam dolores labore
        deleniti culpa dicta voluptatibus aut hic, rerum, accusamus nulla
        cupiditate amet.
      </Paragraph>
    </main>
  );
}
