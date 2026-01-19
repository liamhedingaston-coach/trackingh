import Link from "next/link";
import TopNav from "../../components/TopNav";

const benefits = [
  {
    title: "Constance",
    description: "Des routines claires et des rappels doux pour rester régulier."
  },
  {
    title: "Visibilité",
    description: "Des stats hebdo/mois/année pour visualiser ta progression."
  },
  {
    title: "Gamification",
    description: "Points, niveaux et badges pour garder l'énergie."
  }
];

export default function LandingPage() {
  return (
    <main>
      <div className="container">
        <TopNav />
        <section className="hero">
          <div>
            <span className="badge">App de suivi d'habitudes</span>
            <h1>Construis tes habitudes, gagne des points, vois ta progression.</h1>
            <p>
              Trackingh combine un check-in quotidien, des stats dynamiques et une
              expérience gamifiée pour t'aider à créer des routines solides.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link className="btn" href="/signup">
                Commencer gratuitement
              </Link>
              <Link className="btn secondary" href="/login">
                J'ai déjà un compte
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <h3>Preview du dashboard</h3>
            <p style={{ color: "var(--muted)" }}>
              Aperçu rapide des points, badges et stats.
            </p>
            <div className="placeholder-grid">
              <div className="placeholder" />
              <div className="placeholder" />
              <div className="placeholder" />
              <div className="placeholder" />
            </div>
          </div>
        </section>
        <section style={{ marginTop: 48 }} className="grid">
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {benefits.map((benefit) => (
              <div className="card" key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p style={{ color: "var(--muted)" }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section style={{ marginTop: 48 }} className="card">
          <h2>Des screenshots mock pour se projeter</h2>
          <p style={{ color: "var(--muted)" }}>
            Des éléments visuels placeholders illustrent les différentes vues de
            l'app (dashboard, habitudes, stats).
          </p>
          <div className="placeholder-grid" style={{ marginTop: 16 }}>
            <div className="placeholder" />
            <div className="placeholder" />
            <div className="placeholder" />
            <div className="placeholder" />
          </div>
        </section>
        <footer className="footer container">
          <span>© 2024 Trackingh</span>
          <span>Support · Sécurité · Conditions</span>
        </footer>
      </div>
    </main>
  );
}
