// import Image from 'next/image';
// import { UpdateInvoice, DeleteInvoice } from '@/app/ui/events/buttons';
// import InvoiceStatus from '@/app/ui/events/status';
// import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
// import { fetchFilteredInvoices } from '@/app/lib/data';
'use client'
import Link from 'next/link';
import { useState, useCallback } from "react";
import { events } from '@/app/lib/placeholder-data';
import { EventModal } from './modal';
const CURDATE = Date.now()

export default async function EventsTable(
  {
  query,
  currentPage,
  past,
}: {
  query: string;
  currentPage: number;
  past: boolean;
}
) {

  const [openModal, setOpenModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState();

  const tableEvents = events.filter((event: any) => Date.parse(event.date) > CURDATE)

  const handleToggleModal = useCallback((event?: any) => {
    if (event) {
      setSelectedEvent(event)
      setOpenModal(true)
    } else {
      setSelectedEvent(undefined)
      setOpenModal(false)
    }

  }, [setSelectedEvent, setOpenModal])

  return (
    <div className="mt-6 flow-root">
      {openModal && selectedEvent && <EventModal event={selectedEvent} onClose={() => handleToggleModal()}/> }
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {tableEvents?.map((event) => (
              <div
                key={event.eventId}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center text-xl font-medium">
                      <button onClick={() => handleToggleModal(event)}>{event.name}</button>
                    </div>
                    <p className="text-sm text-gray-500">{`Cost: $${event.cost}`}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="mb-2">
                    {`${event.date} at ${event.time}`}
                    </p>
                    <Link className='hover:underline text-blue-600' href={event.locationUrl}>{event.address}</Link>
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
                <th scope="col" className="px-3 py-5 font-medium">
                  Time
                </th>
              </tr>

              
 
            </thead>
            <tbody className="bg-white">
              {tableEvents?.map((event) => (
                <tr
                  key={event.eventId}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <button onClick={() => handleToggleModal(event)}>{event.name}</button>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <Link href={event.locationUrl} className="hover:underline text-blue-600">
                    {event.address}</Link>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {event.cost}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {event.date}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {event.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
