import Link from "next/link";
import TopNav from "../../components/TopNav";

export default function LoginPage() {
  return (
    <main>
      <div className="container">
        <TopNav />
        <section className="card" style={{ maxWidth: 420, margin: "0 auto" }}>
          <h1>Connexion</h1>
          <p style={{ color: "var(--muted)" }}>
            Connecte-toi pour retrouver tes habitudes et tes stats.
          </p>
          <form method="post" action="/api/auth/login">
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />
            </div>
            <div>
              <label htmlFor="password">Mot de passe</label>
              <input id="password" name="password" type="password" required />
            </div>
            <button className="btn" type="submit">
              Se connecter
            </button>
          </form>
          <p style={{ marginTop: 16 }}>
            Pas encore inscrit ? <Link href="/signup">Créer un compte</Link>
          </p>
        </section>
      </div>
    </main>
  );
}
