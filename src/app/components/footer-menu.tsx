import Link from 'next/link';
import Image from 'next/image';
import termicons from '../public/termicons.png';

const footerMenu = () => {
    return (
        <div className="bg-[#00040F]/60 border-t-[1px] border-t-[#ffffff]/10 backdrop-blur-[50px] px-20 py-8">
            <div className="mx-auto max-w-7xl grid grid-cols-4 grid-rows-1 gap-8">
                <div className="col-span-8 content-end">
                    <div className="flex gap-3.5 items-center">
                        <Image alt='Termicons Logo' src="/termicons.png" width={42} height={42}/>
                        <Link href="/" className="text-white text-[26px] font-bold">Termicons</Link>
                    </div>
                </div>
                <div className="col-span-2 col-start-9 px-4">
                    <ul className='flex flex-col gap-y-2.5'>
                        <li className='text-base font-bold'>Products</li>
                        <li className='text-sm font-medium text-white/60'>Icons</li>
                        <li className='text-sm font-medium text-white/60'>Docs</li>
                        <li className='text-sm font-medium text-white/60'>Pricing</li>
                        <li className='text-sm font-medium text-white/60'>Login</li>
                    </ul>
                </div>
                <div className="col-span-2 col-start-11 px-4">
                    <ul className='flex flex-col gap-y-2.5'>
                        <li className='text-base font-bold'>Links</li>
                        <li className='text-sm font-medium text-white/60'>Support Email</li>
                        <li className='text-sm font-medium text-white/60'>Request an Icon</li>
                        <li className='text-sm font-medium text-white/60'>Roadmap</li>
                        <li className='text-sm font-medium text-white/60'>FAQ</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default footerMenu;