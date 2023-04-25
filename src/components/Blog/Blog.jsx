import React from 'react';
import './Blog.css';

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
                    <h6>{time} min read</h6>
                </div>
                
            </div>
        </div>
    );
};

export default Blog;