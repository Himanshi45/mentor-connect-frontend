"use client";

import { useState } from "react";
import "./Meeting.css";

interface Meeting {
  id: number;
  title: string;
  date: string;
  status: "upcoming" | "past";
}

export default function MeetingsPage() {
  const [meetings, setMeetings] = useState<Meeting[]>([
    { id: 1, title: "Project Discussion", date: "2025-04-30", status: "upcoming" },
    { id: 2, title: "Review Session", date: "2025-04-20", status: "past" },
  ]);

  const handleCancel = (id: number) => {
    setMeetings((prev) => prev.filter((meeting) => meeting.id !== id));
  };

  const handleEdit = (id: number) => {
    const newTitle = prompt("Enter new meeting title:");
    if (newTitle) {
      setMeetings((prev) =>
        prev.map((meeting) =>
          meeting.id === id ? { ...meeting, title: newTitle } : meeting
        )
      );
    }
  };

  const handleBook = () => {
    const title = prompt("Enter meeting title:");
    const date = prompt("Enter meeting date (YYYY-MM-DD):");
    if (title && date) {
      const newMeeting: Meeting = {
        id: Date.now(),
        title,
        date,
        status: "upcoming",
      };
      setMeetings((prev) => [...prev, newMeeting]);
    }
  };

  return (
    <div className="meetingsContainer">
      <header className="meetingsHeader">
        📅 Meetings
        <button className="bookButton" onClick={handleBook}>
          Book Meeting
        </button>
      </header>

      <section className="meetingsSection">
        <h2>Upcoming Meetings</h2>
        {meetings.filter(m => m.status === "upcoming").length === 0 ? (
          <p>No upcoming meetings.</p>
        ) : (
          meetings
            .filter((m) => m.status === "upcoming")
            .map((m) => (
              <div key={m.id} className="meetingCard">
                <div>
                  <h3>{m.title}</h3>
                  <p>{m.date}</p>
                </div>
                <div className="meetingActions">
                  <button onClick={() => handleEdit(m.id)}>Edit</button>
                  <button onClick={() => handleCancel(m.id)}>Cancel</button>
                </div>
              </div>
            ))
        )}
      </section>

      <section className="meetingsSection">
        <h2>Past Meetings</h2>
        {meetings.filter(m => m.status === "past").length === 0 ? (
          <p>No past meetings.</p>
        ) : (
          meetings
            .filter((m) => m.status === "past")
            .map((m) => (
              <div key={m.id} className="meetingCard pastMeeting">
                <div>
                  <h3>{m.title}</h3>
                  <p>{m.date}</p>
                </div>
              </div>
            ))
        )}
      </section>
    </div>
  );
}
