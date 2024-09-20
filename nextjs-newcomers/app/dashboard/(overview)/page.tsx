import Slider from '@/app/ui/dashboard/slider';
import { Dropdown } from "flowbite-react";
import Link from 'next/link';
 
export default async function Page() {

  return (
    <main className="h-full ">
        <Slider />
        <div className="absolute bottom-0 right-0 m-4 p-4">
        <Dropdown size="lg" label="Stay in touch..." placement="top" theme={{ floating: { target: "bg-wiltonBlue-100 transition-colors hover:bg-blue-400" } }}>
          <div className="flex flex-col  items-center m-4 p-4" >
      <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        Get in touch
      </h3>
      <img src="/images/QR_Reg.jpeg" alt="..." />
<hr className='my-2'/>
      <Link className="flex items-center gap-5 rounded-lg bg-wiltonBlue-100 px-6 my-4 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base" href='https://docs.google.com/forms/d/e/1FAIpQLSchDZn7vOO1F84MMZCPnkLa04w_0_S5EwuGZwHZV98I35hFGg/viewform'>
        Register
      </Link></div>
    </Dropdown></div>
    </main>
  );
}