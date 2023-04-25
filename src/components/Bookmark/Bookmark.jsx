import React from 'react';
import './Bookmark.css';
const Bookmark = ({bookmark}) => {
    return (
        <div>
            <h4>Bookmarked Blogs : {bookmark.length}</h4>
        </div>
    );
};

export default Bookmark;