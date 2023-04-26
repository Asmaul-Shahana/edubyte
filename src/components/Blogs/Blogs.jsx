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
    const handleReadTime = (blog) => {
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
                <div className='questions'>
                    <h2 style={{textAlign:'center', marginBottom:'10px', color: '#6047EC'}}>Questions</h2>
                    <h4>What is the difference between props and state?</h4>
                    <p>Props is the short for properties and are passed down from a parent to a child component. Where as state is internal data of a component.</p>
                    <p>Props are used to pass data as arguments of a function to child components and communicate with other components. State is used to manage data of the specific component.</p>
                    <p>Props are read-only and unidirectional and cannot be modified by child components.</p>
                    <hr />
                    <h4>How does useState work?</h4>
                    <p>useState is used to manage state of components. It returns an array of two values: the currrent state (state) and a function that updates the state (setState). When the state is updated by the setState function, the component re-renders.</p>
                    <hr />
                    <h4>Purpose of useEffect other than fetching data?</h4>
                    <p>useEffect allows us to perform side effects in our components. Beside fetching data, we can do:</p>
                    <ul>
                        <li>Directly updating the DOM</li>
                        <li>Add event listeners</li>
                        <li>Manage timers</li>
                        <li>Update the document title</li>
                        <li>Manage animations</li>
                    </ul>
                    <hr />
                    <h4>How does react work?</h4>
                    <p>React JS is a JavaScript library. It takes a declarative approach to application development. It consists a collection of reusable JavaScript code. It contains components, properties and state. Each components receives data through props and the state of components are managed by state function and re-renders the component. Then React creates a virtual representation of the UI called virtual DOM which is a lightweight copy of actual DOM. It only updates when the data is changed. </p>
                    <hr />
                </div>
            </div>
            <div className='bookmarks-container'>
                <div className='spent-time'>
                    <h4>Spent time on read: {read.length === 0 ? 0 : read}</h4>
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

