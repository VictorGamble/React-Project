import React from 'react';

const Book = (props) => {
    console.log("props =>", props);
    const { book } = props.data;
    return (
        <div>
            <ul>
                <li>{book}</li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default Book;