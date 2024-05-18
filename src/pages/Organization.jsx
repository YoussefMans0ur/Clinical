import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import SideBar from '../components/SideBar'

function Organization() {

  const activeLinks = ['home', 'create_organization', 'add_manager'];

  const [name, setName] = useState('');
  const [licenseId, setLicenseId] = useState('');
  const [financialLimitFrom, setFinancialLimitFrom] = useState('');
  const [financialLimitTo, setFinancialLimitTo] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      const response = await axios.post(
        'http://localhost:3001/organization',
        {
          name,
          License_ID: Number(licenseId),
          Financial_Limit_From: Number(financialLimitFrom),
          Financial_Limit_TO: Number(financialLimitTo),
          Bank_account: Number(bankAccount)
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setMessage(response.data.message);
      console.log('Organization created:', response.data);
      navigate('/test'); // Redirect to home or another page
    } catch (err) {
      console.error('Error creating organization:', err.response?.data || err.message);
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

        <main dir="rtl" id="main" className="main ">
        <h1 className="d-flex justify-content-center" style={{marginBottom: "40px"}}>إنشاء مؤسسه جديدة</h1>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8 d-flex justify-content-center">
              <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
                <div className="col-12">
                  <label htmlFor="licenseId" className="form-label">كود الترخيص</label>
                  <input
                    type="text"
                    name="licenseId"
                    className="form-control"
                    placeholder="كود الترخيص"
                    id="licenseId"
                    required
                    value={licenseId}
                    onChange={(e) => setLicenseId(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="name" className="form-label">اسم المؤسسة</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="اسم المؤسسة"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="bankAccount" className="form-label">حساب البنك</label>
                  <input
                    type="text"
                    name="bankAccount"
                    className="form-control"
                    placeholder="حساب البنك"
                    id="bankAccount"
                    required
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="financialLimitFrom" className="form-label">الحد المالى من</label>
                  <input
                    type="text"
                    name="financialLimitFrom"
                    className="form-control"
                    placeholder="الحد المالى من"
                    id="financialLimitFrom"
                    required
                    value={financialLimitFrom}
                    onChange={(e) => setFinancialLimitFrom(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="financialLimitTo" className="form-label">الحد المالى إلى</label>
                  <input
                    type="text"
                    name="financialLimitTo"
                    className="form-control"
                    placeholder="الحد المالى إلى"
                    id="financialLimitTo"
                    required
                    value={financialLimitTo}
                    onChange={(e) => setFinancialLimitTo(e.target.value)}
                  />
                </div>
                {error && <div className="col-12"><p style={{ color: 'red' }}>{error}</p></div>}
                {message && <div className="col-12"><p style={{ color: 'green' }}>{message}</p></div>}
                <div className="col-12">
                  <button className="btn btn-primary w-50" style={{backgroundColor: "#187878"}} type="submit" disabled={loading}>
                    {loading ? 'جارٍ الإنشاء...' : 'إنشاء'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>  {/* End #main */}
    </div>
  );
}

export default Organization