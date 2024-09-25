import type { Metadata } from 'next';
import './globals.css';
import ScrollUpButton from '@/components/util/ScrollUpButton';
import AuthProvider from '@/providers/AuthProvider';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: {
    template: '%s | Hummingbird',
    default: 'Loading...',
  },
  description: 'Spharos 5th Hummingbird',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Toaster />
          {children}
          <ScrollUpButton />
        </AuthProvider>
      </body>
    </html>
  );
}
