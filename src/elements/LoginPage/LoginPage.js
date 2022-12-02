import React, { useEffect, useState } from 'react';
import { useHttp } from './../../hooks/http.hook';

function LoginPage() {
  const { loading, error, request } = useHttp();
  const [form, setForm] = useState({
    name: '', email: '', password: ''
  });

  const changeHandler = event => {
    setForm({ ...form, [event.target.id]: event.target.value });
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form });
    } catch (e) { }
  }

  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  return (
    <main>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3">Vertically centered hero sign-up form</h1>
            <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-light">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  onChange={changeHandler}
                />
                <label for="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  onChange={changeHandler}
                />
                <label for="email">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={changeHandler}
                />
                <label for="password">Password</label>
              </div>
              <button
                className="w-100 btn btn-lg btn-primary"
                type="submit"
                onClick={registerHandler}
                disabled={loading}
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
