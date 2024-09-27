import Pagination from '@/app/ui/events/pagination';
// import Search from '@/app/ui/search';
import EventsTable from '@/app/ui/events/table';
// import { CreateInvoice } from '@/app/ui/events/buttons';
import { poppins } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
// import { fetchInvoicesPages } from '@/app/lib/data';
 
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  // const totalPages = await fetchInvoicesPages(query);
  const totalPages = 1;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${poppins.className} text-2xl`}>Events</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        {/* <Search placeholder="Search events..." /> */}
        {/* <CreateInvoice /> */}
      </div>
       <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <EventsTable 
        query={query} currentPage={currentPage} past={false}
        />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}