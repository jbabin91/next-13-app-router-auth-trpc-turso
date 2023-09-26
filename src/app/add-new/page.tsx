import './form.css';

import type { Metadata } from 'next';

export const runtime = 'edge';

export const metadata = {
  description: 'Contribute to the frameworks list.',
  title: 'Add New',
} satisfies Metadata;

export default function AddNewPage(request: { searchParams: any }) {
  const { error, message } = request.searchParams;
  console.log(error, message);

  return (
    <>
      <h1>Submit a framework</h1>
      <div className="mb-32 flex w-[80vw] max-w-2xl flex-col text-center lg:text-left">
        {message && (
          <div className="w-full bg-green-200 p-2 text-green-800">
            {message}
          </div>
        )}
        {error && (
          <div className="w-full bg-red-200 p-2 text-red-800">{error}</div>
        )}
        <form
          action="/api/add-framework"
          method="post"
          className="flex w-full flex-col"
        >
          <div>
            <label htmlFor="framework-name">Name</label>
            <input
              type="text"
              name="name"
              id="framework-name"
              placeholder="Framework name"
            />
          </div>
          <div>
            <label htmlFor="language">Language</label>
            <input
              type="text"
              name="language"
              id="language"
              placeholder="JavaScript"
            />
          </div>
          <div>
            <label htmlFor="github-url">Github Url</label>
            <input
              type="url"
              name="url"
              id="github-url"
              placeholder="https://github.com/user/repo"
            />
          </div>
          <div>
            <label htmlFor="stars-count">Stars count</label>
            <input
              type="number"
              name="stars"
              id="stars-count"
              placeholder="2000"
            />
          </div>
          <div className="flex justify-center p-2">
            <button
              type="submit"
              className="flex items-center justify-between space-x-2 rounded-md bg-teal-600 px-4 py-2 font-semibold text-white hover:bg-teal-700 focus:relative"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
