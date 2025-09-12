'use client';

import { ScrollArea } from '@/components/ui/scroll-area';

const Roadmap = () => {
  return (
    <div className="container grid gap-[50px] text-white mx-auto max-w-7xl my-[100px]">
      <div className="grid gap-[30px] text-center" id="title">
        <p className='inline-flex items-center mx-auto bg-white/10 border-[1px] border-white/10 px-3 py-1.5 rounded-xl text-xs font-medium'>Path to the future</p>
        <h1 className="text-[54px] font-bold font-(family-name:--font-plus-jakarta-sans)">Roadmap for Termicons</h1>
        <p className="text-base text-white/70 font-(family-name:--font-plus-jakarta-sans)">A lot more to look forward to ...</p>
      </div>
      <div className="flex gap-5 h-[580px]" id="roadmap">
        {/* Completed Section */}
        <div className="flex-1 flex flex-col gap-4 py-4 bg-white/[3%] rounded-3xl border border-white/10">
          <h1 className="text-base text-center font-bold">Completed</h1>
          <ScrollArea className="h-[508px] px-4" data-lenis-prevent>
            <div className="flex flex-col gap-4">
              <div className="grid gap-2 p-4 justify-items-start bg-white/[3%] rounded-2xl w-full" id="completed-1">
                <p className="text-sm text-white/50">May 2025</p>
                <h1 className="text-base font-bold">New Pro Icons Added</h1>
                <p className="text-sm text-white/50">30k+ Icons in 3 styles, 3 weights and Filled variants</p>
                <p className='inline-flex bg-[#0055FF] px-3 py-1.5 rounded-xl text-xs font-medium'>PRO</p>
              </div>
              <div className="grid gap-2 p-4 justify-items-start bg-white/[3%] rounded-2xl w-full" id="completed-2">
                <p className="text-sm text-white/50">May 2025</p>
                <h1 className="text-base font-bold">New Free Icons Added</h1>
                <p className="text-sm text-white/50">3k+ Icons in 1 style and Filled variant</p>
                <p className='inline-flex bg-white text-black px-3 py-1.5 rounded-xl text-xs font-medium'>FREE</p>
              </div>
              <div className="grid gap-2 p-4 justify-items-start bg-white/[3%] rounded-2xl w-full" id="completed-3">
                <p className="text-sm text-white/50">May 2025</p>
                <h1 className="text-base font-bold">All New icons Library</h1>
                <p className="text-sm text-white/50">A huge update to our library with new icons and styles, with new categories and ways to download icons in various formats</p>
                <div className="flex gap-2">
                  <p className='inline-flex bg-[#0055FF] px-3 py-1.5 rounded-xl text-xs font-medium'>PRO</p>
                  <p className='inline-flex bg-white text-black px-3 py-1.5 rounded-xl text-xs font-medium'>FREE</p>
                </div>
              </div>
              <div className="grid gap-2 p-4 justify-items-start bg-white/[3%] rounded-2xl w-full" id="completed-4">
                <p className="text-sm text-white/50">April 2025</p>
                <h1 className="text-base font-bold">Website Launch</h1>
                <p className="text-sm text-white/50">Official Termicons website with improved user experience and design</p>
                <p className='inline-flex bg-white text-black px-3 py-1.5 rounded-xl text-xs font-medium'>FREE</p>
              </div>
              <div className="grid gap-2 p-4 justify-items-start bg-white/[3%] rounded-2xl w-full" id="completed-5">
                <p className="text-sm text-white/50">March 2025</p>
                <h1 className="text-base font-bold">Icon Search Enhancement</h1>
                <p className="text-sm text-white/50">Improved search functionality with better filtering and categorization</p>
                <p className='inline-flex bg-white text-black px-3 py-1.5 rounded-xl text-xs font-medium'>FREE</p>
              </div>

            </div>
          </ScrollArea>
        </div>

        {/* Coming Soon Section */}
        <div className="flex-1 flex flex-col gap-4 py-4 bg-white/[3%] rounded-3xl border border-white/10">
          <h1 className="text-base text-center font-bold">Coming Soon</h1>
          <ScrollArea className="h-[508px] px-4" data-lenis-prevent>
            <div className="flex flex-col gap-4">
              <div className="grid gap-2 p-4 justify-items-start bg-white/[3%] rounded-2xl" id="coming-soon-1">
                <p className="text-sm text-white/50">June 2025</p>
                <h1 className="text-base font-bold">Figma Plugin</h1>
                <p className="text-sm text-white/50">Easy way for UI/UX designers to use Termicons in Figma</p>
                <div className="flex gap-2">
                  <p className='inline-flex bg-[#0055FF] px-3 py-1.5 rounded-xl text-xs font-medium'>PRO</p>
                  <p className='inline-flex bg-white text-black px-3 py-1.5 rounded-xl text-xs font-medium'>FREE</p>
                </div>
              </div>
              <div className="grid gap-2 p-4 justify-items-start bg-white/[3%] rounded-2xl" id="coming-soon-2">
                <p className="text-sm text-white/50">June 2025</p>
                <h1 className="text-base font-bold">Duotone Icons</h1>
                <p className="text-sm text-white/50">Duotone version of all icons (3 styles, 3 weights and filled variants) for Pro users</p>
                <p className='inline-flex bg-[#0055FF] px-3 py-1.5 rounded-xl text-xs font-medium'>PRO</p>
              </div>
              <div className="grid gap-2 p-4 justify-items-start bg-white/[3%] rounded-2xl" id="coming-soon-3">
                <p className="text-sm text-white/50">June 2025</p>
                <h1 className="text-base font-bold">Full Fledged Documentation</h1>
                <p className="text-sm text-white/50">Documentation and usage guides for Termicons.</p>
                <p className='inline-flex bg-[#0055FF] px-3 py-1.5 rounded-xl text-xs font-medium'>PRO</p>
              </div>
              <div className="grid gap-2 p-4 justify-items-start bg-white/[3%] rounded-2xl" id="coming-soon-4">
                <p className="text-sm text-white/50">July 2025</p>
                <h1 className="text-base font-bold">Mobile App</h1>
                <p className="text-sm text-white/50">Native mobile app for iOS and Android to browse and download icons on the go</p>
                <div className="flex gap-2">
                  <p className='inline-flex bg-[#0055FF] px-3 py-1.5 rounded-xl text-xs font-medium'>PRO</p>
                  <p className='inline-flex bg-white text-black px-3 py-1.5 rounded-xl text-xs font-medium'>FREE</p>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>

        {/* Planned Section */}
        <div className="flex-1 flex flex-col gap-4 py-4 bg-white/[3%] rounded-3xl border border-white/10">
          <h1 className="text-base text-center font-bold">Planned</h1>
          <ScrollArea className="h-[508px] px-4" data-lenis-prevent>
            <div className="flex flex-col gap-4">
              <div className="grid gap-2 p-4 justify-items-start bg-white/[3%] rounded-2xl" id="planned-1">
                <p className="text-sm text-white/50">July 2025</p>
                <h1 className="text-base font-bold">NPM Package</h1>
                <p className="text-sm text-white/50">Npm package which will allow you to use icons in your development projects with just one command. There will be private repositories for Pro users</p>
                <div className="flex gap-2">
                  <p className='inline-flex bg-[#0055FF] px-3 py-1.5 rounded-xl text-xs font-medium'>PRO</p>
                  <p className='inline-flex bg-white text-black px-3 py-1.5 rounded-xl text-xs font-medium'>FREE</p>
                </div>
              </div>
              <div className="grid gap-2 p-4 justify-items-start bg-white/[3%] rounded-2xl" id="planned-2">
                <p className="text-sm text-white/50">August 2025</p>
                <h1 className="text-base font-bold">New Small Icons</h1>
                <p className="text-sm text-white/50">New Style of icons which are smaller and more minimalistic on different canvas</p>
                <p className='inline-flex bg-[#0055FF] px-3 py-1.5 rounded-xl text-xs font-medium'>PRO</p>
              </div>
              <div className="grid gap-2 p-4 justify-items-start bg-white/[3%] rounded-2xl" id="planned-3">
                <p className="text-sm text-white/50">October 2025</p>
                <h1 className="text-base font-bold">React and Vue Package</h1>
                <p className="text-sm text-white/50">React and Vue package which will allow you to use icons in your development projects</p>
                <div className="flex gap-2">
                  <p className='inline-flex bg-[#0055FF] px-3 py-1.5 rounded-xl text-xs font-medium'>PRO</p>
                  <p className='inline-flex bg-white text-black px-3 py-1.5 rounded-xl text-xs font-medium'>FREE</p>
                </div>
              </div>
              <div className="grid gap-2 p-4 justify-items-start bg-white/[3%] rounded-2xl" id="planned-4">
                <p className="text-sm text-white/50">November 2025</p>
                <h1 className="text-base font-bold">AI Icon Generation</h1>
                <p className="text-sm text-white/50">AI-powered icon generation tool for creating custom icons based on descriptions</p>
                <p className='inline-flex bg-[#0055FF] px-3 py-1.5 rounded-xl text-xs font-medium'>PRO</p>
              </div>
              <div className="grid gap-2 p-4 justify-items-start bg-white/[3%] rounded-2xl" id="planned-5">
                <p className="text-sm text-white/50">December 2025</p>
                <h1 className="text-base font-bold">Enterprise Dashboard</h1>
                <p className="text-sm text-white/50">Team management and usage analytics for enterprise customers</p>
                <p className='inline-flex bg-[#0055FF] px-3 py-1.5 rounded-xl text-xs font-medium'>PRO</p>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
