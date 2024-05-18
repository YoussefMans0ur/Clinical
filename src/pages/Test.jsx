import React, { useState } from 'react';

function Test() {
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
      {schedule.map((item, index) => (
        
        <div key={index} className='col-md-12' style={{ marginBottom: '10px' }}>
          <div className='col-md-4'>

          <select
            name="day"
            className="form-select form-control-lg"
            value={item.day}
            onChange={(e) => handleInputChange(index, e)}
          >
            <option disabled value={""}>مواعيد توفر الخدمة</option>
            <option value={"السبت"}>السبت</option>
            <option value={"الأحد"}>الأحد</option>
            <option value={"الإثنين"}>الإثنين</option>
            <option value={"الثلاثاء"}>الثلاثاء</option>
            <option value={"الأربعاء"}>الأربعاء</option>
            <option value={"الخميس"}>الخميس</option>
            <option value={"الجمعة"}>الجمعة</option>
          </select>
          </div>
          <div className="col-md-4">

          <input
            type="time"
            name="startTime"
            value={item.startTime}
            onChange={(e) => handleInputChange(index, e)}
          />
          </div>
          <div className="col-md-4">

          <input
            type="time"
            name="endTime"
            value={item.endTime}
            onChange={(e) => handleInputChange(index, e)}
          />
          </div>
          {index === schedule.length - 1 && (
            <i
              className="bi bi-plus"
              style={{ marginLeft: '10px', cursor: 'pointer' }}
              onClick={handleAddSchedule}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Test;
