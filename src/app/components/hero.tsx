import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="container mx-auto max-w-7xl flex justify-between items-center text-sm pb-14 pt-[113px] text-white relative">
        <div 
          className="absolute inset-0 bg-center bg-no-repeat bg-cover" 
          style={{ backgroundImage: 'url(/bg.png)' }}
        ></div>
        <div className="flex relative z-10">
            <div className="col-6 gap-y-6">
                <div className="inline-flex items-center mb-11 bg-[#0F131D] border-[1px] border-white/10 px-1.5 py-1 rounded-xl z-10">
                    <span className="uppercase bg-white text-black text-[10px] px-1.5 py-1 rounded-md font-semibold">Update</span>
                    <span className="pr-1.5 py-1 rounded-xl ml-2.5">New Icons Added</span>
                </div>
                <h1 className="text-7xl font-bold leading-[88px] w-[630px]">Perfectly Crafted to Complement Your Design.</h1>
                <p className="text-base text-white/70 mt-6 mb-11 w-[522px]">A sleek, consistent, and adaptable set of 24,500+ icons ideal for modern interface designs.</p>
                <button className='px-6 py-3 bg-[#0055FF] rounded-2xl text-base font-bold mr-3'>Get Termicons<span className='bg-white text-[#0055FF] text-xs rounded-full px-1 py-0.5 ml-1.5'>PRO</span></button>
                <button className='px-6 py-3 bg-white/10 border-[1px] border-white/10 rounded-2xl text-base font-bold'>Preview Icons</button>
            </div>
            <div className="col-6 w-full">
                <div></div>
            </div>
        </div>
    </div>
  );
};

export default Hero;