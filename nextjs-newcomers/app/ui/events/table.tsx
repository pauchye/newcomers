// import Image from 'next/image';
// import { UpdateInvoice, DeleteInvoice } from '@/app/ui/events/buttons';
// import InvoiceStatus from '@/app/ui/events/status';
// import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
// import { fetchFilteredInvoices } from '@/app/lib/data';

export default async function InvoicesTable(
//   {
//   query,
//   currentPage,
// }: {
//   query: string;
//   currentPage: number;
// }
) {
  // const invoices = await fetchFilteredInvoices(query, currentPage);
  const events = [
    {
      id: 0,
      name: 'Lunch',
      date: '06-10-2024',
      address: 'TBD',
      cost: 'free'
    },    {
      id: 1,
      name: 'Morning run',
      date: '06-09-2024',
      address: 'NRVT',
      cost: 'free'
    },    {
      id: 3,
      name: 'Dinner',
      date: '01-10-2024',
      address: 'TBD',
      cost: '$50'
    },    {
      id: 4,
      name: 'Volunteering',
      date: '06-10-2024',
      address: 'TBD',
      cost: 'free'
    },

  ]

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {events?.map((event) => (
              <div
                key={event.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{event.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{event.cost}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                    {event.date}
                    </p>
                    <p>{event.address}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Event
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
Location              </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Cost
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                {/* <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th> */}
              </tr>
            </thead>
            <tbody className="bg-white">
              {events?.map((event) => (
                <tr
                  key={event.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{event.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {event.address}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {event.cost}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {event.date}
                  </td>
                  {/* <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
