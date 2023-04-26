import React from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const Blog = (props) => {
    // console.log(blog);
    const { id, img, author, title, dp, publish, time } = props.blog;
   const handleAddBookmark = props.handleAddBookmark;
   const handleReadTime = props.handleReadTime;
    return (
        <div className='blog'>
            <img className='blog-img' src={img} alt="banner" />
            <div>
                <div className='blog-detail'>
                    <div className='author-detail'>
                        <img className='author-dp' src={dp} alt="profile" />
                        <div>
                            <h4>{author}</h4>
                            <p>{publish} (a month ago)</p>
                        </div>
                    </div>
                    <div className='bookmark-sec'>
                        <h6>{time} min read</h6>
                       <button onClick={() => handleAddBookmark(props.blog)}> <FontAwesomeIcon icon={faBookmark} /></button>
                        
                    </div>
                </div>
                <h2>{title}</h2>
                <button onClick={() => handleReadTime(props.blog)} className='mark-read-btn'>Mark as read</button>
            </div>
        </div>
    );
};

export default Blog;