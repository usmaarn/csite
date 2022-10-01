
import { useSession, signIn } from "next-auth/react"
import Link from "next/link"

export default function LoginBtn() {
  const { data: session } = useSession()
  if (session) {
    return (
        <Link href="/users">
          <a className="px-5 py-3 rounded capitalize bg-green-400 text-white font-bold">
            View Data
          </a>
        </Link>
    )
  }
  return (
      <button className="px-5 py-3 rounded capitalize bg-green-400 text-white font-bold" onClick={() => signIn()}>Sign in</button>
  )
}