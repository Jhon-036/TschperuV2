import { LoaderCircle } from "lucide-react"
import Container from "../components/Container"
import PostsHero from "../components/PostsHero"
import PostsList from "../components/PostsList"
import { usePostStore } from "../store/usePostStore"
import { useEffect, useMemo } from "react"
import FilterPost from "../components/FilterPost"
import { useSearchParams } from "react-router-dom"

const Publicaciones = () => {
  const {posts, categories, selectedCategory, fetchPosts, loading, setSelectedCategory} = usePostStore()
  const [searchParams] = useSearchParams()
  const urlCategory = searchParams.get("category") 

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  useEffect(() => {
    if (urlCategory) {
      setSelectedCategory(urlCategory)
    }
  }, [urlCategory, setSelectedCategory])

  const filteredPosts = useMemo(() => {
    if (selectedCategory  === "Todos") return posts
    return posts.filter(post => post.category === selectedCategory)
  }, [posts, selectedCategory])

  return (
    <main className="bg-[#f8f8f8]">
      <PostsHero />
      {
        loading ? 
          (<div className="flex items-center justify-center w-full h-[calc(100vh-518px)]"><LoaderCircle className="animate-spin" size={32} color="#254168" /></div>) 
        :
          <Container className={'py-12'}>
            <div className="grid grid-cols-[4fr_1fr] max-xl:grid-cols-[2fr_1fr] max-md:flex max-md:flex-col-reverse gap-6 items-center">
              <PostsList 
                posts={filteredPosts}
              />
              <FilterPost 
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
          </Container>
      }
    </main>
  )
}
export default Publicaciones