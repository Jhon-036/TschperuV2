const Pagination = ({totalPosts, postsPerPage, setCurrentPage, currentPage}) => {
  let pages = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i)
  }

  return (
    <div className="flex py-12 justify-center gap-2">
      {
        pages.map((page, index) => (
          <button 
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`border-1 border-[#254168] px-4 p-2 rounded cursor-pointer ${page == currentPage? 'bg-[#254168] text-white' : ''}`}
          >{page}</button>
        ))
      }
    </div>
  )
}
export default Pagination