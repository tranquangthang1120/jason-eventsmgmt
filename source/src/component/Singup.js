import { useState } from "react";
import '../css/Login.css'
import { useNavigate,Link } from "react-router-dom";


function Login({checkLogin, errorLogin}){
    const navigate = useNavigate();
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [Enterthepassword,setEnterthepassword] = useState('');
    const handleLogin = (e) => {
        e.preventDefault();
        const checkUser = {username, password, Enterthepassword};
        checkLogin(checkUser);
        setUsername('');
        setPassword('');
        setEnterthepassword('');
    }

    return(
        <div class="Loges">
        <div class="login">
           
        <form onSubmit={handleLogin}>
            <h4>{errorLogin}</h4>
            <table>
                <tr>
                    <td><b class="loginh3"><h3 >Sing Up</h3></b></td>
                </tr>
                 
                <tr>
                    <td>Username</td>
                    <td><input type="text" class="password" value={username} 
                        onChange={(e) => setUsername(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type="password" class="password" value={password} 
                        onChange={(e) => setPassword(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td>Enter The Password</td>
                    <td><input type="password" class="password" value={Enterthepassword} 
                        onChange={(e) => setEnterthepassword(e.target.value)}/></td>
                </tr>
                <tr> 
                    <td><p>Already have an account? <Link to="/login">Login here</Link></p></td>
                    <td><input type="submit" value="Sing Up" class="logup"/></td></tr>
                </table>
                </form>
                </div>
                </div>
                );}
export default Login;