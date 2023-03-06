
import React, { useState,useEffect } from 'react'
import Dashboard from './Dashboard';
import "../Pagination.css";
import { useSelector } from 'react-redux';






function Pagination() {

    const [data, setData] = useState();

    const info = useSelector(state => state.data.info)
    
    const [input, setInput] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    useEffect(() => {
        setData(info)
        let filteredData = info?.filter(data => data?.name.includes(input))
        setData(filteredData)
    }, [input]);


    console.log(data?.length)

    let pages = [];

    for (let i = 1; i <= Math.ceil(data?.length / postsPerPage); i++) {
        pages.push(i);
    }

    if (!info) {
        return <>wait </>
    }
    const lastPostIndex = postsPerPage * currentPage
    const firstPostIndex = lastPostIndex - postsPerPage
    // console.log(firstPostIndex, lastPostIndex)
    const currentPost = data?.slice(firstPostIndex, lastPostIndex)
    console.log(input)
    return (
        <div className='table'>
            <input placeholder={"Search by  name , id , email..."} onChange={(e) => setInput(e.target.value.toLowerCase())} />
            <Dashboard data={currentPost} />
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