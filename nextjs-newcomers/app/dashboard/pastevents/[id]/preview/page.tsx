'use client'
// import Form from '@/app/ui/events/edit-form';
// import Breadcrumbs from '@/app/ui/events/breadcrumbs';
// import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { events } from '@/app/lib/placeholder-data';
import GalleryPage from '@/app/ui/events/gallery'

export default async function Page({ params }: { params: { id: string } }) {
  const selectedEvents = events.filter((event: any) => {

    return event.eventId === params.id})

      if (selectedEvents?.length !=1 ) {
        notFound();
      }
      const selectedEvent = selectedEvents[0]
  return (
    <main>{selectedEvent &&
<div> 
  <div className={`text-xl text-gray-800 md:text-2xl md:leading-normal my-4 antialiased`}>{selectedEvent.name}</div>
                    <p>
                    {selectedEvent.date}
                    </p>
                    <p>{`${selectedEvent.venueName} | ${selectedEvent.address}`}</p>
<p>
{selectedEvent.description}</p>
            <div>
{selectedEvent.imageName && <GalleryPage eventName={selectedEvent.imageName}/>}
            </div>
          </div>
      }

    </main>
  );
}