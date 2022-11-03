import React, { useEffect, useCallback, useState} from "react";
import "../assets/css/login.css";
import logo from "../assets/images/velaryon logo.png";
import axios from 'axios'
import { useAuthContext } from "../context/AuthContext";
import { Button } from "react-bootstrap";
export default function(props) {

    const {login} = useAuthContext();

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const onUsernameChange = (e) => setUserName(e.target.value);
    const onPasswordChange = (e) => setPassword(e.target.value);

    const loginMethod = async function (){
        console.log('loggin: ',username )
        let result = await axios.post("http://localhost:5000/login", {
            userName: username,
            password: password
        }, {
            withCredentials: true
        });
        login(result.data.userName, result.data.id);
    }

    return (
        <div className="login-main-container">
            <img src={logo} alt="logo" width="100"></img>
            <h2 id="velaryon-title">VELARYON</h2>
            <form className="login-form-container">
                <div className="login-form-content">
                    <h3 className="login-form-title">INICIAR SESIÓN</h3>
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label login-label">Usuario</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="juan"
                                value={username}
                                onChange={onUsernameChange}
                            ></input>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label login-label">Contraseña</label>
                        <div className="col-sm-10">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                value={password}
                                onChange={onPasswordChange}
                            ></input>
                        </div>
                    </div>
                </div>
                <div className="d-grid gap-2 d-md-block">
                    <Button  onClick={loginMethod}>
                        Iniciar Sesion
                    </Button>
                </div>
                <p className="forgot-password-text-right mt-2">
                    Olvidaste tu <a href="#">contraseña?</a>
                </p>
            </form>
        </div>
    );
}
