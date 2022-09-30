import Link from 'next/link';
import { useEffect, useState } from 'react';

function Home() {
  return (
    <DefaultPageLayout>
      <Hero />
      <Portfolio />
      <Contact />
    </DefaultPageLayout>
  );
}
export default Home;

function DefaultPageLayout({ children }) {
  const [toggleNav, setToggleNav] = useState(true);

  useEffect(() => {
    const hideOverflow = () => {
      const body = document.querySelector('body');
      body.style.overflow = toggleNav ? 'hidden' : 'auto';
    };

    hideOverflow();
  }, [toggleNav]);

  return (
    <div className="relative min-h-screen px-5 bg-[#1B1B22] lg:w-[80%] lg:mx-auto">
      <Navbar setToggleNav={setToggleNav} />
      <div>{children}</div>

      {toggleNav && <MobileNav setToggleNav={setToggleNav} />}
    </div>
  );
}

function Navbar({ setToggleNav }) {
  return (
    <header className="sticky top-0 w-full h-fit bg-[#1B1B22] py-2 text-white z-10">
      <nav className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">David Pacheco</h1>
        <FullNav />
        <button
          onClick={() => setToggleNav((prev) => !prev)}
          className="p-2 bg-white text-[#DD1155] text-lg rounded font-medium md:hidden"
        >
          Menu
        </button>
      </nav>
    </header>
  );
}

function FullNav() {
  return (
    <ul className="hidden md:flex md:gap-2">
      <li>
        <Link href="/">
          <a className="text-lg font-medium">Home</a>
        </Link>
      </li>
      <li>
        <Link href="/portfolio">
          <a className="text-lg font-medium">Portfolio</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a className="text-lg font-medium">Contact</a>
        </Link>
      </li>
    </ul>
  );
}

function MobileNav({ setToggleNav }) {
  return (
    <>
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="fixed inset-y-0 w-[80%] bg-[#1B1B22] right-0 text-white p-5">
        <div className="flex justify-between mb-10">
          <h1 className="text-2xl font-semibold">Menu</h1>
          <button
            onClick={() => setToggleNav((prev) => !prev)}
            className="p-2 bg-white text-[#DD1155] text-lg rounded font-medium"
          >
            Close Menu
          </button>
        </div>
        <nav>
          <ul className="flex flex-col gap-5">
            <li>
              <Link href="/">
                <a className="block py-3 text-2xl font-medium">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                <a className="block py-3 text-2xl font-medium">Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="block py-3 text-2xl font-medium">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

function Hero() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center w-full gap-28">
        <div className="border-8 border-transparent rounded-full w-52 h-52 border-y-slate-900 animate-spinLeft" />
        <div className="absolute mt-4 border-8 border-transparent rounded-full w-44 h-44 border-x-slate-800 animate-spinRight" />
        <div className="absolute mt-8 bg-white rounded-full w-36 h-36" />

        <p className="text-2xl font-bold text-center text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          quisquam omnis ex autem.
        </p>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="bg-[#1B1B22] text-white">
      <h2 className="mb-2 text-2xl">Portfolio</h2>
      <div className="flex flex-col gap-2">
        <Card tag="Personal Project" />
        <Card tag="Client Project" />
        <Card tag="Client Project" />
        <Card tag="Concept" />
        <Card />
      </div>
    </div>
  );
}

function Card({ tag = 'Personal Project' }) {
  return (
    <div>
      <div className="w-full rounded-t h-72 bg-slate-600" />
      <h3 className="p-2 text-lg text-black bg-white rounded-b">
        Project Name
      </h3>
      <span className="block px-2 py-1 w-fit rounded relative bottom-80 left-3 text-left bg-white text-[#DD1155]">
        {tag}
      </span>
    </div>
  );
}

function Contact() {
  return (
    <div className="mt-5 text-white">
      <h1 className="mb-2 text-2xl">Need to Contact Me?</h1>
      <p className="text-lg font-base">
        If you need to contact me, you can get to me at my email
        <a
          href="mailto:davepacheco456@gmail.com"
          className="underline decoration-[#DD1155] pl-1"
        >
          davepacheco456@gmail.com
        </a>
        .
      </p>
    </div>
  );
}

function Footer() {}
