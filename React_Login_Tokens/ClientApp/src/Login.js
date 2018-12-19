import React, { Component } from 'react';
import './Login.css';
import AuthService from './components/AuthService';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            Email: '',
            Password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();
    }

    handleFormSubmit(e) {
        e.preventDefault();
        alert("Email: " + this.state.Email);
        alert("Password: " + this.state.Password);
        this.Auth.login(this.state.Email, this.state.Password)
            .then(res => {
                this.props.history.replace('/');
            }).catch(err => {
                alert(err);
            })
    }

    render() {
        return (
            <div className="center">
                <div className="card">
                    <h1>Login</h1>
                    <form>
                        <input type="text" className="form-control" id="validationCustom02" name="Email" value={this.state.Email} onChange={this.handleChange} placeholder="Ingrese su Email" />
                        <input type="text" className="form-control" id="validationCustom02" name="Password" value={this.state.Password} onChange={this.handleChange} placeholder="Contraseña" />
                        

                        <input
                            className="form-submit"
                            value="SUBMIT"
                            type="submit"
                            onClick={this.handleFormSubmit}
                        >
                        </input>
                    </form>
                </div>
            </div>
            );
    }

    handleChange = event => {
        const nameInput = event.target.name;
        const valueInput = event.target.value;
        this.setState({
            [nameInput]: valueInput
        });
    }
}
export default Login;