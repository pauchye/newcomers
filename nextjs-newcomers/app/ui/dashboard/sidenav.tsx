import Link from 'next/link';
// import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/wilton-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
// import { signOut } from '@/auth';
{/* <div className="flex h-20 rounded-lg bg-wiltonBlue-100 p-4 md:h-52 flex flex-col gap-4 md:flex-row"> */}

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 justify-center items-center rounded-md bg-wiltonBlue-100 p-4 md:h-48"
        href="/"
      >
        <div className=" flex justify-center items-center self-center w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        {/* <NavLinks /> */}
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block">
        <ul>
  <li>
  <b >Supporting Newcomers</b>
  <ul className="my-2">
  <li>
    - Welcome Wagon 
  </li></ul>

</li>
<li>
<b>Supporting Our Neighbors</b>
<ul className="my-2">
<li>
- Referral Directory
</li>
<li>
- Community events
</li></ul>
</li>
<li>
<b>Social Events</b>
<ul className="my-2">
<li>
- <a href="https://forms.gle/aDQPoj9K33tzRWs8A" className="hover:underline text-blue-600">Fall Revival Event 9/28</a>
</li>
</ul>
</li>
<li>
<b>Ongoing Gatherings 
</b>
<ul className="my-2">
<li>
- Supper Club
</li>
<li>
- Running Club 
</li>
<li>
- Working Women&#039;s Group
</li>
</ul>
</li>
<li>
<b>And many more... 
</b>
<ul className="my-2">
<li>
- Arts & Crafts Gatherings 
</li>
<li>
- Dads & Donuts / Men&#039;s Happy Hour 
</li>
<li>
- Mom&#039;s Happy Hour
</li>
<li>
- Popsicles in the Park 
</li>
<li>
- Newcomers First Year Happy Hour
</li>
<li>
- Tennis meet ups
</li>
<li>
- Touch-a-Truck Event / Meet our Hometown Heroes
</li>
</ul>
</li>
</ul>
        </div>
        {/* <form           action={async () => {
            // 'use server';
            // await signOut();
          }}> */}
            <Link href="/">
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button></Link>
        {/* </form> */}
      </div>
    </div>
  );
}
