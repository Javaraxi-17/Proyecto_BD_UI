import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../../AuthContext";
//css
import '../login/login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            message: ''
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { login, password } = this.state;
        
        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: login,
                    password: password,
                }),
            });

            if (response.status === 200) {
                this.setState({ message: 'Usuario ha sido encontrado con éxito' });
                this.context.login(); // Set authentication state to true
                this.props.history.push('/pages');
            } else {
                this.setState({ message: 'Usuario o contraseña incorrecta' });
            }
        } catch (error) {
            console.error('Error:', error);
            this.setState({ message: 'Hubo un error al intentar iniciar sesión' });
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div className="fadeIn first">
                            <img src='./images/factech.png' id="icon" alt="User Icon" />
                        </div>

                        <h2 className="fadeIn second">Log In</h2>

                        <form onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                id="login"
                                className="fadeIn second"
                                name="login"
                                placeholder="Ingrese Usuario"
                                value={this.state.login}
                                onChange={this.handleInputChange}
                            />
                            <input
                                type="password"
                                id="password"
                                className="fadeIn small"
                                name="password"
                                placeholder="Ingrese contraseña"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                            />
                            <input
                                type="submit"
                                className="fadeIn fourth"
                                value="Log In"
                            />
                        </form>

                        <div id="formFooter">
                            <a className="underlineHover" href="/signin">Sign Up?</a>
                        </div>

                        {this.state.message && (
                            <div className="message">
                                {this.state.message}
                            </div>
                        )}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

Login.contextType = AuthContext;

export default withRouter(Login);
