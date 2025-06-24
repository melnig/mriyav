import "./globals.css";
import ClientLayout from "../components/ClientLayout";

export const metadata = {
  title: "Mriyav - Веб-студія",
  description:
    "Професійна веб-студія для створення унікальних сайтів та додатків",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
