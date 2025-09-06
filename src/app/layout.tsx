import { Footer } from "../components/(layouts)/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {" "}
        <main className="flex-grow">{children}</main>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
