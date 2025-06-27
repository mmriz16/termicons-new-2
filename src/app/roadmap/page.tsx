import type { Metadata } from 'next';
import Navbar from '../components/navbar';
import Roadmap from '../components/roadmap';
import FooterMenu from '../components/footer-menu';
import Footer from '../components/footer';

export const metadata: Metadata = {
  title: 'Termicons | Roadmap',
  description: 'See what\'s coming next for Termicons and help shape our future',
};

export default function RoadmapPage() {
  return (
    <>
      <Navbar />
      <Roadmap />
      <FooterMenu />
      <Footer />
    </>
  );
}
