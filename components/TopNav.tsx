import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="nav container">
      <div style={{ fontWeight: 700, fontSize: "1.2rem" }}>Trackingh</div>
      <div className="nav-links">
        <Link href="/landing">Landing</Link>
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
        <Link href="/app/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}
