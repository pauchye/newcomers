import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { poppins } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { RevenueChartSkeleton,
   CardsSkeleton,
   LatestInvoicesSkeleton } from '@/app/ui/skeletons';
 
export default async function Page() {

  return (
    <main>
      <h1 className={`${poppins.className} mb-4 text-xl md:text-2xl`}>
        Dashboard (Work in process...)
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
      <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
        <div>
        A little history about the Newcomers Club: The Wilton Newcomers Club was originally founded in 1965 as a 501c7 organization. In 2018, it was rebranded to <b>Wilton, Newcomers and Neighbors</b> to welcome not only newcomers but also long-time Wiltonians and neighbors from surrounding towns. The 501c7 chapter was closed shortly after. In 2021, this Facebook group was established in hopes to keep the group alive.<br/>
        We are working to revive the club and re- establish ourselves as a 501c7 social organization (collect dues, host social events and community building events etc).
        </div>
        </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
      <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
        <LatestInvoices />
        </Suspense>

      </div>
    </main>
  );
}