import Image from 'next/image'

export default function Profile() {
	return (
		<section className='w-full mx-auto '>
			<Image
				className='border-4 border-black dark:border-slate-500 drop-shadow-md shadow-black rounded-full aspect-square object-cover mx-auto mt-8'
				src='/images/profile.jpg'
				width={180}
				height={180}
				alt="Makima's Profile"
				priority={true}
			/>
		</section>
	)
}
