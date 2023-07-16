import "./globals.css";
import { Poppins, Roboto_Mono, Roboto_Slab } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";

export const poppins = Poppins({
  subsets: ["devanagari"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

// export const montserrat = Montserrat({
//   subsets: ["latin"],
//   display: "swap",
// });

export const roboto_mono = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* ${poppins.className}  */}
      <body className={`${roboto_mono.className}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
