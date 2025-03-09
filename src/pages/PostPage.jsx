import { Button, Spinner } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import CommentSection from '../components/CommentSection'
import PostCard from '../components/PostCard'

export default function PostPage() {
  const { postSlug } = useParams()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [post, setPost] = useState(null)
  const [recentPosts, setRecentPosts] = useState([])

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true)
        const res = await fetch(
          `https://vetmimi-backend.vercel.app/api/post/getposts?slug=${postSlug}`
        )
        const data = await res.json()
        if (!res.ok) {
          setError(true)
          setLoading(false)
          return
        }
        if (res.ok) {
          setPost(data.posts[0])
          console.log('data.posts[0]', data.posts[0])
          setLoading(false)
          setError(false)
        }
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }
    fetchPost()
  }, [postSlug])

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(
          `https://vetmimi-backend.vercel.app/api/post/getposts?limit=3`
        )
        const data = await res.json()
        if (res.ok) {
          console.log('Recent posts', data.posts)
          setRecentPosts(data.posts)
        }
      }
      fetchRecentPosts()
    } catch (error) {
      console.log(error.message)
    }
  }, [])

  if (loading)
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <Spinner size='xl' />
      </div>
    )
  return (
    <main className='p-3 flex flex-col  mx-auto min-h-screen'>
      <h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>
        {post && post.title}
      </h1>
      <Link
        to={`/search?category=${post && post.category}`}
        className='self-center mt-5'
      >
        <Button color='gray' pill size='xs'>
          {post && post.category}
        </Button>
      </Link>
      <img
        src={post && post.image}
        alt={post && post.title}
        className='mt-10 p-3 max-h-[600px] w-full max-w-7xl mx-auto object-cover'
      />
      <div className='flex justify-between p-3 border-b border-slate-500  w-full max-w-7xl mx-auto text-xs'>
        <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
        <span className='italic'>
          {post && (post.content.length / 1000).toFixed(0)} mins read
        </span>
      </div>
      <div
        className='p-3  w-full post-content max-w-7xl mx-auto'
        dangerouslySetInnerHTML={{ __html: post && post.content }}
      ></div>

      {/* <CommentSection postId={post._id} /> */}

      <div className='bg-yellow-400 flex flex-col justify-center items-center mb-5 rounded-lg'>
        <h1 className='text-3xl font-semibold mt-5 text-white'>
          Recent articles
        </h1>
        <div className='flex flex-wrap gap-2 my-5  '>
          {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>
    </main>
  )
}
