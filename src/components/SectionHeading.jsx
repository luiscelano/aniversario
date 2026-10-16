export default function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-head">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  )
}