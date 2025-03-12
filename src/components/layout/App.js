import React, { useState, useEffect } from "react";
import EventCard from "../event/EventCard";
import EventCreator from "../event/EventCreator";
import AuthForm from "../auth/AuthForm";
import { signOutPage } from "../../firebase/auth";
import { authService, onAuthStateChanged } from "../../firebase";
import {
  getEvents,
  addEvent as addEventToFirebase,
  deleteEvent as deleteEventFromFirebase,
} from "../../firebase/db";
import { toast, ToastContainer } from "react-toastify";

const App = () => {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // 사용자 인증 상태
  useEffect(() => {
    // mount : 인증 상태 변화 감지 리스너
    setLoading(true);
    try {
      const unsubscribe = onAuthStateChanged(authService, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });

      // unmount : 리스너 제거
      return () => unsubscribe();
    } catch (error) {
      console.error("사용자 인증 에러 : ", error);
      setLoading(false);
    }
  }, []);

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

  // 로그아웃 핸들러
  const handleSignOut = async () => {
    try {
      await signOutPage();
      toast.success("성공적으로 로그아웃 되었습니다.");
    } catch (error) {
      console.error("로그아웃 에러:", error);
      toast.error("로그아웃 중 오류가 발생하였습니다.");
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

  let content;

  // 로딩 중
  if (loading) {
    content = <p style={{ color: "white" }}>로딩 중...</p>;
  }

  // 인증된 유저 (로그인 됨)
  else if (user) {
    content = (
      <>
        <ToastContainer />
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
                <EventCard
                  key={event.id}
                  event={event}
                  onDelete={deleteEvent}
                />
              ))
            )}
          </div>
        )}

        {/* 로그아웃 버튼 */}
        <button onClick={() => handleSignOut()}>Sign Out</button>
      </>
    );
  }
  // 인증된 사용자가 아닌 경우 (로그인 되지 않은 경우)
  else {
    content = (
      <>
        <p style={{ color: "white" }}>서비스를 이용하려면 로그인하세요.</p>
        <AuthForm />
      </>
    );
  }
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>이벤트 타이머</h1>
      {content}
    </div>
  );
};

export default App;
