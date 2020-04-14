import React from 'react';
import Card from './StyleBook';


const Book = (props) => {
    const book = props.data;
    console.log("books =>", book)
    return (
        <div>
            <Card>
                <p>Title: {book.volumeInfo.title}</p> 
                <p>Written by: {book.volumeInfo.authors}</p>
                <p>Publish date:{book.volumeInfo.publishedDate}</p>
                <p>Short Preview:<br/> {book.searchInfo.textSnippet}</p>
                <button><a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">Click to preview this book</a></button>
            </Card>
        </div>
    )
}


export default Book;