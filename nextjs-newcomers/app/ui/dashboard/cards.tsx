import {
  SpeakerWaveIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { poppins } from '@/app/ui/fonts';

const iconMap = {
  anouncement: SpeakerWaveIcon,
};

export default async function CardWrapper() {
  return (
    <>
      <Card title="Anouncement"  type="anouncement" />
    </>
  );
}

export function Card({
  title,
  type,
}: {
  title: string;
  type: 'anouncement';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4 ">
        {Icon ? <Icon className="h-5 w-5 text-black" /> : null}
        <h3 className="ml-2 text-sm font-bold">{title}</h3>
      </div>
      <p
        className={`${poppins.className}
          truncate rounded-xl bg-white px-4 py-8 text-center `}
      >
Please join us for the <b>Newcomers Revival Happy Hour</b>!<br/> 
Sat, September 28, 2024 06:00 PM - 08:00 PM <br/>
276 Ridgefield Rd, Wilton, CT 06897, USA
<a
            href="https://www.zeffy.com/en-US/ticketing/238d084e-5b32-4ddc-9128-9193e0254d77"
            className="flex items-center self-start rounded-lg bg-wiltonBlue-100 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base mt-2"
          >
            <span>Register</span> <ArrowRightIcon className="w-5 md:w-6" />
          </a>
      </p>
    </div>
  );
}
