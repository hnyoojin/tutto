// src/components/layout/App.js
import React, { useState } from "react";
import EventCard from "../event/EventCard";
import EventCreator from "../event/EventCreator";

const App = () => {
  // 샘플 이벤트 데이터
  const [events, setEvents] = useState([
    {
      title: "프로젝트 완료하기",
      startDate: "2024-02-01",
      endDate: "2024-02-29",
      type: "countdown",
      style: {
        tileColor: "#ffffff",
        progressColor: "#4ade80",
      },
    },
  ]);

  // 새 이벤트 추가 함수
  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#121212",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
    },
    title: {
      color: "#ffffff",
      marginBottom: "20px",
    },
    eventList: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "center",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>이벤트 타이머</h1>

      {/* 이벤트 생성 폼 */}
      <EventCreator addEvent={addEvent} />

      {/* 이벤트 목록 */}
      <div style={styles.eventList}>
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default App;
