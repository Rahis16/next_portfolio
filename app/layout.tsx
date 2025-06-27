import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';  // <-- Import Poppins instead of Inter

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SmartCoderRahis',
  description: 'Code for change code smarter',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
