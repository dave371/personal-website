import Link from 'next/link';

function Home() {
  return (
    <div className="p-2 bg-[#1B1B22]">
      <Navbar />
      <Hero />
      <Portfolio />
      <Contact />
    </div>
  );
}
export default Home;

// single responsibility principle
//a thing should only focus on ony thing
function Navbar() {
  return (
    <nav className="flex justify-between items-center text-white">
      <h1>David Pacheco</h1>
      <ul className="flex gap-2">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-28 w-full">
        <div className="w-52 h-52 rounded-full bg-white" />
        <p className="text-white text-center text-2xl font-bold">
          Hello, my name is david and I am a freelance web developer. I aim to
          provide meaningful value to your business.
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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div>
      <div className="w-full h-72   bg-slate-600 rounded-t" />
      <h3 className="bg-white text-black rounded-b py-2 text-lg">
        Project Name
      </h3>
    </div>
  );
}

function Contact() {
  return (
    <div className="text-white mt-5">
      <h1 className="text-2xl mb-2">Need to Contact Me?</h1>
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
