import Navbar from './components/Navbar'
import Profile from './components/Profile'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: "Makima's Blog NextJS",
	description: "Blog with Makima's",
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
				<Profile />
				{children}
			</body>
		</html>
	)
}
