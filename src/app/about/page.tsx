import type { Metadata } from 'next';
import Link from 'next/link';

export const runtime = 'edge';

export const metadata = {
  description: 'Top web frameworks about page',
  title: 'About Us',
} satisfies Metadata;

export default function AboutPage() {
  return (
    <>
      <h1>About Us</h1>
      <p className="pt-5 text-center">
        <span className="font-semibold">Top Web Frameworks</span> lists the top
        frameworks for web development based on their Github stars count.
      </p>
      <p>
        Feel free to contribute to the list by{' '}
        <Link href="/add-new" className="underline hover:text-teal-800">
          making a new submission
        </Link>
      </p>
    </>
  );
}
