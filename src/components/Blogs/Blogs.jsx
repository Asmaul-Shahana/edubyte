import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';
import toast, { Toaster } from 'react-hot-toast';

let totalTime = 0;

const Blogs = () => {
    // -------------states--------------//
    const [blogs, setBlogs] = useState([]);
    const [bookmark, setBookmark] = useState([]);
    const [read, setRead] = useState([]);

    //  ----------- bookmark handler ------------//
    const handleAddBookmark = (blog) => {
        const exists = bookmark.find(bm => bm.id === blog.id);
        if (exists) {
         toast('This blog is already bookmarked');
        }
        else {
            const newBookmark = [...bookmark, blog];
            setBookmark(newBookmark);
        }
    }
    console.log(read);
    // ----------- read spend time handler -------------//
    const handleReadTime = (blog) =>{
        totalTime = totalTime + blog.time;
        setRead(totalTime);
    }

    // ------------- fetch from data json -------------//
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    return (
        <div className='blogs-container'>
            <div className='blog-container'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleAddBookmark={handleAddBookmark}
                        handleReadTime={handleReadTime}>
                        </Blog>)
                }
            </div>
            <div className='bookmarks-container'>
                <div className='spent-time'>
                    <h4>Spent time on read: {read.length ===0 ? 0 : read }</h4>
                </div>
                <div className='bookmark-container'>
                    <h4>Bookmarked Blogs : {bookmark.length}</h4>
                    <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
                </div>
            </div>
        </div>
    );
};

export default Blogs;

