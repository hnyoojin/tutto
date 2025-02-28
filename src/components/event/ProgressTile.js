//진행도를 타일로 보여주는 역할
const ProgressTile = ({
  total = 30,
  completed = 0,
  tileColor = "#ffffff",
  progressColor = "#4ade80",
}) => {
  const styles = {
    container: {
      width: "210px",
      display: "grid",
      gridTemplateColumns: "repeat(10,1fr)",
      gap: "3px",
      margin: "0 auto",
    },
    tile: {
      width: "18px",
      height: "18px",
      borderRadius: "4px",
    },
  };

  return (
    <div style={styles.container}>
      {[...Array(total)].map((_, index) => (
        <div
          key={index}
          style={{
            ...styles.tile,
            backgroundColor: index < completed ? progressColor : tileColor,
          }}
        />
      ))}
    </div>
  );
};

export default ProgressTile;
