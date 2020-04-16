import React, { Component } from 'react';
import Container from './Container';



class SignUp extends Component{
    state = {
        userName: '',
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
                    <br />
                    <label>First Name: <input type="text" name="userName" /></label>
                    <br />
                    <label>Last Name: <input type="text" name="lastName" /></label>
                      <br />
                    <label>User Name: <input type="text" name="firstName" /></label>
                      <br />  
                    <label> Email:  <input type="text" name="email" /></label>
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

export default SignUp;