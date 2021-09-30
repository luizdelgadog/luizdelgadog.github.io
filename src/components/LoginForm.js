import React, { useState } from 'react';

export default function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
        console.log(setDetails)
    }
    
    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <div className="login-title">Login</div>
                {(error !== "") ? ( <div className="error-msg">{error}</div> ) : "" }
                <div className="login-form">
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                </div>
                <div className="login-form">
                    <label htmlFor="name">E-mail:</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="login-form">
                    <label htmlFor="name">Senha</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <button className="login-btn">Entrar</button>
            </div>
        </form>
  )
}

<style>
</style>