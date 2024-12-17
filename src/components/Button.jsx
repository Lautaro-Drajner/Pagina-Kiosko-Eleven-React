export default function Button(props) {
  const { text, color, disalbed, children } = props;

  const displayText = children === undefined ? text : children;

  return (
    <button
      style={{ backgroundColor: color }}
      disabled={disalbed}
      className={`btn-${color}`}
    >
      {displayText}
    </button>
  );
}
