import React from "react";
//css
import '../login/login.css';

class Login extends React.Component{

    render(){
        return(
            <React.Fragment>
                    <div className="wrapper fadeInDown">
                    <div id="formContent">
                        
                        <div className="fadeIn first">
                        <img src='./images/factech.png'  id="icon" alt="User Icon" />
                        </div>

                        
                        <form>
                                <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
                                <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                                <input type="submit" className="fadeIn fourth" value="Log In" />
                        </form>

                        
                        <div id="formFooter">
                        <a className="underlineHover" href="#">Sign In?</a>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default Login