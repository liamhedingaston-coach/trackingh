import TopNav from "../../../components/TopNav";

const habits = [
  {
    name: "Boire 2L d'eau",
    frequency: "Quotidienne",
    color: "#60a5fa",
    icon: "💧",
    active: true
  },
  {
    name: "Sport",
    frequency: "Quotidienne",
    color: "#f87171",
    icon: "🏋️",
    active: true
  },
  {
    name: "Méditation",
    frequency: "Quotidienne",
    color: "#34d399",
    icon: "🧘",
    active: false
  }
];

export default function HabitsPage() {
  return (
    <main>
      <div className="container">
        <TopNav />
        <div className="grid" style={{ gridTemplateColumns: "2fr 1fr", alignItems: "start" }}>
          <section className="card">
            <h1>Gestion des habitudes</h1>
            <p style={{ color: "var(--muted)" }}>
              Ajoute, modifie ou mets en pause tes habitudes.
            </p>
            <div style={{ display: "grid", gap: 16, marginTop: 24 }}>
              {habits.map((habit) => (
                <div
                  key={habit.name}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: 12,
                    alignItems: "center",
                    padding: "14px",
                    borderRadius: 16,
                    border: "1px solid var(--border)"
                  }}
                >
                  <div>
                    <strong style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: "1.2rem" }}>{habit.icon}</span>
                      {habit.name}
                    </strong>
                    <span style={{ color: "var(--muted)" }}>{habit.frequency}</span>
                  </div>
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        background: habit.color
                      }}
                    />
                    <span className="tag">{habit.active ? "Active" : "Pause"}</span>
                    <button className="btn secondary">Modifier</button>
                    <button className="btn secondary">Supprimer</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <aside className="grid">
            <div className="card">
              <h2>Créer une habitude</h2>
              <form>
                <div>
                  <label htmlFor="habit">Nom</label>
                  <input id="habit" placeholder="Lecture 20 min" />
                </div>
                <div>
                  <label htmlFor="frequency">Fréquence</label>
                  <select id="frequency">
                    <option>Quotidienne</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="color">Couleur</label>
                  <input id="color" type="color" defaultValue="#5b6cff" />
                </div>
                <div>
                  <label htmlFor="icon">Icône</label>
                  <input id="icon" placeholder="🎯" />
                </div>
                <button className="btn" type="button">
                  Ajouter
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
