import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    return (
        <div className='blogs-container'>
            <div className='blog-container'>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
            <div className='bookmarks-container'>
                <div className='spent-time'>
                    <h4>Spent time on read: min</h4>
                </div>
                <div>
                    <h4>Bookmarked Blogs: </h4>
                </div>
            </div>
        </div>
    );
};

export default Blogs;

