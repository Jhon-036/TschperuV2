import PostCard from "./PostCard"

const PostsList = ({posts}) => {
  return (
    <section className="flex flex-col gap-6">
      {posts.map(post => (
        <PostCard 
          key={post.id}
          post={post}
        />
      ))}
    </section>
  )
}
export default PostsList