export default function QuoteCard({ title, text, handleClick }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">
        {text}
      </p>
    <button type="button" onClick={handleClick} className="btn btn-primary">
      Next quote
    </button>
  </div>
</div>
  );
}