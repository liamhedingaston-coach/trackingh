import "./globals.css";

export const metadata = {
  title: "Trackingh",
  description: "App de suivi d'habitudes gamifié"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
