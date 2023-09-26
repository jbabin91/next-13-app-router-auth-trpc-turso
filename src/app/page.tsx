import type { Metadata } from 'next';

import db from '@/lib/db';
import type { Framework } from '@/lib/types';

export const metadata = {
  description: 'A Next.js and Turso starter template.',
  title: 'Top Web Frameworks',
} satisfies Metadata;

async function getData() {
  const res = await db.query.frameworks.findMany({
    orderBy: (framework, { desc }) => [desc(framework.stars)],
  });
  return {
    frameworks: res as unknown as Framework[],
  };
}

export default async function Home(page: any) {
  const { frameworks } = await getData();
  let {
    searchParams: { city },
  } = page;
  city = decodeURIComponent(city.replaceAll('+', ' '));

  return (
    <>
      <h1>Top web frameworks</h1>
      {city && <p className="text-center italic text-gray-400">{city}</p>}
      <div className="mb-32 flex flex-col text-center lg:mb-0 lg:text-left">
        <div className="w=[80vw] mt-20 max-w-2xl overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full divide-y-2 divide-gray-200 text-sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Language</th>
                <th>Github Stars</th>
                <th>Repo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {frameworks.map((framework) => (
                <tr key={framework.id}>
                  <td>{framework.name}</td>
                  <td>{framework.language}</td>
                  <td className="stars">{framework.stars}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-center">
                    <a
                      href={framework.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group rounded-lg border border-transparent px-2 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    >
                      Visit 🔗
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
