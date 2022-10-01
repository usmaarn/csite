import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
  return(
    <nav className="flex items-center gap-5 justify-between p-5">
      <Link href="/">
        <a className="flex items-center gap-2">
          <div className="w-16 h-16 relative">
            <Image src="/logo.png" alt="" layout="fill" />
          </div>
          <h1 className="uppercase font-black text-lg leading-5">
            <span className="tracking-normal text-green-400">tinubu/shetima</span><br />
            <span className="tracking-[0.21rem] text-blue-400">progressive</span><br />
            <span className="tracking-[0.5rem] text-red-400">movement</span>
          </h1>
        </a>
      </Link>

      <div className="">
        <Link href="/form" >
          <a className="px-5 py-3 rounded capitalize bg-green-400 text-white font-bold">
            Generate
          </a>
        </Link>
      </div>
    </nav>
  )
}