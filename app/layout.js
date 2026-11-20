import localFont from "next/font/local";
import Header from "@/components/header";
import PageTop from "@/components/page_top";
import SplashCursor from "@/components/SplashCursor";
import "./globals.css";

const manrope = localFont({
  src: [
    {
      path: "../public/fonts/Manrope-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Manrope-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Manrope-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  title: "Hsu Thinzar — UI/UX Designer & Frontend Developer",
  description:
    "The portfolio of Hsu Thinzar, a UI/UX designer and frontend developer based in Myanmar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        <SplashCursor
          rainbow={false}
          colors={["#A477FF"]}
          size={1}
          force={1}
          swirl={3}
          trail={1}
          clickSplash
        />
        <Header />
        {children}
        <PageTop />
      </body>
    </html>
  );
}
