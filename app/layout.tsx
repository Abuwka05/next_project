import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Language Learning App',
  description: 'Learn languages with lessons, flashcards, and progress tracking',
  keywords: ['language learning', 'flashcards', 'lessons', 'Next.js'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-5xl mx-auto px-4">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
