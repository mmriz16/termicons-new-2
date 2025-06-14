'use client';

import Toggle from '../ui/toggle';

const Pricing = () => {
  return (
    <div className="container grid gap-[50px] text-white mx-auto max-w-7xl my-[100px]">
      <div className=" grid gap-[30px] text-center" id="title">
        <h1 className="text-[54px] font-bold font-(family-name:--font-roboto)">Power up your experience...</h1>
        <p className="text-base text-white/70 font-(family-name:--font-plus-jakarta-sans)">Get access to a lot more ... tune up your next project</p>
        <Toggle />
      </div>
      <div className="flex gap-4 items-center" id="card">
        <div className="w-full h-[646px] grid gap-1.5 items-start p-6 bg-[#10121C] rounded-3xl" id="free">
          <p className="text-xs h-fit font-medium font-(family-name:--font-plus-jakarta-sans) px-3 py-2.5 bg-[#191D27] border-[1px] border-white/4 w-fit rounded-xl">Free</p>
          <div className="" id="pass">
            <div className="flex items-baseline gap-2.5" id="usd">
              <h1 className="text-[54px] font-bold font-(family-name:--font-roboto)">$0</h1>
              <p className="text-base font-(family-name:--font-roboto) text-white/60">/ yearly</p>
            </div>
            <p className="text-base font-(family-name:--font-roboto) text-white/60">For Individuals</p>
          </div>
          <span className="my-[30px] h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
          <div className="grid gap-2" id="benefits">
            <p className="text-sm font-(family-name:--font-roboto)">3000+Icons</p>
            <p className="text-sm font-(family-name:--font-roboto)">Access to Explorer</p>
            <p className="text-sm font-(family-name:--font-roboto)">SVG Libraries</p>
            <p className="text-sm font-(family-name:--font-roboto)">Personal & Commercial Projects</p>
            <p className="text-sm font-(family-name:--font-roboto)">For Individuals</p>
          </div>
        </div>
        <div className="w-full grid gap-[30px] p-6 bg-white text-black rounded-3xl" id="pro">
          <p className="text-xs text-white h-fit font-medium font-(family-name:--font-plus-jakarta-sans) px-3 py-2.5 bg-[#0055FF] w-fit rounded-xl">Pro</p>
          <div className="" id="pass">
            <div className="flex items-baseline gap-2.5" id="usd">
              <h1 className="text-[54px] font-bold font-(family-name:--font-roboto)">$29</h1>
              <p className="text-base font-(family-name:--font-roboto) text-black/60">/ yearly</p>
            </div>
            <p className="text-base font-(family-name:--font-roboto) text-black/60">For Freelancers & Solopreneur</p>
          </div>
          <span className="my-[30px] h-px w-full bg-gradient-to-r from-transparent via-black/20 to-transparent"></span>
          <div className="grid gap-2" id="benefits">
            <p className="text-sm font-(family-name:--font-roboto)">Pro Icons</p>
            <p className="text-sm font-(family-name:--font-roboto)">SVG Libraries</p>
            <p className="text-sm font-(family-name:--font-roboto)">Web Fonts</p>
            <p className="text-sm font-(family-name:--font-roboto)">Personal & Commercial Projects</p>
            <p className="text-sm font-(family-name:--font-roboto)">Full Access to Our Explorer</p>
            <p className="text-sm font-(family-name:--font-roboto)">Lifetime Use and Updates</p>
            <p className="text-sm font-(family-name:--font-roboto)">Request Icons</p>
          </div>
          <span className="my-[30px] h-px w-full bg-gradient-to-r from-transparent via-black/20 to-transparent"></span>
          <button className="text-base h-fit w-full font-bold py-[18px] bg-[#0055FF] rounded-2xl text-white">Get Started</button>
        </div>
        <div className="w-full h-fit grid gap-[30px] p-6 bg-[#10121C] rounded-3xl" id="team">
          <p className="text-xs font-medium font-(family-name:--font-plus-jakarta-sans) px-3 py-2.5 bg-[#191D27] border-[1px] border-white/4 w-fit rounded-xl">Team</p>
          <div className="" id="pass">
            <div className="flex items-baseline gap-2.5" id="usd">
              <h1 className="text-[54px] font-bold font-(family-name:--font-roboto)">$79</h1>
              <p className="text-base font-(family-name:--font-roboto) text-white/60">/ yearly</p>
            </div>
            <p className="text-base font-(family-name:--font-roboto) text-white/60">For Teams & Small Business</p>
          </div>
          <span className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
          <div className="grid gap-2" id="benefits">
            <p className="text-sm font-(family-name:--font-roboto)">Up to 8 User Seats</p>
            <p className="text-sm font-(family-name:--font-roboto)">Pro Icons</p>
            <p className="text-sm font-(family-name:--font-roboto)">SVG Libraries</p>
            <p className="text-sm font-(family-name:--font-roboto)">Web Fonts</p>
            <p className="text-sm font-(family-name:--font-roboto)">Personal & Commercial Projects</p>
            <p className="text-sm font-(family-name:--font-roboto)">Full Access to Our Explorer</p>
            <p className="text-sm font-(family-name:--font-roboto)">Lifetime Use and Updates</p>
            <p className="text-sm font-(family-name:--font-roboto)">Request Icons</p>
            <p className="text-sm font-(family-name:--font-roboto)">24/7 Support</p>
          </div>
          <span className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
          <button className="text-base font-bold py-[18px] bg-white rounded-2xl text-black">Get Started</button>
        </div>
        <div className="w-full h-fit grid gap-[30px] p-6 bg-[#10121C] rounded-3xl" id="enterprise">
          <p className="text-xs font-medium font-(family-name:--font-plus-jakarta-sans) px-3 py-2.5 bg-[#191D27] border-[1px] border-white/4 w-fit rounded-xl">Enterprise</p>
          <div className="" id="pass">
            <div className="flex items-baseline gap-2.5" id="usd">
              <h1 className="text-[54px] font-bold font-(family-name:--font-roboto)">$149</h1>
              <p className="text-base font-(family-name:--font-roboto) text-white/60">/ yearly</p>
            </div>
            <p className="text-base font-(family-name:--font-roboto) text-white/60">For Large Teams & Corporates</p>
          </div>
          <span className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
          <div className="grid gap-2" id="benefits">
            <p className="text-sm font-(family-name:--font-roboto)">Up to 8 User Seats</p>
            <p className="text-sm font-(family-name:--font-roboto)">Pro Icons</p>
            <p className="text-sm font-(family-name:--font-roboto)">SVG Libraries</p>
            <p className="text-sm font-(family-name:--font-roboto)">Web Fonts</p>
            <p className="text-sm font-(family-name:--font-roboto)">Personal & Commercial Projects</p>
            <p className="text-sm font-(family-name:--font-roboto)">Full Access to Our Explorer</p>
            <p className="text-sm font-(family-name:--font-roboto)">Lifetime Use and Updates</p>
            <p className="text-sm font-(family-name:--font-roboto)">Request Icons</p>
            <p className="text-sm font-(family-name:--font-roboto)">24/7 Support</p>
          </div>
          <span className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
          <button className="text-base font-bold py-[18px] bg-white rounded-2xl text-black">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
