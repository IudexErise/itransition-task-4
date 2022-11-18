import {React, useContext, useState} from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useHttp } from '../../hooks/http.hook';

function Header() {
  const auth = useContext(AuthContext)
  const { loading, error, request } = useHttp();
  const [form, setForm] = useState({
    email: '', password: ''
  });

  const changeHandler = event => {
    setForm({ ...form, [event.target.id]: event.target.value })
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form });
      auth.login(data.token, data.userId)
    } catch (e) { }
  }

  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none" />

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">

          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="form">
            <input
              type="email"
              id="email"
              className="form-control form-control-dark text-bg-dark"
              placeholder="Email..."
              aria-label="Email"
              onChange={changeHandler}
            />
          </form>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="form">
            <input
              type="password"
              id="password"
              className="form-control form-control-dark text-bg-dark"
              placeholder="Password..."
              aria-label="Password"
              onChange={changeHandler}
            />
          </form>

          <div className="text-end">
            <button
              type="button"
              className="btn btn-outline-light me-2"
              onClick={loginHandler}
              disabled={loading}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
