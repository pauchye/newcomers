'use client'
import { Button, Modal } from "flowbite-react";

import Link from 'next/link';

export function EventModal( {
    onClose,
    event
} : {
    onClose: any;
    event: any;
}

) {

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
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="mb-2">
                    {`${event.date} at ${event.time}`}
                    </p>
                    <Link className='hover:underline text-blue-600' href={event.locationUrl}>{event.address}</Link>
                  </div>
                </div>
              </div>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              TBD
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
             TBD
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() =>console.log('reg')}>Register for the event</Button>
          <Button onClick={() =>console.log('vol')}>
Volunteer for this event
          </Button>
        </Modal.Footer>
      </Modal>
  );
}
