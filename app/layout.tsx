import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SYNERA Technologies',
  description: 'Intelligent Systems. Smarter Business.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
