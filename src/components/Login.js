import React from "react";
import "../assets/css/login.css";
import logo from "../assets/images/harry.jpg";
export default function (props) {
  return (
    <div className="login-main-container">
      <img src={logo} alt="logo" width="100"></img>
      <h2 id="velaryon-title">VELARYON</h2>
    <form className="login-form-container">
      <div className="login-form-content">
        <h3 className="login-form-title">INICIAR SESIÓN</h3>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label login-label">Email</label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              placeholder="juan@gmail.com"
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
            ></input>
          </div>
        </div>
      </div>
      <div className="d-grid gap-2 d-md-block">
        <button type="submit" className="btn btn-primary btn-submit">
          INICIAR SESIÓN
        </button>
      </div>
      <p className="forgot-password-text-right mt-2">
          Olvidaste tu <a href="#">contraseña?</a>
      </p>
    </form>
  </div>
  );
}
