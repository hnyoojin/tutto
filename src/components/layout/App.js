// src/components/layout/App.js
import EventCard from "../event/EventCard";
import { useState } from "react";

const App = () => {
  // 테스트용 더미 데이터
  const sampleEvent = {
    title: "프로젝트 진행률",
    style: {
      tileColor: "#ffffff",
      progressColor: "#4ade80",
    },
  };

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#121212",
      padding: "20px",
      // 중앙 정렬을 위한 flexbox 추가
      display: "flex",
      justifyContent: "center", // 가로 중앙 정렬
      alignItems: "center", // 세로 중앙 정렬
    },
  };

  return (
    <div style={styles.container}>
      <EventCard event={sampleEvent} />
    </div>
  );
};

export default App;
