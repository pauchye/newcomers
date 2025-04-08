'use client'
import { useEffect, useRef, useState } from "react";
import { Modal } from "flowbite-react";
import Image from 'next/image';
import Link from 'next/link';
// import { boolean, string } from "zod";

export function EventModal( {
    onClose,
    event,
    canRegister,
    registerUrl='#',
    canVolunteer,
    volunteerUrl='#',
    imageName,
    isSoldOut,
} : {
    onClose: any;
    event: any;
    canRegister?: boolean;
    registerUrl?: string;
    canVolunteer?: boolean;
    volunteerUrl?: string
    imageName: string
    isSoldOut: boolean;
}

) {
const [refVisible, setRefVisible] = useState(false)
const descriptionRef = useRef<any>(null);

  useEffect(() => {
    if (event && event.description && refVisible) {
         descriptionRef.current!.innerHTML = event.description
    }
  }, [event, refVisible])

  return (
      <Modal dismissible show={true} onClose={onClose}>
        <Modal.Header>{event.name}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
          <div
                key={event.eventId}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="text-sm text-gray-500">{`Cost: $${event.cost}`}</p>
                    
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4 pb-4">
                  <div>
                    <p className="mb-2">
                    {`${event.date} at ${event.time}`}
                    </p>
                   {event.locationUrl &&  <Link className='hover:underline text-blue-600' href={event.locationUrl}>{event.address}</Link> }
                   {!event.locationUrl &&  <div>{event.address}</div> }
                  </div>
                </div>
                {event.registerUrl && 
                <div className="flex w-full items-center border-t justify-between pt-4">
                  <div>
                    <Link className='hover:underline text-blue-600 font-bold' href={event.registerUrl}>Please, register here</Link>
                  </div>
                </div>}
              </div>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400" ref={el => { descriptionRef.current = el; setRefVisible(!!el); }} />
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            { imageName && <Image
        src={`/images/events/${imageName}.jpg`}
        width={1000}
        height={1000}
        className="md:block rounded-lg"
        alt="Screenshots of the dashboard project showing desktop version"
      />}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
         {canRegister &&  <Link className="flex items-center gap-5 self-start rounded-lg bg-wiltonBlue-100 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base" href={registerUrl}>Register for the event</Link>}
         {isSoldOut && <div>This event is sold out.</div>}
         {canVolunteer &&  <Link className="flex items-center gap-5 self-start rounded-lg bg-wiltonBlue-100 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base" href={volunteerUrl}>
Volunteer for this event
          </Link>}
        </Modal.Footer>
      </Modal>
  );
}
