import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // useNavigate hook

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:3001/auth/login', { email, password });
      // Handle successful login (store token, redirect, etc.)
      console.log('Login successful:', response.data);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.user.role);
      // Redirect to another page or update UI
      navigate('/home')
    } catch (err) {
      // Handle error
      console.error('Login error:', err.response.data);
      setError(err.response.data.message);
      console.log(err)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <main dir="rtl">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-10 col-md-10 d-flex flex-column align-items-center justify-content-center">
                      <div className="card mb-3">
                        <div className="card-body">
                          <div className="pt-4 pb-2">
                            <h5 className="card-title text-center pb-0 fs-4">تسجيل الدخول</h5>
                          </div>
                          <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
                            <div className="col-12">
                              <label htmlFor="yourUsername" className="form-label">البريد الالكتروني</label>
                              <div className="input-group has-validation">
                                <input
                                  type="text"
                                  name="username"
                                  className="form-control"
                                  placeholder="البريد الالكتروني"
                                  id="yourUsername"
                                  required
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <label htmlFor="yourPassword" className="form-label">كلمة المرور</label>
                              <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="كلمة المرور"
                                id="yourPassword"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </div>
                            {error && <div className="col-12"><p style={{ color: 'red' }}>{error}</p></div>}
                            <div className="col-12">
                              <button className="btn btn-primary w-100" style={{ backgroundColor: "#187878" }} type="submit" disabled={loading}>
                                {loading ? 'جارٍ تسجيل الدخول...' : 'تسجيل الدخول'}
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div style={{ backgroundColor: "#187878", borderTopRightRadius: "50px 50px", borderBottomRightRadius: "50px 50px" }} className="col-md-6">
              <div className="d-flex justify-content-center py-4" style={{ marginTop: "25px" }}>
                <h1 className="d-none d-lg-block" style={{ color: "white" }}>Clinical Website <span><i className="bi bi-heart"></i></span></h1>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
