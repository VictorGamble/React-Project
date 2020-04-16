import React from 'react';
import PTag from './PTag';
import ReactMarkdown from 'react-markdown';
import Card from './Card';


const Book = (props) => {
    const book = props.data;
    return (
        <div>
            <Card>
                <PTag>Title: <ReactMarkdown source={book.volumeInfo.title} /></PTag> 
                <hr/>
                <PTag>Written by: <ReactMarkdown source={book.volumeInfo.authors}/></PTag>
                <PTag>Publish date:{book.volumeInfo.publishedDate}</PTag>
                <PTag>Short Preview:<ReactMarkdown source={book.searchInfo.textSnippet}/></PTag>
                <button><a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">Click to preview this book</a></button>
            </Card>
        </div>
    )
}


export default Book;