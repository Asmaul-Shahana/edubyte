import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';
import toast, { Toaster } from 'react-hot-toast';


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    const [bookmark, setBookmark] = useState([]);

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

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    return (
        <div className='blogs-container'>
            <div className='blog-container'>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}
                        handleAddBookmark={handleAddBookmark}></Blog>)
                }
            </div>
            <div className='bookmarks-container'>
                <div className='spent-time'>
                    <h4>Spent time on read: min</h4>
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

