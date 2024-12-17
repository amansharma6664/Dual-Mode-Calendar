import React, { useState } from 'react';

const EventScheduler = () => {
  const [events, setEvents] = useState([]);
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');

  const handleAddEvent = () => {
    setEvents([
      ...events,
      { title: eventTitle, date: eventDate },
    ]);
    setEventTitle('');
    setEventDate('');
  };

  return (
    <div className="event-scheduler">
      <h2>Event Scheduler</h2>
      <div>
        <input
          type="text"
          placeholder="Event Title"
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
        />
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
      <div className="events-list">
        <h3>Upcoming Events:</h3>
        {events.map((event, index) => (
          <div key={index} className="event-item">
            <p>{event.title} on {event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventScheduler;
