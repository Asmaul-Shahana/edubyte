import React from 'react';
import './Bookmark.css';
const Bookmark = (props) => {
    const bookmarks = props.bookmark;
    // console.log( bookmarks);

    return (
        <div>
            {
                bookmarks.map(bookmark => <div className='bookmark' key={bookmark.id}>
                    <h4>{bookmark.title}</h4>
                </div>)
            }
        </div>
    );
};

export default Bookmark;