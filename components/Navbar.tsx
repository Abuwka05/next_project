'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b mb-6">
      <ul className="flex gap-6 p-4 font-medium">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/lessons">Lessons</Link></li>
        <li><Link href="/flashcards">Flashcards</Link></li>
        <li><Link href="/progress">Progress</Link></li>
        <li><Link href="/community">Community</Link></li>
      </ul>
    </nav>
  );
}
