import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/Projects/projectCard";
import Intro from "./components/Intro/page";
import Header from "./components/header/page";
import Experience from "./components/Experience/page";

export default function Home() {
  return (
    <main className="bg-jbgGrey">
      <Header />
      <Intro />
      <Experience />
      <ProductCard />
    </main>
  );
}
