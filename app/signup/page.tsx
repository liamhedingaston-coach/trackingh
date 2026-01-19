import Link from "next/link";
import TopNav from "../../components/TopNav";

export default function SignupPage() {
  return (
    <main>
      <div className="container">
        <TopNav />
        <section className="card" style={{ maxWidth: 420, margin: "0 auto" }}>
          <h1>Créer un compte</h1>
          <p style={{ color: "var(--muted)" }}>
            Inscris-toi avec ton email pour démarrer le suivi.
          </p>
          <form method="post" action="/api/auth/signup">
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />
            </div>
            <div>
              <label htmlFor="password">Mot de passe</label>
              <input id="password" name="password" type="password" required />
            </div>
            <button className="btn" type="submit">
              Créer mon compte
            </button>
          </form>
          <p style={{ marginTop: 16 }}>
            Déjà inscrit ? <Link href="/login">Se connecter</Link>
          </p>
        </section>
      </div>
    </main>
  );
}
