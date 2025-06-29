import type { Metadata } from 'next';
import Navbar from '../components/navbar';
import FooterMenu from '../components/footer-menu';
import Footer from '../components/footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Termicons | Documentation',
  description: 'See what\'s coming next for Termicons and help shape our future',
};

export default function RoadmapPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-7xl text-center text-sm text-white my-[100px]">
        <div className="flex flex-row gap-[20px] text-left">
          <div className="w-1/4" id="sidemenu">
            <nav className="sticky top-[100px]">
              <ul className="space-y-2">
                <li>
                  <a href="#introduction" className="block text-sm text-[#226CFF] transition-colors duration-200 py-[6px] px-[10px] rounded-lg bg-white/5 border border-white/5">
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="#usage-as-font" className="block text-sm text-white/70 hover:text-white transition-colors duration-200 py-[6px] px-[10px] rounded-lg hover:bg-white/5">
                    Usage as font
                  </a>
                </li>
                <li>
                  <a href="#styling" className="block text-sm text-white/70 hover:text-white transition-colors duration-200 py-[6px] px-[10px] rounded-lg hover:bg-white/5">
                    Styling
                  </a>
                </li>
                <div className="mx-[10px] px-[10px] border-l border-white/10">
                  <li>
                    <a href="#sizing" className="block text-sm text-white/70 hover:text-white transition-colors duration-200 py-[6px] px-[10px] rounded-lg hover:bg-white/5">
                    Sizing
                    </a>
                  </li>
                  <li>
                    <a href="#rotating-flipping" className="block text-sm text-white/70 hover:text-white transition-colors duration-200 py-[6px] px-[10px] rounded-lg hover:bg-white/5">
                    Rotating & Flipping
                    </a>
                  </li>
                  <li>
                    <a href="#list-icons" className="block text-sm text-white/70 hover:text-white transition-colors duration-200 py-[6px] px-[10px] rounded-lg hover:bg-white/5">
                    List Icons
                    </a>
                  </li>
                  <li>
                    <a href="#pulled-icons" className="block text-sm text-white/70 hover:text-white transition-colors duration-200 py-[6px] px-[10px] rounded-lg hover:bg-white/5">
                    Pulled Icons
                    </a>
                  </li>
                  <li>
                    <a href="#border" className="block text-sm text-white/70 hover:text-white transition-colors duration-200 py-[6px] px-[10px] rounded-lg hover:bg-white/5">
                    Border
                    </a>
                  </li>
                </div>
                <li>
                  <a href="#animate-icons" className="block text-sm text-white/70 hover:text-white transition-colors duration-200 py-[6px] px-[10px] rounded-lg hover:bg-white/5">
                    Animate the icons
                  </a>
                </li>
                <hr className="my-4 mx-[10px] border-white/10" />
                <li>
                  <a href="#license" className="block text-sm text-white/70 hover:text-white transition-colors duration-200 py-[6px] px-[10px] rounded-lg hover:bg-white/5">
                    License
                  </a>
                </li>
                <div className="mx-[10px] px-[10px] border-l border-white/10">
                  <li>
                    <a href="#termicons-pro-license" className="block text-sm text-white/70 hover:text-white transition-colors duration-200 py-[6px] px-[10px] rounded-lg hover:bg-white/5">
                        Termicons Pro License
                    </a>
                  </li>
                  <li>
                    <a href="#termicons-free-license" className="block text-sm text-white/70 hover:text-white transition-colors duration-200 py-[6px] px-[10px] rounded-lg hover:bg-white/5">
                        Termicons Free License
                    </a>
                  </li>
                  <li>
                    <a href="#termicons-brand-license" className="block text-sm text-white/70 hover:text-white transition-colors duration-200 py-[6px] px-[10px] rounded-lg hover:bg-white/5">
                        Termicons Brand License
                    </a>
                  </li>
                </div>
              </ul>
            </nav>
          </div>
          <div className="w-3/4 grid gap-[24px]">
            <div id="header">
              <p className="text-sm text-white">Introduction</p>
              <h1 className="text-3xl font-bold text-white">Introduction</h1>
            </div>
            <div className="grid gap-[24px]" id="content">
              <p className="text-sm text-white/80">Welcome to the Termicons documentation</p>
              <hr className="my-4 border-white/10" />
              <h1 id="what-is-termicons" className="text-2xl font-medium text-white">What is Termicons?</h1>
              <p className="text-sm text-white/80 leading-6">Boxicons is a High Quality web icons set which can be used to tune up your UI. In the current version, Boxicons has 3000+ free icons (Regular icons with a Filled variation) which can be used for Personal and Commercial Projects Around 30k icon variations, with 3 weights, 3 styles (Regular, Rounded , Sharp), and Filled versions of each icon.</p>
              <h1 id="what-do-i-get-with-boxicons-pro-version" className="text-2xl font-medium text-white">What do i get with Boxicons Pro Version?</h1>
              <p className="text-sm text-white/80 leading-6">You will get access to 30k+ icon variations with 3 weights, 3 styles and Filled version of each Icon. Access to year long updates , which will include Duotone versions of  each variation. Figma plugin which will be released in a month and NPM  package further down the line. A smooth Icon explorer which gives you the required files in most  formats in seconds, so you don’t have to scroll through the pages. Teams and Enterprise users will be able to grant and revoke access to 8  and 40 users respectively.</p>
              <h1 id="whats-in-the-future" className="text-2xl font-medium text-white">What&apos;s in the Future?</h1>
              <p className="text-sm text-white/80 leading-6">Duotone icons of the current icons will be added next with Figma plugin. New packs will also be added as soon as the duotone is released. We are also working on adding React and Vue packages for the icons.</p>
              <hr className="my-4 border-white/10" />
              <h1 id="need-support" className="text-2xl font-medium text-white">Need Support?</h1>
              <p className="text-sm text-white/80 leading-6">Contact us on <a href="mailto:contact@termicons.com" className="text-[#226CFF]">contact@termicons.com</a> to get issues resolved. We are here to help and will try our best to reply within 24 hrs</p>
            </div>
          </div>
          <div className="w-1/4">
            <nav className="sticky top-[100px] flex flex-col gap-[16px]">
              <h1>On This Page</h1>
              <div id="link" className="flex flex-col gap-[10px] px-[10px] text-sm text-white/70 transition-colors duration-200">
                <Link className="hover:text-[#226CFF]" href="#introduction">What is Termicons?</Link>
                <Link className="hover:text-[#226CFF]" href="#introduction">What do i get with Boxicons Pro Version?</Link>
                <Link className="hover:text-[#226CFF]" href="#introduction">What&apos;s in the Future?</Link>
                <Link className="hover:text-[#226CFF]" href="#introduction">Need Support?</Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <FooterMenu />
      <Footer />
    </>
  );
}
