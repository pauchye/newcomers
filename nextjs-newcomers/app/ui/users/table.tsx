import Image from 'next/image';
// import { UpdateInvoice, DeleteInvoice } from '@/app/ui/events/buttons';
// import InvoiceStatus from '@/app/ui/events/status';
// import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
// import { fetchFilteredInvoices } from '@/app/lib/data';

// export default async function InvoicesTable({
//   query,
//   currentPage,
// }: {
//   query: string;
//   currentPage: number;
// }) {
  export default async function InvoicesTable(){
  const users = [
    {email: `abc@abc.com`,
      name: 'New Wiltonian',
      status: 'member',
      address: 'Wilton',
      phone: '12345',
      id: 0,
      image_url: '/users/homelogo.jpg'
    },
    {email: `abc@abc.com`,
      name: 'Old Wiltonian',
      status: 'member',
      address: 'Wilton',
      phone: '123455',
      id: 1,
      image_url: '/users/homelogo.jpg'
    }
  ]

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
        <div className="md:hidden">
                {users?.map((user) => (
                  <div
                    key={user.id}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-3">
                            <Image
                              src={user.image_url}
                              className="rounded-full"
                              alt={`${user.name}'s profile picture`}
                              width={28}
                              height={28}
                            />
                            <p>{user.name}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  First and last name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Phone
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Address
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {users?.map((user) => (
                <tr
                  key={user.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={user.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${user.name}'s profile picture`}
                      />
                      <p>{user.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {user.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {user.phone}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {user.address}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                  {user.status}
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
