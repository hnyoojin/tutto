import React, { useState, useEffect } from "react";
import EventCard from "../event/EventCard";
import EventCreator from "../event/EventCreator";
import {
  getEvents,
  addEvent as addEventToFirebase,
  deleteEvent as deleteEventFromFirebase,
} from "../../firebase/db";
import { toast, ToastContainer } from "react-toastify";

const App = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Firebase에서 이벤트 목록 불러오기
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const eventsData = await getEvents();
        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // 새 이벤트 추가 함수
  const addEvent = async (newEvent) => {
    try {
      // Firebase에 이벤트 추가
      const savedEvent = await addEventToFirebase(newEvent);
      // 로컬 상태 업데이트
      setEvents([savedEvent, ...events]);
      return true;
    } catch (error) {
      console.error("Error adding event:", error);
      return false;
    }
  };
  // 삭제 함수 추가
  const deleteEvent = async (eventId) => {
    try {
      // Firebase에서 이벤트 삭제
      await deleteEventFromFirebase(eventId);

      // 로컬 상태 업데이트 (삭제된 이벤트 제외)
      setEvents(events.filter((event) => event.id !== eventId));

      toast.success("이벤트가 삭제되었습니다.");
    } catch (error) {
      console.error("Error deleting event:", error);
      toast.error("이벤트 삭제 중 오류가 발생했습니다.");
    }
  };
  // 이하 스타일 및 렌더링 부분은 기존과 동일
  const styles = {
    /* ... 기존 스타일 ... */
    container: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: "400",
      fontStyle: "normal",
      minHeight: "100vh",
      backgroundColor: "#1e2426",
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

      {/* 로딩 상태 표시 */}
      {loading ? (
        <p style={{ color: "white" }}>이벤트 불러오는 중...</p>
      ) : (
        /* 이벤트 목록 */
        <div style={styles.eventList}>
          {events.length === 0 ? (
            <p style={{ color: "white" }}>등록된 이벤트가 없습니다.</p>
          ) : (
            events.map((event) => (
              <EventCard key={event.id} event={event} onDelete={deleteEvent} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default App;
