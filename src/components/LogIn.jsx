import React, {Component} from 'react'
import Container from './Container';

class LogIn extends Component{
    state= {
        userName: '',
        password: ''
    }
    
   changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render() {
        const { userName, password } = this.state;
        return (
            <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Container>
                    <form>
                    <div className="form-row align-items-center">
                        <div className="col-sm-3 my-1">
                        <label className="sr-only" for="inlineFormInputGroupUsername">Username</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                            <div className="input-group-text">@</div>
                            </div>
                            <input type="text" className="form-control" name="userName" value={userName} onChange={this.changeHandler} id="inlineFormInputGroupUsername" placeholder="Username"/>
                        </div>
                        </div>
                    
                        <div className="col-sm-3 my-1">
                        <label className="sr-only" for="inlineFormInputName">Password</label>
                        <input type="text" className="form-control" mame="password" value={password} onChange={this.changeHandler} id="inlineFormInputName" placeholder="Jane Doe"/>
                        </div>
                                <div className="col-auto my-1">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="autoSizingCheck2"/>
                            <label className="form-check-label" for="autoSizingCheck2">
                            Remember me
                            </label>
                        </div>
                        </div>            
                        <div className="col-auto my-1">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                    </form>
             </Container>
          </div>
        )
    }
}

export default LogIn;