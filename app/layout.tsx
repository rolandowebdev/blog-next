import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Vzents Blog NextJS',
	description: 'Blog with Vzents',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Navbar />
				<main className='px-6 mx-auto'>{children}</main>
			</body>
		</html>
	)
}
