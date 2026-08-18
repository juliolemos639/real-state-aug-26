import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "JCS Imobiliária",
  description: "Next state app for real estate",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        {children}
      </body>
    </html >
  );
}
