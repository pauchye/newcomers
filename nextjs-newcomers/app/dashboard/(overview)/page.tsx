import Slider from '@/app/ui/dashboard/slider';
// import { Dropdown } from "flowbite-react";
import Link from 'next/link';
 
export default async function Page() {

  return (
    <main className="h-full ">
        <Slider />
        <div className="absolute bottom-0 right-0 m-4 p-4">
      <Link className="flex items-center gap-5 rounded-lg bg-wiltonBlue-100 px-6 my-4 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base" href='https://docs.google.com/forms/d/e/1FAIpQLSeR0X3aPIdS51jLvfb-LtugsWHEeov84On43GJGL97K3KAo0g/viewform?usp=sf_link'>
        Get in touch
      </Link></div>
    </main>
  );
}