import { useEffect, useState } from 'react'
import { temporaryPosts } from '../data/posts'
import type { Post } from '../data/posts'
import { apiFetch } from '../lib/api'

type PostsResponse = Post[] | { content?: Post[]; posts?: Post[] }

function extractPosts(data: PostsResponse): Post[] {
  if (Array.isArray(data)) return data
  if (Array.isArray(data.content)) return data.content
  if (Array.isArray(data.posts)) return data.posts
  return []
}

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isTemporary, setIsTemporary] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    async function loadPosts() {
      try {
        const response = await apiFetch('/api/posts', { signal: controller.signal })
        if (!response.ok) throw new Error('게시글을 불러오지 못했습니다.')
        const realPosts = extractPosts(await response.json() as PostsResponse)
        setPosts(realPosts.length > 0 ? realPosts : temporaryPosts)
        setIsTemporary(realPosts.length === 0)
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return
        setPosts(temporaryPosts)
        setIsTemporary(true)
      } finally {
        if (!controller.signal.aborted) setIsLoading(false)
      }
    }

    void loadPosts()
    return () => controller.abort()
  }, [])

  return { posts, isLoading, isTemporary }
}
