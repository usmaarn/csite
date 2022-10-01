import Image from "next/image";
import Link from "next/link";
import LoginBtn from "./login-btn";

export default function Navbar(){
  return(
    <nav className="flex items-center gap-5 justify-between p-5">
      <Link href="/">
        <a className="flex items-center gap-2 scale-75 md:scale-100 ">
          <div className="bg-white rounded p-1">
            <Image src="/logo.png" alt="" width={60} height={60} />
          </div>
          <h1 className="uppercase font-black text-lg leading-5">
            <span className="tracking-normal text-green-400">tinubu/shetima</span><br />
            <span className="tracking-[0.21rem] text-blue-400">progressive</span><br />
            <span className="tracking-[0.5rem] text-red-100 movement">movement</span>
          </h1>
        </a>
      </Link>

      <div className="hidden md:block">
        <LoginBtn />
      </div>
    </nav>
  )
}