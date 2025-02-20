const ProgressTiles = ({
  total = 30,
  completed,
  tileColor = "#ffffff",
  progressColor = "#4ade80",
}) => {
  // ProgressTiles.js
  const styles = {
    container: {
      width: "210px", // 카드 padding 고려해서 줄임
      display: "grid",
      gridTemplateColumns: "repeat(10, 1fr)",
      gap: "3px",
      margin: "0 auto", // padding 제거
    },
    tile: {
      width: "18px", // 타일 크기도 살짝 줄임
      height: "18px",
      borderRadius: "3px",
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

export default ProgressTiles;
