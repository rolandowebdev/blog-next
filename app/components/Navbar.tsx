import Link from 'next/link'

export default function Navbar() {
	return (
		<nav className='bg-slate-800 p-4 sticky top-0 drop-shadow-md z-10'>
			<div className='max-w-prose mx-auto flex justify-between flex-col sm:flex-row'>
				<Link
					href='/'
					className='text-white/90 no-underline hover:text-white text-2xl'>
					Blog
				</Link>
			</div>
		</nav>
	)
}
