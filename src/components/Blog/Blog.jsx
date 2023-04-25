import React from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const Blog = ({ blog }) => {
    const { img, author, title, dp, publish, time } = blog;
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
                       <button> <FontAwesomeIcon icon={faBookmark} /></button>
                    </div>
                </div>
                <h2>{title}</h2>
                <button className='mark-read-btn'> <a href="">Mark as read</a></button>
            </div>
        </div>
    );
};

export default Blog;