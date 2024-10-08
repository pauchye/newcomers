import '@/app/ui/global.css';
import { poppins } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Wiltonians, Newcomers and Neighbors',
  description: 'Wiltonians, Newcomers and Neighbors.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
