import './globals.css';

import AuthProvider from '@/providers/AuthProvider';
import type { Metadata } from 'next';
import ScrollUpButton from '@/components/util/ScrollUpButton';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: {
    template: '%s | Hummingbird',
    default: 'Team Hummingbird',
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
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
