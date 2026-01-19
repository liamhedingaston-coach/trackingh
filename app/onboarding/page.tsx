import TopNav from "../../components/TopNav";

const templates = ["Routine matin", "Sport", "Méditation", "Hydratation"];

export default function OnboardingPage() {
  return (
    <main>
      <div className="container">
        <TopNav />
        <section className="grid" style={{ maxWidth: 720, margin: "0 auto" }}>
          <div className="card">
            <h1>Onboarding</h1>
            <p style={{ color: "var(--muted)" }}>
              Configure ton espace en quelques étapes rapides.
            </p>
          </div>
          <div className="card">
            <h2>1. Ton prénom</h2>
            <label htmlFor="firstName">Prénom</label>
            <input id="firstName" name="firstName" placeholder="Camille" />
          </div>
          <div className="card">
            <h2>2. Nom de l'espace de travail</h2>
            <label htmlFor="workspace">Espace</label>
            <input id="workspace" name="workspace" placeholder="Mon rituel" />
          </div>
          <div className="card">
            <h2>3. Démarrage</h2>
            <p style={{ color: "var(--muted)" }}>
              Choisis un template ou démarre avec tes propres habitudes.
            </p>
            <div className="sidebar">
              {templates.map((template) => (
                <span key={template} className="tag">
                  {template}
                </span>
              ))}
            </div>
            <button className="btn" style={{ marginTop: 16 }}>
              Créer mes habitudes
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
