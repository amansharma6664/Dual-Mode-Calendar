import React from 'react';
import moment from 'moment';

const CalendarView = () => {
  const currentMonth = moment().format('MMMM YYYY');
  const daysInMonth = moment().daysInMonth();
  const startDay = moment().startOf('month').weekday();

  const days = [];
  for (let i = 0; i < startDay; i++) {
    days.push(<div key={`empty-${i}`} className="empty-cell"></div>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push(
      <div key={day} className="calendar-day">
        {day}
      </div>
    );
  }

  return (
    <div className="calendar-container">
      <h2>{currentMonth}</h2>
      <div className="calendar-grid">
        {days}
      </div>
    </div>
  );
};

export default CalendarView;
