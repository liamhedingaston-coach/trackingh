import TopNav from "../../../components/TopNav";
import DashboardCharts from "../../../components/DashboardCharts";

const habits = [
  { id: 1, name: "Boire 2L d'eau" },
  { id: 2, name: "15 min de méditation" },
  { id: 3, name: "Séance de sport" },
  { id: 4, name: "Lecture 20 min" }
];

const badges = [
  "3 jours d'affilée",
  "30 habitudes validées",
  "Perfect day"
];

export default function DashboardPage() {
  return (
    <main>
      <div className="container">
        <TopNav />
        <div className="grid" style={{ gridTemplateColumns: "2fr 1fr", alignItems: "start" }}>
          <section className="grid">
            <div className="card">
              <h1>Dashboard</h1>
              <p style={{ color: "var(--muted)" }}>
                Motivation du jour : "Chaque petit pas compte."
              </p>
              <div className="badge" style={{ marginTop: 12 }}>
                Points du jour +40
              </div>
            </div>
            <div className="card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2>Check-in du jour</h2>
                <button className="btn secondary">Tout cocher</button>
              </div>
              <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
                {habits.map((habit) => (
                  <div
                    key={habit.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "12px 16px",
                      borderRadius: 16,
                      border: "1px solid var(--border)"
                    }}
                  >
                    <span>{habit.name}</span>
                    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                      <span style={{ color: "var(--success)", fontWeight: 600 }}>✅</span>
                      <span style={{ color: "var(--danger)", fontWeight: 600 }}>❌</span>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 16 }}>
                <label htmlFor="note">Note du jour (facultatif)</label>
                <textarea id="note" rows={3} placeholder="Ce qui t'a aidé aujourd'hui..." />
              </div>
            </div>
            <div className="card">
              <h2>Stats & progression</h2>
              <div className="stat-kpis" style={{ marginTop: 16 }}>
                <div className="card">
                  <strong>Taux 7 jours</strong>
                  <p>78%</p>
                </div>
                <div className="card">
                  <strong>Streak actuel</strong>
                  <p>5 jours</p>
                </div>
                <div className="card">
                  <strong>Total points</strong>
                  <p>640</p>
                </div>
              </div>
              <div style={{ marginTop: 24 }}>
                <DashboardCharts />
              </div>
            </div>
          </section>
          <aside className="grid">
            <div className="card">
              <h3>Gamification</h3>
              <p style={{ color: "var(--muted)" }}>+10 points par habitude validée.</p>
              <div style={{ marginTop: 12 }}>
                <strong>Level</strong>
                <p style={{ fontSize: "2rem", margin: 0 }}>3</p>
              </div>
              <div className="sidebar" style={{ marginTop: 12 }}>
                {badges.map((badge) => (
                  <span key={badge} className="tag">
                    🏅 {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="card">
              <h3>Objectif hebdo</h3>
              <p>5 jours de check-in cette semaine</p>
              <div className="progress">
                <span style={{ width: "70%" }} />
              </div>
              <p style={{ color: "var(--muted)", marginTop: 12 }}>
                70% atteints - streak activé.
              </p>
            </div>
            <div className="card" style={{ background: "#fff4db" }}>
              <strong>Rappel 20h</strong>
              <p>Tu veux valider ta journée ?</p>
              <button className="btn secondary">Compléter le check-in</button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
