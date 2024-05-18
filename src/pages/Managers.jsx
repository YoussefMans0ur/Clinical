import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

function Managers() {

  const activeLinks = ['home', 'create_organization', 'add_manager'];

  const [nationalId, setNationalId] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [organizationId, setOrganizationId] = useState('');
  const [organizations, setOrganizations] = useState([]);
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(() => {
    // Fetch organizations on component mount
    async function fetchOrganizations() {
      try {
        const response = await axios.get('http://localhost:3001/organization');
        setOrganizations(response.data);
      } catch (err) {
        console.error('Error fetching organizations:', err);
        setError('An error occurred while fetching organizations');
      }
    }

    fetchOrganizations();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/auth/signup/admin', {
        NationalId: Number(nationalId),
        phone: Number(phone),
        username,
        email,
        password,
        confirm_password: confirmPassword,
        organizationId
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

      setMessage('User Successfully Created');
      console.log('Signup successful:', response.data);
      navigate('/home'); // Redirect to home or another page after successful signup
    } catch (err) {
      console.error('Signup error:', err.response?.data || err.message);
      setError(err.response?.data.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* ======= Header ======= */}
      <Header />

      {/* ======= Sidebar ======= */}
      <SideBar activeLinks={activeLinks} />

      <main dir="rtl" id="main" className="main">
        <h1 className="d-flex justify-content-center" style={{ marginBottom: "40px" }}>إضافة موظف</h1>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8 d-flex justify-content-center">
              <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
                <div className="col-12">
                  <label htmlFor="organization" className="form-label">اسم المؤسسة</label>
                  <select
                    className="form-select form-control-lg"
                    id="organization"
                    onChange={(e) => setOrganizationId(e.target.value)}
                    required
                  >
                    <option value="">اختر المؤسسة</option>
                    {organizations.map(org => (
                      <option key={org._id} value={org._id}>{org.name}</option>
                    ))}
                  </select>
                </div>
                <div className="col-12">
                  <label htmlFor="nationalId" className="form-label">الرقم القومي</label>
                  <input
                    type="number"
                    name="nationalId"
                    className="form-control"
                    placeholder="الرقم القومي"
                    id="nationalId"
                    required
                    value={nationalId}
                    onChange={(e) => setNationalId(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="phone" className="form-label">رقم الهاتف</label>
                  <input
                    type="number"
                    name="phone"
                    className="form-control"
                    placeholder="رقم الهاتف"
                    id="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="username" className="form-label">الاسم</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="الاسم"
                    id="username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="email" className="form-label">البريد الالكترونى</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="البريد الالكترونى"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="password" className="form-label">كلمة المرور</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="كلمة المرور"
                    id="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="confirmPassword" className="form-label">تأكيد كلمة المرور</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    placeholder="تأكيد كلمة المرور"
                    id="confirmPassword"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                {error && <div className="col-12"><p style={{ color: 'red' }}>{error}</p></div>}
                {message && <div className="col-12"><p style={{ color: 'green' }}>{message}</p></div>}
                <div className="col-12">
                  <button className="btn btn-primary w-50" style={{ backgroundColor: "#187878" }} type="submit" disabled={loading}>
                    {loading ? 'جارٍ إنشاء المستخدم...' : 'إضافه'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>  {/*end of main */}
    </div>
  );
}

export default Managers;
