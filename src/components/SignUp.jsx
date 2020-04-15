import React, { Component } from 'react';
import Container from './Container';



class SignUp extends Component{
    state= {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }
    
    submitHandler = () => {
        
   }
    
    render() {
        return (
            <div>
                <Container>
                <form>
                    <label>First Name: <input type="text" name="firstName" /></label>
                    <br />
                    <label>Last Name: <input type="text" name="lastName" /></label>
                    <br />
                    <label>Email: <input type="text" name="email" /></label>
                    <br />
                    <label>Password: <input type="text" name="password" /></label>
                    <br />
                    <button>Submit</button>
                </form>
              </Container>
            </div>
        )
    }
}

export default SignUp;