'use client';

import Lenis from "lenis";
import { useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar"; // Added import for Navbar
import Hero from "./components/hero"; // Added import for Hero
import About from "./components/about"; // Added import for About
import FooterMenu from "./components/footer-menu"; // Corrected import for FooterMenu
import Footer from "./components/footer"; // Added import for About

export default function Home() {
  return (
    <>
      <Image alt="grid" src="/grid.png" width={1060} height={952} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "/>
      <Navbar />
      <Hero />
      <About />
      <FooterMenu />
      <Footer />
    </>
  );
}
