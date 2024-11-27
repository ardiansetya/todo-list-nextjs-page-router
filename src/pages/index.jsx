import Image from "next/image";
import localFont from "next/font/local";
import Head from "next/head";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>TodoList - Organize Your Life</title>
        <meta
          name="description"
          content="A minimalist Todo List app to organize your tasks."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <main className="bg-gray-100 min-h-screen flex flex-col">
        <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
          <h1 className="text-xl font-bold text-gray-800">TodoList</h1>

          <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600">
            <Link href="/todo">Get Started</Link>
          </button>
        </header>

        {/* Hero Section */}
        <section className="flex-1 flex flex-col justify-center items-center text-center px-6 py-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <h1 className="text-5xl font-bold mb-4">
            Organize Your Life, One Task at a Time.
          </h1>
          <p className="text-lg mb-8">
            A minimalist and modern to-do list app to keep you productive and
            focused.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-md shadow-md hover:bg-gray-200 font-semibold">
            <Link href="/todo">Get Started For Free</Link>
          </button>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Features Designed for You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-white p-6 shadow-md rounded-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Simple & Clean
                </h3>
                <p className="text-gray-600">
                  A distraction-free interface to focus on what matters most.
                </p>
              </div>
              <div className="text-center bg-white p-6 shadow-md rounded-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Organized
                </h3>
                <p className="text-gray-600">
                  Categorize tasks and set priorities with ease.
                </p>
              </div>
              <div className="text-center bg-white p-6 shadow-md rounded-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Cross-Platform
                </h3>
                <p className="text-gray-600">
                  Access your tasks on any device, anywhere.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
