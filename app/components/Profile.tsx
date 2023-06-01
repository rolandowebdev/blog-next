'use client'

import Image from 'next/image'
import { ChangeEvent, useState } from 'react'

export default function Profile() {
	const [selectedImage, setSelectedImage] = useState<string>('')

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file) {
			const imageUrl = URL.createObjectURL(file)
			setSelectedImage(imageUrl)
		}
	}

	return (
		<section className='w-full flex flex-col items-center gap-6'>
			<Image
				className='border-4 border-slate-500 drop-shadow-md rounded-full aspect-square object-cover mx-auto'
				src={selectedImage ? selectedImage : '/images/profile.jpg'}
				width={180}
				height={180}
				alt='Vzents Profile'
				priority={true}
			/>
			<input
				type='file'
				accept='image/*'
				onChange={handleFileChange}
				className='text-sm text-slate-500
      file:mx-6 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-slate-500
      hover:file:bg-violet-100'
			/>
			<p className='mb-12 text-3xl text-center dark:text-white'>
				Hello and Welcome 👋&nbsp;
				<span className='whitespace-nowrap'>
					I&apos;m <span className='font-bold'>Vzents</span>.
				</span>
			</p>
		</section>
	)
}
