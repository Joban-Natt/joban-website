import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import ProductCard from "./components/Projects/projectCard";
import Intro from "./components/Intro/page";
import Header from "./components/header/page";
import Experience from "./components/Experience/page";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <main className="bg-jbgGrey">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Intro />
      <Experience />
      <ProductCard />
      <Footer />
    </main>
  );
}
