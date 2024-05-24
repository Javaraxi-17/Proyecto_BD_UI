import React from "react";
//css
import './signin.css';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            mail: '',
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
        const { name, mail, password } = this.state;

        try {
            const response = await fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Nombre: name,
                    Correo: mail,
                    Contrasena: password
                }),
            });

            if (response.status === 200) {
                this.setState({ message: 'Usuario creado con éxito' });
                this.props.history.push('/login');
            } else {
                this.setState({ message: 'Error al crear el usuario' });
            }
        } catch (error) {
            console.error('Error:', error);
            this.setState({ message: 'Hubo un error al intentar registrar el usuario' });
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

                        <h2 className="fadeIn second">Sign In</h2>

                        <form onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                id="name"
                                className="fadeIn second"
                                name="name"
                                placeholder="Ingrese nombre"
                                value={this.state.name}
                                onChange={this.handleInputChange}
                            />
                            <input
                                type="text"
                                id="mail"
                                className="fadeIn second"
                                name="mail"
                                placeholder="Ingrese correo"
                                value={this.state.mail}
                                onChange={this.handleInputChange}
                            />
                            <input
                                type="password"
                                id="password"
                                className="fadeIn third"
                                name="password"
                                placeholder="Ingrese contraseña"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                            />
                            <input
                                type="submit"
                                className="fadeIn fourth"
                                value="Sign in"
                            />
                        </form>

                        <div id="formFooter">
                            <a className="underlineHover" href="/login">Log in</a>
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

export default Signin;
