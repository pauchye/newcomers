import Image from 'next/image';

export default function WiltonLogo() {
  return (
    <div
      className={`justify-center rounded-lg hidden md:block items-center justify-center p-1`}
    >
      <Image
        src="/logos/WNN-HOUSE-400x400.png"
        width={170}
        height={170}
        className="block rounded-lg"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </div>
  );
}
