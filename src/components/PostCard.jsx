import { useState } from "react"
import { formatTimeAgo } from "../hooks/formatTime.js"

const PostCard = ({post}) => {
  const [showContent, setShowContent] = useState(false)

  const handleShowContent = () => {
    setShowContent(!showContent)
  }

  return (
    <div className="border border-gray-300 rounded p-8">
      <div className="relative">
        <img 
          className="w-[30rem]"
          src={post.image} 
          alt={`${post.name} | tschperu.com`} 
        />
        <div className="absolute top-5 left-5 text-md bg-[#f9bf21] px-4 py-0.5 rounded text-[#254168] shadow">
          <p>{post.category}</p>
        </div>
      </div>
      <div className="flex justify-between py-6">
        <h2 className="text-[#254168] font-semibold">{post.title}</h2>
        <span className="text-sm text-gray-600">{formatTimeAgo(post.createdAt)}</span>
      </div>
      <div>
        <p className="whitespace-pre-line pb-2">{post.resume}</p>
        {showContent && (
          <div>
            <p className="whitespace-pre-line pb-2">{post.fullContent}</p>
            <p onClick={handleShowContent} className="text-[#2162a1] hover:text-[#0c3353] text-sm cursor-pointer">Ver menos</p>
          </div>
        )}
        <p className={`text-[#2162a1] hover:text-[#0c3353] text-sm cursor-pointer ${showContent ? 'hidden' : 'block'}`} onClick={handleShowContent}>Ver mas</p>
      </div>
    </div>
  )
}
export default PostCard