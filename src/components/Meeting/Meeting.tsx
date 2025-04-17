import React, { useState } from "react";
import './Meeting.css';  // Don't forget to import the CSS file!

interface MeetingFormData {
  mentor: string;
  date: string;
  time: string;
  agenda: string;
}

const Meeting: React.FC = () => {
  const [formData, setFormData] = useState<MeetingFormData>({
    mentor: "",
    date: "",
    time: "",
    agenda: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit the meeting request to an API or handle accordingly
    console.log("Meeting Request Sent", formData);
  };

  return (
    <div className="meeting-container">
      <h2 className="heading">Request a Mentor Meeting</h2>
      <form onSubmit={handleSubmit} className="meeting-form">
        <div className="form-field">
          <label htmlFor="mentor">Mentor Name</label>
          <input
            type="text"
            id="mentor"
            name="mentor"
            value={formData.mentor}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="date">Meeting Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="time">Meeting Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="agenda">Agenda</label>
          <textarea
            id="agenda"
            name="agenda"
            value={formData.agenda}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>

        <div className="form-submit">
          <button type="submit">Send Meeting Request</button>
        </div>
      </form>
    </div>
  );
};

export default Meeting;
