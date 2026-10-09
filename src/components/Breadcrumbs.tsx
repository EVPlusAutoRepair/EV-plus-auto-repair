export default function Breadcrumbs({ trail }: { trail: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: 18 }}>
      <ol
        style={{
          listStyle: "none",
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          fontSize: 13,
          color: "var(--dim)",
          padding: 0,
          margin: 0,
        }}
      >
        <li>
          <a href="/" style={{ color: "var(--dim)" }}>Home</a>
        </li>
        {trail.map((t, i) => (
          <li key={t.label} style={{ display: "flex", gap: 8 }}>
            <span aria-hidden="true">/</span>
            {t.href && i < trail.length - 1 ? (
              <a href={t.href} style={{ color: "var(--dim)" }}>{t.label}</a>
            ) : (
              <span aria-current="page" style={{ color: "var(--mut)" }}>{t.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
