'use client'
import { Button, Modal } from "flowbite-react";
import Image from 'next/image';

// import Link from 'next/link';

export function PromoModal( {
    onClose,
} : {
    onClose: any;
}

) {

  return (
      <Modal dismissible show={true} onClose={onClose}>
        <Modal.Header>Coming soon!</Modal.Header>
        <Modal.Body>
        <Image
        src="/images/scarecrow.jpg"
        width={1000}
        height={1000}
        className="md:block rounded-lg"
        alt="Screenshots of the dashboard project showing desktop version"
      />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onClose}>Close</Button>
        </Modal.Footer>
      </Modal>
  );
}
