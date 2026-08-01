type SpecBodyProps = {
  text: string;
};

/** Renders body text; lines after the first `\n` become bullet points. */
export function SpecBody({ text }: SpecBodyProps) {
  const parts = text.split("\n").map((part) => part.trim()).filter(Boolean);

  if (parts.length <= 1) {
    return <p className="expertise-item__text">{text}</p>;
  }

  const [lead, ...bullets] = parts;

  return (
    <div className="expertise-item__body">
      <p className="expertise-item__text">{lead}</p>
      <ul className="expertise-item__list">
        {bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
