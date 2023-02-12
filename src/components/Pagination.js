
import React, { useState } from 'react'
import Dashboard from './Dashboard';
import "../Pagination.css";
function Pagination({ data ,setData}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    let pages = [];

    for (let i = 1; i <= Math.ceil(data?.length / postsPerPage); i++) {
        pages.push(i);
    }
    const lastPostIndex = postsPerPage * currentPage
    const firstPostIndex = lastPostIndex - postsPerPage
    console.log(firstPostIndex, lastPostIndex)
    const currentPost = data?.slice(firstPostIndex, lastPostIndex)
  
    return (
        <div>
            <Dashboard data={currentPost} completeData = {data}setData = {setData} />
            <div className='pagination'>
                 {pages.map((page, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(page)}
                            className={page == currentPage ? "active" : ""}>
                            {page}
                        </button>
                    );
                })}
            </div>

        </div>
    )
}

export default Pagination