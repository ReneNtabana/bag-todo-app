import Link from 'next/link';
import { Home, CircleDashed, CheckCircle } from 'lucide-react';

const SideNavbar = () => {
  return (
    <nav className="side-navbar fixed top-0 left-0 h-[100%] bg-white w-[18%] pt-10 rounded-tr-3xl rounded-br-3xl shadow-2xl shadow-r-xl">
        <div className='text-3xl border-b-2 border-black mb-10 pb-2 cursor-pointer'>Dashboard</div>
        <div className='flex flex-col gap-6 ml-7'>
            <Link href="/" passHref className=' hover:bg-black rounded-xl hover:text-white text-2xl flex flex-row gap-1 mr-4 p-2 '>
            <div className='pt-1'><Home /></div>Home
            </Link>
            <Link href="/pending" passHref className='  hover:bg-black rounded-xl hover:text-white text-2xl flex flex-row gap-1 mr-4 p-2'>
            <div className='pt-1'><CircleDashed /></div>Pending
            </Link>
            <Link href="/completed" passHref className='  hover:bg-black rounded-xl hover:text-white text-2xl flex flex-row gap-1 mr-4 p-2'>
            <div className='pt-1'><CheckCircle /></div>Completed
            </Link>
        </div>
    </nav>
  );
};

export default SideNavbar;


<div className="flex flex-col gap-6 ml-7"><a className=" hover:bg-black rounded-xl hover:text-white text-2xl flex flex-row gap-1 mr-4 p-2 " href="/"><div className="pt-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div>Home</a><a className="  hover:bg-black rounded-xl hover:text-white text-2xl flex flex-row gap-1 mr-4 p-2" href="/pending"><div className="pt-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-dashed"><path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0"></path><path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"></path><path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8"></path><path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"></path><path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0"></path><path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"></path><path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8"></path><path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"></path></svg></div>Pending</a><a className="  hover:bg-black rounded-xl hover:text-white text-2xl flex flex-row gap-1 mr-4 p-2" href="/completed"><div className="pt-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div>Completed</a></div>