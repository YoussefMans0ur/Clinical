import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

function AddDoctor() {
  const activeLinks = ['add_agent', 'add_service', 'add_doctor'];

  return (
    <div>
      {/* ======= Header ======= */}
      <Header />

      {/* ======= Sidebar ======= */}
      <SideBar activeLinks={activeLinks} />

      <main dir="rtl" id="main" className="main">
        <h1 className="d-flex justify-content-center" style={{ marginBottom: "40px" }}>إضافة دكتور</h1>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8 d-flex justify-content-center">
              <form className="row g-3 needs-validation" noValidate>
                <div className="col-12">
                  <label htmlFor="institutionName" className="form-label">اسم المؤسسة</label>
                  <input type="text" name="institutionName" className="form-control" placeholder="اسم المؤسسة" id="institutionName" required />
                </div>
                <div className="col-12">
                  <label htmlFor="serviceName" className="form-label">اسم الخدمة</label>
                  <select className="form-select form-control-lg" id="serviceName">
                    <option disabled value={""}>اسم الخدمة</option>
                    <option value=""> </option>
                  </select>
                </div>
                <div className="col-12">
                  <label htmlFor="cashAcceptance" className="form-label">قبول النقد</label>
                  <select className="form-select form-control-lg" id="cashAcceptance">
                    <option disabled value={""}>قبول النقد</option>
                    <option value="نعم">نعم</option>
                    <option value="لا">لا</option>
                  </select>
                </div>
                <div className="col-12">
                  <label htmlFor="doctorName" className="form-label">اسم الدكتور</label>
                  <input type="text" name="doctorName" className="form-control" placeholder="اسم الدكتور" id="doctorName" required />
                </div>
                <div className="col-12">
                  <label htmlFor="doctorSpecialty" className="form-label">تخصص الدكتور</label>
                  <input type="text" name="doctorSpecialty" className="form-control" placeholder="تخصص الدكتور" id="doctorSpecialty" required />
                </div>
                <div className="col-12">
                  <label htmlFor="doctorMobile" className="form-label">موبايل الدكتور</label>
                  <input type="text" name="doctorMobile" className="form-control" placeholder="موبايل الدكتور" id="doctorMobile" required />
                </div>
                <div className="col-12">
                  <label htmlFor="availableDates" className="form-label">التواريخ المتاحة للدكتور</label>
                  <select className="form-select form-control-lg" id="availableDates">
                    <option disabled value={""}>التواريخ المتاحة للدكتور</option>
                    <option value=""> </option>
                  </select>
                </div>
                <div className="col-12">
                  <label htmlFor="doctorEmail" className="form-label">البريد الالكترونى للدكتور</label>
                  <input type="email" name="doctorEmail" className="form-control" placeholder="البريد الالكترونى للدكتور" id="doctorEmail" required />
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
                  />
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-50" style={{ backgroundColor: "#187878" }} type="submit">حفظ</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>{/* End #main */}
    </div>
  );
}

export default AddDoctor;
