import Link from "next/link";
import Navbar from "../components/navbar";

export default function index({}) {
  return (
    <div className="">
      <Navbar />
      <div className="mt-16 max-w-[800px] mx-auto flex flex-col items-center gap-5">
        <h1 className="text-center text-7xl font-black text-zinc-500 leading-[1.2]">
          We Welcome you to APC Progressive Movement
        </h1>
        <Link href="/form"  >
          <a className="px-10 py-5 rounded bg-green-400 text-white font-bold">
            Generate your Poster
          </a>
        </Link>
      </div>
    </div>
  );
}