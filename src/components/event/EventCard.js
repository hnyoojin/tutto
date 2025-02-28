import ProgressTile from "./ProgressTile";
import {
  calculateTotal,
  calculateCompleted,
  calculateProgress,
} from "../../utils/dateUtils";

const EventCard = ({ event }) => {
  const styles = {
    card: {
      width: "250px",
      padding: "20px",
      backgroundColor: "#1F1F1F",
      borderRadius: "12px",
      color: "#FFFFFF",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    title: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "16px",
      color: "#FFFFFF",
    },
    tile: {},
  };

  const total = calculateTotal(event.startDate, event.endDate);
  const completed = calculateCompleted(event.startDate, event.endDate);
  const progressTiles = calculateProgress(completed, total);

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{event.title}</h3>
      <ProgressTile
        total={30}
        completed={progressTiles}
        tileColor={event.style.tileColor}
        progressColor={event.style.progressColor}
      />
    </div>
  );
};

export default EventCard;
