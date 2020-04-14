import React from 'react';
import ReactMarkdown from 'react-markdown';
import Card from './Card';


const Book = (props) => {
    const book = props.data;
    return (
        <div>
            <Card>
                <p>Title: <ReactMarkdown source={book.volumeInfo.title}/></p> 
                <p>Written by: <ReactMarkdown source={book.volumeInfo.authors}/></p>
                <p>Publish date:{book.volumeInfo.publishedDate}</p>
                <p>Short Preview:<ReactMarkdown source={book.searchInfo.textSnippet}/></p>
                <button><a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">Click to preview this book</a></button>
            </Card>
        </div>
    )
}


export default Book;