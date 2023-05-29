import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// cwd = co working directory
const postsDirectory = path.join(process.cwd(), 'blogpost')

export function getSortedPostsData() {
	// Get file names under /posts
	const fileNames = fs.readdirSync(postsDirectory)

	const allPostsData = fileNames.map((fileName) => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, '')

		// Read markdown file as string
		const fullPath = path.join(postsDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, 'utf8')

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents)

		const blogPost: BlogPost = {
			id,
			title: matterResult.data.title,
			date: matterResult.data.date,
		}

		// Combine the data with the id
		return blogPost
	})
	// Sort posts by date
	return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}
