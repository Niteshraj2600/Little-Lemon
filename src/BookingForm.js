import React, { useState } from "react";
import "./BookingForm.css";

function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send booking data to server
    // ...
  };

  return (
    <div className="form-booking">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />
        </label>
        <label>
          Number of People:
          <input
            type="number"
            value={numberOfPeople}
            onChange={(event) => setNumberOfPeople(event.target.value)}
          />
        </label>
        <button type="submit">Book Table</button>
      </form>
    </div>
  );
}

export default BookingForm;
