'use client';

// Importing styles and components
import Navbar from './components/navbar'; // Added import for Navbar
import Hero from './components/hero'; // Added import for Hero
import About from './components/about'; // Added import for About
import Pricing from './components/pricing'; // Added import for Pricing
import FooterMenu from './components/footer-menu'; // Corrected import for FooterMenu
import Footer from './components/footer'; // Added import for About

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Pricing />
      <FooterMenu />
      <Footer />
    </>
  );
}
