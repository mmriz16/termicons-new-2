'use client';

const About = () => {
  return (
    <div className="container mx-auto max-w-7xl text-center text-sm py-14 text-white">
      <p className='inline-flex items-center bg-white/10 border-[1px] border-white/10 px-3 py-1.5 rounded-xl text-xs font-medium'>About Termicons</p>
      <h1 className='text-[54px] font-bold pt-8 pb-2.5'>Ultimate source for your icons needs</h1>
      <p className='text-base text-white/70'>Perfect Icon Set to start your new project with</p>
      <div className="grid grid-cols-3 grid-rows-3 gap-5 mt-12">
        <div className="bg-[#10121C] h-[350px] rounded-3xl col-span-2"></div>
        <div className="bg-[#10121C] h-[350px] rounded-3xl col-start-3"></div>
        <div className="bg-[#10121C] rounded-3xl row-span-2 row-start-2"></div>
        <div className="bg-[#10121C] h-[350px] rounded-3xl row-start-2"></div>
        <div className="bg-[#10121C] h-[350px] rounded-3xl row-start-2"></div>
        <div className="bg-[#10121C] h-[350px] rounded-3xl col-start-2 row-start-3"></div>
        <div className="bg-[#10121C] h-[350px] rounded-3xl col-start-3"></div>
      </div>
    </div>
  );
};

export default About;
