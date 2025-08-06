import React from 'react';

const Login = () => {
    return (
        <div className="container py-5" style={{ maxWidth: '400px' }}>
            <h2 className="text-center mb-4" style={{ color: '#0b3d91' }}>
                Logowanie
            </h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Adres e-mail</label>
                    <input type="email" className="form-control" id="email" placeholder="wpisz email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Hasło</label>
                    <input type="password" className="form-control" id="password" placeholder="wpisz hasło" />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Zaloguj się</button>
                </div>
            </form>

            <div className="text-center mt-3">
                <small>Nie masz konta? <a href="#">Zarejestruj się</a></small>
            </div>
        </div>
    );
};

export default Login;