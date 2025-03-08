import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EventCreator = ({ addEvent }) => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  // const [eventType, setEventType] = useState("countdown");
  // -> 우선적으로 count down 이벤트 타입만을 구현 중입니다.
  const [tileColor, setTileColor] = useState("#ffffff");
  const [progressColor, setProgressColor] = useState("#4ade80");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title) {
      toast.error("Input Event Title");
      return;
    }
    if (!startDate) {
      toast.error("Input Start Date");
      return;
    }
    if (!endDate) {
      toast.error("Input End Date");
      return;
    }
    if (new Date(endDate) <= new Date(startDate)) {
      toast.error("End Date should be earlier then Start Date");
      return;
    }

    const newEvent = {
      title,
      startDate,
      endDate,
      type: "countdown",
      style: { tileColor, progressColor },
      createdAt: new Date().toISOString(),
    };

    // addEvent 함수 호출하여 부모 컴포넌트로 전달
    addEvent(newEvent);
    // Firebase에 저장하는 코드를 나중에 구현할 예정입니다.
    // saveEventToFirebase(newEvent);
    toast.success("Event Submitted Succesfully!");

    // form initializing
    setTitle("");
    setStartDate("");
    setEndDate("");
    setTileColor("#ffffff");
    setProgressColor("#4ade80");
  };

  const styles = {
    container: {
      padding: "1px",
    },
  };
  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className="event-title-input">
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Event title"
          />
        </div>
        <div className="start-date-input">
          <label style={{ paddingRight: "5px" }}>Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
            placeholder=""
          />
        </div>
        <div className="end-date-input">
          {" "}
          <label style={{ paddingRight: "5px" }}>End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
          />
        </div>
        {/*
     이후 count up, ongoing 이벤트 입력 기능을 추가하게 되면 사용할 이벤트 타입 선택 폼입니다.
     <select
        value={eventType}
        onChange={(event) => setEventType(event.target.value)}
      >
        <option value="countdown">Count Down</option>
        <option value="countup">Count Up</option>
        <option value="ongoing">On Going</option>
      </select>
      */}
        <div className="event-style">
          <label>Basic Tile Color</label>
          <input
            type="color"
            value={tileColor}
            onChange={(event) => setTileColor(event.target.value)}
          />

          <label>Progress Tile Color</label>
          <input
            type="color"
            value={progressColor}
            onChange={(event) => setProgressColor(event.target.value)}
          />
        </div>

        <div className="submit-button">
          <button type="submit">Submit</button>
        </div>
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default EventCreator;
