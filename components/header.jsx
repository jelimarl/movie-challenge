import Link from 'next/link'

export default function Header() {
  return (
    <nav className='bg-blue-800 text-white p-4 flex space-x-4 justify-center fixed z-10 w-full'>
      <Link href="/">Home</Link>
      <Link href="/movies">Movies</Link>
      <Link href="/series">Series</Link>
    </nav>
  )
}
