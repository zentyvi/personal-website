interface Props {
  children: React.ReactNode;
  labeledBy: `${string}`;
  card?: boolean;
  className?: string;
  id?: string;
}

function Section({
  children,
  labeledBy,
  card = false,
  className = "",
  id = "",
}: Props) {
  return (
    <section
      id={id}
      aria-labelledby={labeledBy}
      className={`section ${card ? "card" : ""} ${className}`}
    >
      <div className={"container"}>{children}</div>
    </section>
  );
}

export default Section;
