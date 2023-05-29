import Link from 'next/link'
import { FaYoutube, FaTwitter, FaGithub } from 'react-icons/fa'

export default function Navbar() {
	return (
		<nav className='bg-slate-800 p-4 sticky top-0 drop-shadow-md z-10'>
			<div className='prose prose-xl max-w-prose mx-auto flex justify-between flex-col sm:flex-row'>
				<h1 className='text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
					<Link
						href='/'
						className='text-white/90 no-underline hover:text-white'>
						Blog
					</Link>
				</h1>
				<div className='flex flex-row justify-center sm:justify-evenly items-center gap-4 text-white text-4xl lg:text-5xl'>
					<Link
						className='text-white/90 hover:text-white'
						href='https://github.com/rolandowebdev'>
						<FaGithub size={28} />
					</Link>
					<Link
						className='text-white/90 hover:text-white'
						href='https://twitter.com/rolandowebdev'>
						<FaTwitter size={28} />
					</Link>
					<Link
						className='text-white/90 hover:text-white'
						href='https://www.youtube.com/@rolandowebdev'>
						<FaYoutube size={28} />
					</Link>
				</div>
			</div>
		</nav>
	)
}
