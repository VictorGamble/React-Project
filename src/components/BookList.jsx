import React, { Component } from 'react';
import Book from './Book';

class BookList extends Component{
    state = {
        input: '',
        data: [],
        isLoaded: false
    }

    LoadData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data; 
        } catch (error) {
            console.error("error", error);
            return error;
        }
        
    }

    changeHandler = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    submitHandler = async (event) => {
        event.preventDefault()
        try {
            const { input, } = this.state;
            let url = `https://www.googleapis.com/books/v1/volumes?q=${input}`;
            const data = await this.LoadData(url);
            this.setState({
                input: '',
                data,
                isLoaded: true
            })

        } catch (error) {
            console.error("error", error);
            return error;
        }
    }

    render() {
        const { input, data, isLoaded } = this.state;
        return (
            (isLoaded === false) ?
                <div>
                    <form onSubmit={this.submitHandler}>
                        <input type="text" value={input} onChange={this.changeHandler}></input>
                        <br/>
                        <button type="submit">Search Author</button>
                    </form>
                    
                </div>
                : <div>
                      <form onSubmit={this.submitHandler}>
                        <input type="text" value={input} onChange={this.changeHandler}></input>
                        <br/>
                        <button type="submit">Search Author</button>
                    </form>
                    <Book data={data.items.map(item =  )} />
                </div>
        )
                
    }
}

export default BookList;