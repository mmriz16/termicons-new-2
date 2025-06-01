import Link from 'next/link'

const Footer = () => {
  return (
    <div className="bg-[#00040F]/60 border-t-[1px] border-t-[#ffffff]/10 backdrop-blur-[50px] px-20 py-4">
      <div className="container mx-auto max-w-7xl flex justify-between items-center font-semibold">
        <div className="space-x-4">
          <Link href="/icons" className="text-white/60 hover:text-white text-xs">©2025 Termicons. All Rights Reserved.</Link>
        </div>
        <div className="flex items-center gap-4 text-sm">
            <Link href="" className='text-white'>Terms</Link>
            <Link href="" className='text-white'>Privacy Policy</Link>
            <Link href="" className='text-white'>Refund Policy</Link>
            <Link href="" className='text-white'>License</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;