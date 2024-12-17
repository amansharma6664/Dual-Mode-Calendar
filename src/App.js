import React, { useState } from 'react';
import CalendarView from './CalendarView';
import EventScheduler from './EventScheduler';

const App = () => {
  const [isCalendarView, setIsCalendarView] = useState(true);

  const toggleView = () => {
    setIsCalendarView(!isCalendarView);
  };

  return (
    <div className="App">
      <header>
        <button onClick={toggleView}>
          Switch to {isCalendarView ? 'Event Scheduler' : 'Calendar View'}
        </button>
      </header>
      <main>
        {isCalendarView ? <CalendarView /> : <EventScheduler />}
      </main>
    </div>
  );
};

export default App;
