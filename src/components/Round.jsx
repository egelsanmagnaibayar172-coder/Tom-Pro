export default function Round({ name, scores, onIncrease, onDecrease }) {
  return (
    <div>
      {/* 3 мөр тоглогч */}
      {[0, 1, 2].map((i) => (
        <div key={i}>
          <PlayerScore
            name={name}
            score={scores[i]}
            onIncrease={() => onIncrease(i)}
            onDecrease={() => onDecrease(i)}
          />
          {/* separator */}
          {i < 2 && <div style={dividerStyle} />}
        </div>
      ))}
    </div>
  );
}

function PlayerScore({ name, score, onIncrease, onDecrease }) {
  return (
    <div style={rowStyle}>
      <div style={leftStyle}>
        <span style={playerNameStyle}>{name}</span>
      </div>

      <div style={controlsStyle}>
        <button style={pillButtonStyle} onClick={onDecrease}>
          −
        </button>
        <div style={scoreBubble}>{score}</div>
        <button style={pillButtonStyle} onClick={onIncrease}>
          ＋
        </button>
      </div>
    </div>
  );
}

/* styles used inside Round.jsx */
const rowStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "18px 0",
};

const leftStyle = {
  display: "flex",
  alignItems: "center",
};

const playerNameStyle = {
  fontSize: 16,
  color: "#333",
  fontWeight: 500,
};

const controlsStyle = {
  display: "flex",
  alignItems: "center",
  gap: 12,
};

const pillButtonStyle = {
  width: 44,
  height: 36,
  borderRadius: 20,
  border: "1px solid rgba(0,0,0,0.08)",
  background: "rgba(0,0,0,0.03)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 20,
  cursor: "pointer",
  userSelect: "none",
};

const scoreBubble = {
  minWidth: 36,
  height: 36,
  borderRadius: 18,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "white",
  border: "1px solid rgba(0,0,0,0.04)",
  fontSize: 16,
  color: "#222",
};

const dividerStyle = {
  height: 1,
  background: "linear-gradient(90deg, rgba(0,0,0,0.03), rgba(0,0,0,0.02))",
};
