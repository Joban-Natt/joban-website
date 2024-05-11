import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/Projects/projectCard";
import Intro from "./components/Intro/introPart";
import Header from "./components/header/page";

export default function Home() {
  return (
    <main className="bg-jbgGrey">
      <Header />
      <Intro />
      <ProductCard />
    </main>
  );
}
