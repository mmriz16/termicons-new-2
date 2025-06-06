import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#00040F]/60 border-b-[1px] border-b-[#ffffff]/10 backdrop-blur-[50px] px-20 py-2.5">
      <div className=" container mx-auto max-w-7xl flex justify-between items-center text-sm">
        <div className="flex gap-3.5 items-center">
          <Image alt='Termicons Logo' src="/logo.png" width={42} height={42} />
          <Link href="/" className="text-white text-[26px] font-bold">Termicons</Link>
        </div>
        <div className="space-x-6">
          <Link href="/icons" className="text-gray-300 hover:text-white">Icons</Link>
          <Link href="/pricing" className="text-gray-300 hover:text-white">Pricing</Link>
          <Link href="/roadmap" className="text-gray-300 hover:text-white">Roadmap</Link>
          <Link href="/docs" className="text-gray-300 hover:text-white">Docs</Link>
          <Link href="/github" className="text-gray-300 hover:text-white">Github</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="" className='text-white'>Sign In</Link>
          <button className='bg-[#0055FF] px-[22px] py-[12px] text-white rounded-[16px] text-xs font-bold'>Download</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
