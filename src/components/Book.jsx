import React from 'react';

const Book = (props) => {
    console.log("props =>", props);
    const { book } = props;
    return (
        <div>
            <p>{book}</p>
        </div>
    )
}

export default Book;