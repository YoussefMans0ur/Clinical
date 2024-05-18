import React, { useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

function AddService() {

  const activeLinks = ['add_agent', 'add_service', 'add_doctor'];

  const [schedule, setSchedule] = useState([{ day: '', startTime: '', endTime: '' }]);

  const handleAddSchedule = () => {
    setSchedule([...schedule, { day: '', startTime: '', endTime: '' }]);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedSchedule = [...schedule];
    updatedSchedule[index][name] = value;
    setSchedule(updatedSchedule);
  };

  return (
    <div>
      {/* ======= Header ======= */}
      <Header />

      {/* ======= Sidebar ======= */}
      <SideBar activeLinks={activeLinks} />

      <main dir="rtl" id="main" className="main">
        <h1 className="d-flex justify-content-center" style={{ marginBottom: "40px" }}>إضافة خدمة</h1>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8 d-flex justify-content-center">

              <form className="row g-3 needs-validation" noValidate>

                <div className="col-12">
                  <label htmlFor="yourUsername" className="form-label">اسم المؤسسة</label>
                  <input type="text" name="username" className="form-control" placeholder="اسم المؤسسة" id="yourUsername" required />
                </div>
                <div className="col-12">
                  <label htmlFor="yourServiceName" className="form-label">اسم الخدمة</label>
                  <input type="text" name="serviceName" className="form-control" placeholder="اسم الخدمة" id="yourServiceName" required />
                </div>

                <div className="col-12">
                  <label htmlFor="yourServiceDescription" className="form-label">وصف الخدمة</label>
                  <input type="text" name="serviceDescription" className="form-control" placeholder="وصف الخدمة" id="yourServiceDescription" required />
                </div>

                <div className="col-12">
                  {schedule.map((item, index) => (
                    <div key={index} className="mb-3">
                      <div className="row">
                        <div className="col-md-4">
                          <label htmlFor="serviceAvailabilityDays" className="form-label">مواعيد توفر الخدمة</label>
                          <select
                            name="day"
                            id="serviceAvailabilityDays"
                            className="form-select form-control-lg"
                            value={item.day}
                            onChange={(e) => handleInputChange(index, e)}
                          >
                            <option disabled value="">اختر يوم</option>
                            <option value="السبت">السبت</option>
                            <option value="الأحد">الأحد</option>
                            <option value="الإثنين">الإثنين</option>
                            <option value="الثلاثاء">الثلاثاء</option>
                            <option value="الأربعاء">الأربعاء</option>
                            <option value="الخميس">الخميس</option>
                            <option value="الجمعة">الجمعة</option>
                          </select>
                        </div>
                        <div className="col-md-3">
                          <label htmlFor="startTime" className="form-label">وقت البدء</label>
                          <input
                            type="time"
                            name="startTime"
                            id="startTime"
                            className="form-control"
                            value={item.startTime}
                            onChange={(e) => handleInputChange(index, e)}
                          />
                        </div>
                        <div className="col-md-3">
                          <label htmlFor="endTime" className="form-label">وقت الانتهاء</label>
                          <input
                            type="time"
                            name="endTime"
                            id="endTime"
                            className="form-control"
                            value={item.endTime}
                            onChange={(e) => handleInputChange(index, e)}
                          />
                        </div>
                        <div className="col-md-2 d-flex align-items-end">
                          {index === schedule.length - 1 && (
                            <i
                              className="bi bi-plus"
                              style={{ cursor: 'pointer', fontSize: '1.5rem' }}
                              onClick={handleAddSchedule}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="col-12">
                  <label htmlFor="yourServiceFee" className="form-label">رسوم الخدمة</label>
                  <input type="text" name="serviceFee" className="form-control" placeholder="رسوم الخدمة" id="yourServiceFee" required />
                </div>
                <div className="col-12">
                  <label htmlFor="yourServiceFeeDescription" className="form-label">وصف رسوم الخدمة</label>
                  <input type="text" name="serviceFeeDescription" className="form-control" placeholder="وصف رسوم الخدمة" id="yourServiceFeeDescription" required />
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

export default AddService;
