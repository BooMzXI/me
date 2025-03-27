import Header from "@/components/Header";
import "@/app/globals.css";

export const metadata = {
  title: "About Me",
  description: "Portfolio , ImPatipol , I'mPatipol",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
