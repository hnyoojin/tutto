import ProgressTiles from "./ProgressTile";

const EventCard = ({ event }) => {
  const styles = {
    card: {
      width: "250px",
      height: "120px",
      padding: "16px",
      backgroundColor: "#1F1F1F",
      borderRadius: "21px",
      color: "#FFFFFF",
      margin: "0 auto", // 혹시 모를 가로 중앙정렬 보장
    },
    title: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "16px",
    },
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{event.title}</h3>
      <ProgressTiles
        total={30}
        completed={4} // 나중에 실제 진행도 로직 추가
        tileColor={event.style.tileColor}
        progressColor={event.style.progressColor}
      />
    </div>
  );
};

export default EventCard;
