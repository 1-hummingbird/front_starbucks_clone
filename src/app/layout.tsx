import './globals.css';

import AuthProvider from '@/providers/AuthProvider';
import type { Metadata } from 'next';
import ScrollUpButton from '@/components/util/ScrollUpButton';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: {
    template: '%s | Hummingbird',
    default: 'Loading...',
  },
  description: 'Spharos 5th Hummingbird',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
          <Toaster />
          <ScrollUpButton />
        </AuthProvider>
      </body>
    </html>
  );
}
