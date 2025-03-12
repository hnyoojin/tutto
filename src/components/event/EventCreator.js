import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EventCreator = ({ addEvent, onClose }) => {
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
      position: "relative",
      maxWidth: "500px",
      margin: "30px auto",
      padding: "30px",
      backgroundColor: "#333333",
      color: "#f5f5f5",
      borderRadius: "10px",
      boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
    },
    title: {
      textAlign: "center",
      marginBottom: "30px",
      fontSize: "28px",
    },
    inputGroup: {
      marginBottom: "20px",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontSize: "16px",
    },
    input: {
      width: "100%",
      padding: "8px",
      backgroundColor: "#424242",
      color: "#f5f5f5",
      border: "none",
      borderRadius: "5px",
      fontSize: "14px",
    },
    dateInputContainer: {
      display: "flex",
      justifyContent: "space-between",
      gap: "10px",
    },
    dateInput: {
      flexGrow: 1,
    },
    colorInput: {
      width: "100%",
      padding: "6px",
      backgroundColor: "#424242",
      border: "none",
      borderRadius: "5px",
    },
    button: {
      display: "block",
      width: "calc(100% - 20px)",
      margin: "10px auto 0",
      padding: "12px",
      backgroundColor: "#4ade80",
      color: "black",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "bold",
    },
    closeButton: {
      position: "absolute",
      top: "10px",
      right: "10px",
      backgroundColor: "#4a5568",
      color: "#f5f5f5",
      border: "none",
      borderRadius: "5px",
      padding: "8px 16px",
      fontSize: "14px",
      fontWeight: "bold",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Create New Event</h2>
      <button style={styles.closeButton} onClick={onClose}>
        Close Form
      </button>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Event Title:</label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Enter event title"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Basic Tile Color:</label>
          <input
            type="color"
            value={tileColor}
            onChange={(event) => setTileColor(event.target.value)}
            style={styles.colorInput}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Progress Tile Color:</label>
          <input
            type="color"
            value={progressColor}
            onChange={(event) => setProgressColor(event.target.value)}
            style={styles.colorInput}
          />
        </div>

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>

      <ToastContainer position="top-center" />
    </div>
  );
};

export default EventCreator;
