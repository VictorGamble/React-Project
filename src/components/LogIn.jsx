import React, {Component} from 'react'
import Container from './Container';

class LogIn extends Component{
    state= {
        userName: '',
        password: ''
    }
    
    submitHandler = () => {
        
   }
    
    render() {
        return (
            <div>
                <Container>
                <form>
                    <label> Email: <input type="text" name="email" /></label>
                    <br />
                    <label>Password: <input type="text" name="password" /></label>
                    <br />
                    <Container>   
                        <button>Submit</button>
                    </Container> 
                </form>
              </Container>
            </div>
        )
    }
}

export default LogIn;