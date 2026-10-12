interface Props {
  children: React.ReactNode;
  labeledBy: `${string}`;
  card?: boolean;
  className?: string;
}

function Section({ children, labeledBy, card = false, className = "" }: Props) {
  return (
    <section
      aria-labelledby={labeledBy}
      className={`section ${card ? "card" : ""} ${className}`}
    >
      <div className={"container"}>{children}</div>
    </section>
  );
}

export default Section;
