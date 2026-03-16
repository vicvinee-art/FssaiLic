import "./globals.css";
import { Poppins } from "next/font/google";
//import FloatingButtons from "./Components/Floatingaction";
import HelpWidget from "./Components/needhelp";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "FSSAI Registration & License | fssailicense.in",
  description: "Apply for FSSAI Basic Registration, State License & Central License Online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-50 text-gray-800`}>
        {children}
    <HelpWidget />
      </body>
    </html>
  );
}
