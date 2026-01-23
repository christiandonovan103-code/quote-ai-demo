export default function Toast({ message, visible }) {
  if (!visible) {
    return null;
  }

  return (
    <div className="toast">
      <div className="toast__dot" />
      <span>{message}</span>
    </div>
  );
}
