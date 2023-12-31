import { useState } from "react";
import '../css/Login.css'
import { useNavigate } from "react-router-dom";


function Login({checkLogin, errorLogin}){
    const navigate = useNavigate();
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const handleLogin = (e) => {
        e.preventDefault();
        const checkUser = {username, password};
        checkLogin(checkUser);
        setUsername('');
        setPassword('');
    }

    return(
        <div class="Loges">
        <div class="login">
           
        <form onSubmit={handleLogin}>
            <h4>{errorLogin}</h4>
            <table>
                <tr>
                    <td><b class="loginh3"><h3 >Login</h3></b></td>
                </tr>
                 
                <tr>
                    <td>Username</td>
                    <td><input type="text" class="password" value={username} 
                        onChange={(e) => setUsername(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type="password" class="password" value={password} 
                        onChange={(e) => setPassword(e.target.value)}/></td>
                </tr>
                <tr>
                    <td><input type="submit" value="Login" class="logup"/></td>
                    <td><button onClick={() => navigate('/Singup')}>SignUp</button></td>
                </tr>
            </table>
        </form>
        </div>
        </div>
    );
}

export default Login;